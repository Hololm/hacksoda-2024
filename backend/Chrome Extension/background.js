// Function to calculate Trust Score based on product details
function calculateTrustScore(product) {
    let score = 0;

    // Check if the product is shipped by Amazon and set the score accordingly
    score = product.isShippedByAmazon ? 80 : 60;

    // You can add more detailed scoring logic here, like sellerUUID checks, rating adjustments, etc.
    
    return score;
}

// Listen for messages from content.js
chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.action === "analyzeProductListings") {
        console.log("Received product details:", JSON.stringify(request.productDetailsArray, null, 2));

        // Ensure each product has a trust score calculated
        const trustScores = request.productDetailsArray.map(product => ({
            sellerUUID: product.sellerUUID,    // Keep a reference to the seller UUID
            trustScore: calculateTrustScore(product)  // Calculate and store the score
        }));

        // Check and log the structure of trustScores array
        console.log("Calculated trust scores:", JSON.stringify(trustScores, null, 2));

        // Verify that trustScores is indeed an array before sending it
        if (Array.isArray(trustScores)) {
            // Send the array of trust scores back to content.js for each product
            chrome.tabs.sendMessage(sender.tab.id, { action: "displayTrustScores", trustScores });
        } else {
            console.error("Error: trustScores is not an array:", trustScores);
        }
    }
});
