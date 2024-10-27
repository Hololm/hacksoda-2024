<template>
  <div class="extension-container">
    <!-- Search Header -->
    <div class="header-container">
      <div class="search-wrapper">
        <input type="text" class="search-input" value="iPhone 13 Case" readonly />
        <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>

    <!-- Cards Body -->
    <div class="extension-body">
      <div class="cards-container">
        <HeroCard
          title="ORNARTO Compatible with iPhone 13 Case"
          avatar-url="https://m.media-amazon.com/images/I/51H7ButiKrL._AC_SX679_.jpg"
          :score="97"
          status="green"
        />
        <HeroCard
          title="Purity Glass Screen Protector for iPhone 13"
          avatar-url="https://m.media-amazon.com/images/I/61ES3XyA2kL._AC_SY606_.jpg"
          :score="78"
          status="yellow"
        />
        <HeroCard
          title="Shockproof Clear Designed for iPhone 13 Pro"
          avatar-url="https://m.media-amazon.com/images/I/71U6ML37f5L._AC_SX679_.jpg"
          :score="53"
          status="red"
        />
      </div>
    </div>

    <!-- Footer -->
<div class="footer-container">
  <div class="footer-left">
    <TrustifyLogo class="footer-logo" />
  </div>
  <span class="footer-text">Trustify</span>
  <GearIcon class="footer-icon" />
</div>
  </div>
</template>

<style scoped>

.extension-container {
  width: 100%;
  height: 131%;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header-container {
  padding: 12px 16px;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 12px;
}

.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 8px 32px 8px 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: "Gilroy Medium", sans-serif;
  font-size: 14px;
  color: #1a1a1a;
  background-color: #ffffff; /* Slightly lighter background */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.search-input:focus {
  outline: none;
}

.search-input:hover {
  cursor: default;
}

.search-icon {
  position: absolute;
  right: 10px;
  color: #666;
}

.extension-body {
  flex: 1;
  background-color: white;
  padding: 12px;
  overflow-y: auto;
  min-height: 0;
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: default;
}

.footer-container {
  height: 48px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin: 0 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: relative; /* Add this */
}

.footer-left {
  display: flex;
  align-items: center;
  position: absolute; /* Add this */
  left: -10px; /* Add this */
}

.footer-logo {
  width: 64px;
  height: 64px;
  cursor: default;
}

.footer-text {
  font-family: "Proxima Nova", sans-serif;
  font-size: 24px;
  color: #1a1a1a;
  cursor: default;
  position: absolute; /* Add this */
  left: 50%; /* Add this */
  transform: translateX(-50%); /* Add this */
  width: fit-content; /* Add this */
}

.footer-icon {
  width: 24px;
  height: 24px;
  cursor: default;
  opacity: .8;
  transition: opacity 0.2s ease;
  position: absolute; /* Add this */
  right: 10px; /* Add this */
}



/* Custom scrollbar */
.extension-body::-webkit-scrollbar {
  width: 8px;
}

.extension-body::-webkit-scrollbar-track {
  background: transparent;
}

.extension-body::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: 2px solid white;
}

.extension-body::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>

<script>
import HeroCard from './HeroCard.vue'
import TrustifyLogo from '@/components/ui/trustify.svg'
import GearIcon from '@/components/ui/settings.svg'

export default {
  name: 'ExtensionGUI',
  components: {
    HeroCard,
    TrustifyLogo,
    GearIcon
  }
}
</script>
