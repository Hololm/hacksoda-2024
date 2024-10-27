document.addEventListener('DOMContentLoaded', function() {
    const maxRetries = 5;
    let retryCount = 0;

    // Show initial loading state
    showLoading();

    function tryLoadingCards() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const activeTab = tabs[0];
            if (activeTab.url.includes('amazon.com')) {
                chrome.tabs.sendMessage(activeTab.id, {action: "getTrustScores"}, function(response) {
                    if (response && response.trustScores && response.productDetails) {
                        const products = Object.entries(response.trustScores).map(([sellerUUID, trustScore]) => ({
                            sellerUUID,
                            trustScore,
                            title: response.productDetails[sellerUUID]?.title || '',
                            imageUrl: response.productDetails[sellerUUID]?.imageUrl || '',
                            productUrl: response.productDetails[sellerUUID]?.productUrl || ''
                        }));

                        updateCards(products);
                    } else if (retryCount < maxRetries) {
                        retryCount++;
                        setTimeout(tryLoadingCards, 1000);
                    } else {
                        showError("Could not load product data. Please refresh the page.");
                    }
                });
            } else {
                showError("Please visit an Amazon product page to see trusted sellers.");
            }
        });
    }

    tryLoadingCards();

    // Add refresh icon click handler
    document.querySelector('.refresh-icon')?.addEventListener('click', () => {
        window.location.reload();
    });
});

function updateCards(products) {
    if (!products || products.length === 0) {
        showError("No products found to analyze.");
        return;
    }

    const cardsContainer = document.querySelector('.cards-container');
    if (!cardsContainer) {
        console.error('Cards container not found');
        return;
    }

    cardsContainer.innerHTML = '';

    // Sort and filter products
    const sortedProducts = products.sort((a, b) => b.trustScore - a.trustScore);
    const highestScores = sortedProducts.slice(0, 3);
    const lowestScores = sortedProducts
        .filter(product => product.trustScore >= 25 && product.trustScore < 70)
        .slice(-3)
        .sort((a, b) => b.trustScore - a.trustScore);

    // Add sections
    if (highestScores.length > 0) {
        const highestSection = `
            <div class="score-section">
                <div class="section-header">
                    <h2>Highest Trust</h2>
                    <div class="section-line"></div>
                </div>
                ${highestScores.map(product => createCard(product)).join('')}
            </div>
        `;
        cardsContainer.innerHTML += highestSection;
    }

    if (lowestScores.length > 0) {
        const lowestSection = `
            <div class="score-section">
                <div class="section-header">
                    <h2>Lowest Trust</h2>
                    <div class="section-line"></div>
                </div>
                ${lowestScores.map(product => createCard(product)).join('')}
            </div>
        `;
        cardsContainer.innerHTML += lowestSection;
    }
}

function createCard(product) {
    const scoreClass = getScoreClass(product.trustScore);
    return `
        <div class="hero-card">
            <div class="card-content" data-url="${product.productUrl}">
                <div class="hero-avatar">
                    <img src="${product.imageUrl || 'icons/placeholder.png'}" alt="${product.title}" />
                </div>
                <div class="card-details">
                    <p class="card-title">${product.title}</p>
                    <div class="card-subtext">
                        <span class="trust-score ${scoreClass}">Trust Score: ${product.trustScore}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showLoading() {
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML = `
        <div class="loading-state">
            <div class="loading-spinner"></div>
            <p class="loading-text">Analyzing products...</p>
        </div>
    `;
}

function showError(message) {
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML = `
        <div class="error-state">
            <div class="error-circle"></div>
            <div class="error-message">${message}</div>
        </div>
    `;
}

function getScoreClass(score) {
    if (score >= 90) return 'green';
    if (score >= 70) return 'yellow';
    return 'red';
}

// Add click handler for cards
document.addEventListener('click', function(e) {
    const cardContent = e.target.closest('.card-content');
    if (cardContent) {
        const url = cardContent.dataset.url;
        if (url) {
            chrome.tabs.create({ url: url });
        }
    }
});
