let trustScores = {};
let productDetails = {};
let processedSellerUUIDs = new Set();

// Select all product listings
const productListings = document.querySelectorAll('.s-result-item');

// Create array of product details
const productDetailsArray = Array.from(productListings)
    .map((listing, index) => {
        if (!listing.getAttribute('data-asin')) return null;

        const sellerUUID = listing.getAttribute('data-asin');
        const shippingInfoElement = listing.querySelector('span[aria-label*="shipped by Amazon"]');
        const isShippedByAmazon = shippingInfoElement !== null;
        const titleElement = listing.querySelector('h2 .a-link-normal');
        const title = titleElement ? titleElement.textContent.trim() : "Title not available";
        const productUrl = titleElement ? titleElement.href : null;
        const imageElement = listing.querySelector('img.s-image');
        const imageUrl = imageElement ? imageElement.src : null;
        const rating = listing.querySelector('[aria-label*="out of 5 stars"]')
            ? parseFloat(listing.querySelector('[aria-label*="out of 5 stars"]').getAttribute('aria-label').split(" ")[0])
            : null;
        const ratingCount = listing.querySelector('[aria-label*="ratings"]')
            ? parseInt(listing.querySelector('[aria-label*="ratings"]').textContent.replace(/,/g, ''), 10)
            : null;
        const price = listing.querySelector('.a-price .a-offscreen')
            ? listing.querySelector('.a-price .a-offscreen').textContent
            : null;
        const primeElement = listing.querySelector('.aok-relative.s-icon-text-medium.s-prime');
        const isPrime = primeElement !== null;

        if (price && sellerUUID) {
            return {
                index,
                sellerUUID,
                isShippedByAmazon,
                title,
                productUrl,
                imageUrl,
                rating,
                ratingCount,
                price,
                isPrime
            };
        }
        return null;
    })
    .filter(product => product !== null);

// Store product details
productDetailsArray.forEach(product => {
    productDetails[product.sellerUUID] = {
        title: product.title,
        imageUrl: product.imageUrl,
        productUrl: product.productUrl
    };
});

// Send to background script
chrome.runtime.sendMessage({
    action: "analyzeProductListings",
    productDetailsArray
});

// Message listener for incoming messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "displayTrustScores") {
        // Store trust scores
        trustScores = request.trustScores.reduce((acc, score) => {
            acc[score.sellerUUID] = score.trustScore;
            return acc;
        }, {});

        // Remove any existing trust scores first
        document.querySelectorAll('.trustify-score').forEach(el => el.remove());

        // Display scores on page, checking for duplicates
        request.trustScores.forEach(scoreData => {
            if (!processedSellerUUIDs.has(scoreData.sellerUUID)) {
                const productListing = document.querySelector(`.s-result-item[data-asin="${scoreData.sellerUUID}"]`);
                if (productListing) {
                    const scoreElement = document.createElement("div");
                    scoreElement.className = 'trustify-score';
                    scoreElement.innerText = `Trust Score: ${scoreData.trustScore}`;
                    scoreElement.style.fontWeight = "bold";
                    scoreElement.style.fontSize = "16px";
                    scoreElement.style.marginTop = "8px";
                    scoreElement.style.fontFamily = "Proxima Nova, sans-serif";

                    if (scoreData.trustScore >= 90) {
                        scoreElement.style.color = "#22c55e";
                    } else if (scoreData.trustScore >= 70) {
                        scoreElement.style.color = "#eab308";
                    } else {
                        scoreElement.style.color = "#ef4444";
                    }

                    const insertPosition = productListing.querySelector('.s-title-instructions-style') || productListing;
                    insertPosition.appendChild(scoreElement);
                    processedSellerUUIDs.add(scoreData.sellerUUID);
                }
            }
        });
    }
    else if (request.action === "getTrustScores") {
        sendResponse({
            trustScores,
            productDetails
        });
    }
    return true;
});
