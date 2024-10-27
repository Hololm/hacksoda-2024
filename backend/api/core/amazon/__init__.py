from zyte_api import ZyteAPI
from dotenv import load_dotenv
from pydantic import BaseModel
from base64 import b64decode
import json
from datetime import datetime
from bs4 import BeautifulSoup
import re

load_dotenv()
client = ZyteAPI()


class Response(BaseModel):
    url: str
    status_code: int
    content: bytes

    @property
    def text(self) -> str:
        return self.content.decode("utf-8")

    @property
    def json_data(self) -> dict:
        return json.loads(self.text)



class Rating(BaseModel):
    description: str
    rating: int
    datetime: datetime
    name: str = None


class RatingsStatistics(BaseModel):
    raw: dict
    total_ratings: int
    positive_percentage: int
    stars: float


class Seller(BaseModel):
    uuid: str
    name: str
    description: str
    ratings: list[Rating]
    business_name: str
    business_address: str
    ratings_statistics: RatingsStatistics | None = None
    is_pro: bool = False
    just_launched: bool = False


def _request_seller(seller_id: str) -> Response:
    raw_data = client.get({
        "url": "https://www.amazon.com/sp?ie=UTF8&seller={}".format(seller_id),
        "httpResponseBody": True
    })

    return Response(
        url=raw_data["url"],
        status_code=raw_data["statusCode"],
        content=b64decode(raw_data["httpResponseBody"])
    )

def _parse_seller(html: str) -> Seller:
    soup = BeautifulSoup(html, "html.parser")

    reviews_json_element = soup.find(
        "script",
        {
            "type": "a-state",
            "data-a-state": '{"key":"lifetimeRatingsData"}',
        }
    )
    reviews_json = json.loads(reviews_json_element.text) if reviews_json_element else {}

    return Seller(
        uuid=json.loads(soup.find(
            "script",
            {
                "type": "a-state",
                "data-a-state": '{"key":"spp-page-var-page-state"}',
            }
        ).text)["sellerID"],
        name=soup.find("h1", {"id": "seller-name"}).text,
        description=soup.find("div", {"class": "about-seller"}).text,
        ratings_statistics=RatingsStatistics(
            raw=reviews_json,
            total_ratings=reviews_json["ratingCount"],
            positive_percentage=re.search(
                r"(\d{1,3})% positive",
                soup.find("b", text=re.compile(r"(\d{1,3})% positive")).text,
            ).group(1),
            stars=float(re.search(
                r"(\d(?:\.\d)?) out of 5 stars",
                soup.find("span", text=re.compile(r"(\d(?:\.\d)?) out of 5 stars")).text,
            ).group(1)),
        ) if reviews_json else None,
        business_name=soup.find("span", text=re.compile("Business Name:\n")).find_next("span").text,
        business_address=soup.find("span", text=re.compile("Business Address:\n")).find_next("span").text,
        ratings=[],
        is_pro=bool(soup.find("a", text=re.compile("See all products"))),
        just_launched=bool(soup.find("span", text=re.compile("Just launched"))),
    )


def get_seller(seller_id: str) -> Seller:
    return _parse_seller(_request_seller(seller_id).text)

