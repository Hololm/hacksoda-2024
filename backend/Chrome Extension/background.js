// Function to calculate Trust Score based on product details
function calculateTrustScore(product, productArray) {
    let score = 0;

    // 1. Shipped by Amazon / Prime (60 Points)
    score += (product.isShippedByAmazon || product.isPrime) ? 60 : 0;

    // 2. Price Score (20 Points)
    const prices = productArray.map(p => parseFloat(p.price.replace(/[^\d.-]/g, '')));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const productPrice = parseFloat(product.price.replace(/[^\d.-]/g, ''));
    const priceScore = 20 * (maxPrice - productPrice) / (maxPrice - minPrice);
    score += priceScore;

    // 3. Rating and Rating Count Score (20 Points)
    const normalizedRating = product.rating ? product.rating / 5 : 0;
    const ratingCountFactor = product.ratingCount ? 1 - Math.exp(-product.ratingCount / 500) : 0;
    const ratingScore = 20 * (normalizedRating * ratingCountFactor);
    score += ratingScore;

    // Ensure score does not exceed 100
    return Math.round(Math.min(score, 100));
}

chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.action === "analyzeProductListings") {
        console.log("Processing products:", request.productDetailsArray.length);

        try {
            const trustScores = request.productDetailsArray.map(product => ({
                sellerUUID: product.sellerUUID,
                trustScore: calculateTrustScore(product, request.productDetailsArray)
            }));

            console.log("Calculated trust scores:", trustScores);

            if (Array.isArray(trustScores) && trustScores.length > 0) {
                chrome.tabs.sendMessage(sender.tab.id, {
                    action: "displayTrustScores",
                    trustScores
                });
            }
        } catch (error) {
            console.error("Error calculating trust scores:", error);
        }
    }
    return true;
});
