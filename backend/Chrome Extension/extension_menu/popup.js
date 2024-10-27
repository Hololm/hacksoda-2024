// popup.js
document.addEventListener('DOMContentLoaded', function() {
  const gearIcon = document.querySelector('.footer-icon');
  gearIcon.addEventListener('click', function() {
    console.log('Settings clicked');
  });

function updateCards(products) {
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML = '';

    // Sort products by trust score
    const sortedProducts = products.sort((a, b) => b.trustScore - a.trustScore);
    const highestScores = sortedProducts.slice(0, 3);

    // Get lowest scores (above 25) and sort them highest to lowest
    const lowestScores = sortedProducts
        .filter(product => product.trustScore >= 25 && product.trustScore < 70)
        .slice(-3)
        .sort((a, b) => b.trustScore - a.trustScore);

    // Create section for highest scores
    const highestSection = `
      <div class="score-section">
        <div class="section-header">
          <h2>Highest Trust</h2>
          <div class="section-line"></div>
        </div>
        ${highestScores.map(product => createCard(product)).join('')}
      </div>
    `;

    // Create section for lowest scores if any exist
    const lowestSection = lowestScores.length > 0 ? `
      <div class="score-section">
        <div class="section-header">
          <h2>Lowest Trust</h2>
          <div class="section-line"></div>
        </div>
        ${lowestScores.map(product => createCard(product)).join('')}
      </div>
    ` : '';

    cardsContainer.innerHTML = highestSection + lowestSection;
}

function createCard(product) {
    const scoreClass = getScoreClass(product.trustScore);
    return `
      <div class="hero-card" onclick="window.open('${product.productUrl}', '_blank')">
        <div class="card-content">
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
        <p class="loading-text">Analyzing page...</p>
      </div>
    `;
}

  function showError(message) {
  const cardsContainer = document.querySelector('.cards-container');
  cardsContainer.innerHTML = `
    <div class="error-state">
      <div class="error-circle">
        <span class="error-x">×</span>
      </div>
      <div class="error-message">
        ${message}
      </div>
    </div>
    `;

    const refreshButton = document.querySelector('.refresh-button');
    if (refreshButton) {
      refreshButton.addEventListener('click', () => {
        window.location.reload(); // Refresh just the extension popup
      });
    }
  }
  document.querySelector('.refresh-icon').addEventListener('click', () => {
  window.location.reload();
  });


  function getScoreClass(score) {
    if (score >= 90) return 'green';
    if (score >= 70) return 'yellow';
    return 'red';
  }

  // Check active tab and wait for trust scores
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const activeTab = tabs[0];
    if (activeTab.url.includes('amazon.com')) {
      showLoading();

      // Poll for trust scores every second for up to 12 seconds
      let attempts = 0;
      const maxAttempts = 5;

      function checkForTrustScores() {
        chrome.tabs.sendMessage(activeTab.id, {action: "getTrustScores"}, function(response) {
          if (response && response.trustScores && Object.keys(response.trustScores).length > 0) {
            // Convert trust scores hash to array of products
            const products = Object.entries(response.trustScores).map(([sellerUUID, trustScore]) => ({
              sellerUUID,
              trustScore,
              title: response.productDetails[sellerUUID].title,
              imageUrl: response.productDetails[sellerUUID].imageUrl
            }));
            updateCards(products);
          } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(checkForTrustScores, 1000);
          } else {
            showError("Could not load trust scores. Please refresh the page.");
          }
        });
      }

      checkForTrustScores();
    } else {
      showError("Please visit an Amazon product page to see trusted sellers.");
    }
  });
});
