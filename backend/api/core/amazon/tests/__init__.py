from dotenv import load_dotenv
load_dotenv("../../.env")

from .. import _request_seller, get_seller, Seller
import pytest


@pytest.mark.parametrize("seller_id", ["AG2I70PDWLTDA"])
def tests_get_raw_seller(seller_id: str):
    data = _request_seller(seller_id)

    assert data is not None


@pytest.mark.parametrize("seller_id", [
    "A1V7CXJ5T4H8KJ",
    "A1BYBYM5ULA6CN",
    "AG2I70PDWLTDA",
])
def tests_get_seller(seller_id: str):
    seller = get_seller(seller_id)

    assert seller is not None


