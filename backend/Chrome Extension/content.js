// Select all product listings
const productListings = document.querySelectorAll('.s-result-item');

// Create an array of product details, only for listings with a displayed price
const productDetailsArray = Array.from(productListings)
    .map((listing, index) => {
        const sellerUUID = listing.getAttribute('data-asin');
        const shippingInfoElement = listing.querySelector('span[aria-label*="shipped by Amazon"]');
        const isShippedByAmazon = shippingInfoElement !== null;
        const titleElement = listing.querySelector('.s-title-instructions-style a');
        const title = titleElement ? titleElement.textContent.trim() : "Title not available";
        const productUrl = titleElement ? titleElement.href : "URL not available";
        const rating = listing.querySelector('[aria-label*="out of 5 stars"]')
            ? parseFloat(listing.querySelector('[aria-label*="out of 5 stars"]').getAttribute('aria-label').split(" ")[0])
            : null;
        const ratingCount = listing.querySelector('[aria-label*="ratings"]')
            ? parseInt(listing.querySelector('[aria-label*="ratings"]').textContent.replace(/,/g, ''), 10)
            : null;
        const price = listing.querySelector('.a-price .a-offscreen')
            ? listing.querySelector('.a-price .a-offscreen').textContent
            : null;

        // Only return product details if a price is available
        if (price) {
            return { index, sellerUUID, isShippedByAmazon, title, productUrl, rating, ratingCount, price };
        } else {
            return null; // Skip items without a price
        }
    })
    .filter(product => product !== null); // Remove null entries from the array

// Send product details to the background script
chrome.runtime.sendMessage({
    action: "analyzeProductListings",
    productDetailsArray
});

// Listen for messages from the background script to display trust scores
chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "displayTrustScores") {
        console.log("Trust Scores received in content.js:", request.trustScores);

        request.trustScores.forEach(scoreData => {
            // Find the corresponding product listing by sellerUUID
            const productListing = document.querySelector(`.s-result-item[data-asin="${scoreData.sellerUUID}"]`);

            if (productListing) {
                // Create an element to display the trust score
                const scoreElement = document.createElement("div");
                scoreElement.innerText = `Trust Score: ${scoreData.trustScore}`;
                scoreElement.style.color = "green";
                scoreElement.style.fontWeight = "bold";
                scoreElement.style.marginTop = "8px"; // Space from other elements

                // Insert the Trust Score below the title or rating section
                const insertPosition = productListing.querySelector('.s-title-instructions-style') || productListing;
                insertPosition.appendChild(scoreElement);
            }
        });
    }
});
