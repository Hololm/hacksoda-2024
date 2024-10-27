// Select all product listings
const productListings = document.querySelectorAll('.s-result-item');

// Create an array of product details
const productDetailsArray = Array.from(productListings).map(listing => {
    // Extract the Seller UUID (data-asin attribute)
    const sellerUUID = listing.getAttribute('data-asin');

    // Check if the product is shipped by Amazon
    const shippingInfoElement = listing.querySelector('span[aria-label*="shipped by Amazon"]');
    const isShippedByAmazon = shippingInfoElement !== null;

    return {
        sellerUUID,
        isShippedByAmazon
    };
});

// Send product details to the background script
chrome.runtime.sendMessage({
    action: "analyzeProductListings",
    productDetailsArray
});

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "displayTrustScores") {
        console.log("Trust Scores received in content.js:", request.trustScores); // Check if this is an array

        if (Array.isArray(request.trustScores)) {
            request.trustScores.forEach(scoreData => {
                const productListing = document.querySelector(`.s-result-item[data-asin="${scoreData.sellerUUID}"]`);

                const scoreElement = document.createElement("div");
                scoreElement.innerText = `Trust Score: ${scoreData.trustScore}`;
                scoreElement.style.color = "green";
                scoreElement.style.fontWeight = "bold";
                productListing.appendChild(scoreElement);
            });
        } else {
            console.error("Error: trustScores is not an array:", request.trustScores);
        }
    }
});

