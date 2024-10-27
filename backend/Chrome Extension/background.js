chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "analyzeProductListings") {
        console.log("Received product details:", request.productDetailsArray);

        fetch("http://localhost:3000/analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(request.productDetailsArray)
        })
        .then(response => response.json())
        .then(trustScores => {
            console.log("Trust Scores received from backend:", trustScores); // Log to verify it's an array

            // Send only if trustScores is an array
            if (Array.isArray(trustScores)) {
                chrome.tabs.sendMessage(sender.tab.id, { action: "displayTrustScores", trustScores });
            } else {
                console.error("Error: trustScores is not an array", trustScores);
            }
        })
        .catch(error => console.error("Error communicating with backend:", error));
    }
});
