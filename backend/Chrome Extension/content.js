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
        const primeElement = listing.querySelector('.aok-relative.s-icon-text-medium.s-prime');
        const isPrime = primeElement !== null;

        // Only return product details if a price is available
        if (price) {
            return { index, sellerUUID, isShippedByAmazon, title, productUrl, rating, ratingCount, price, isPrime };
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
                
                // Set color based on the Trust Score
                scoreElement.style.color = scoreData.trustScore < 80 ? "#CC5500" : "green";
                
                scoreElement.style.fontWeight = "bold";
                scoreElement.style.fontSize = "16px"; // Larger font for Clarity
                scoreElement.style.marginTop = "8px"; // Space from other elements

                // Insert the Trust Score below the title or rating section
                const insertPosition = productListing.querySelector('.s-title-instructions-style') || productListing;
                insertPosition.appendChild(scoreElement);
            }
        });
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getProductData") {
    sendResponse({
      productDetailsArray: productDetailsArray.map(product => ({
        ...product,
        imageUrl: getProductImage(product.sellerUUID),
        trustScore: calculateLocalTrustScore(product)
      }))
    });
  }
  return true; // Keep the message channel open for async response
});

function getProductImage(asin) {
  const productElement = document.querySelector(`[data-asin="${asin}"]`);
  const imgElement = productElement?.querySelector('img[data-image-load]');
  return imgElement?.src || null;
}

// Temporary local trust score calculation until background.js sends scores
function calculateLocalTrustScore(product) {
  // Simple placeholder calculation
  let score = 0;
  if (product.isShippedByAmazon) score += 60;
  if (product.rating) score += product.rating * 8;
  return Math.min(Math.round(score), 100);
}

// Add to content.js
let trustScores = {};
let productDetails = {};

// Store trust scores when received from background.js
chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "displayTrustScores") {
        trustScores = request.trustScores.reduce((acc, score) => {
            acc[score.sellerUUID] = score.trustScore;
            return acc;
        }, {});

        // Store product details
        productDetails = productDetailsArray.reduce((acc, product) => {
            acc[product.sellerUUID] = {
                title: product.title,
                imageUrl: getProductImage(product.sellerUUID)
            };
            return acc;
        }, {});
    }
});

// Handle requests for trust scores from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getTrustScores") {
        sendResponse({
            trustScores,
            productDetails
        });
    }
    return true;
});

function getProductImage(asin) {
    const productElement = document.querySelector(`[data-asin="${asin}"]`);
    const imgElement = productElement?.querySelector('img[data-image-load]');
    return imgElement?.src || null;
}