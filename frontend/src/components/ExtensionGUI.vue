<template>
  <div class="extension-container">
    <div class="header-container">
      <div class="header-text">
        <p>Trusted Sellers</p>
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
  height: 130%;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header-container {
  text-align: center;
  background-color: white;
  margin-top: -6px;
  margin-left: 12px;
  margin-right: 12px;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: default;
}

.header-text {
  font-family: "Proxima Nova", sans-serif;
  font-size: 24px;
  color: #1a1a1a;
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
  position: absolute;
  left: -2px;
}

.header-text p {
  margin: 16px 0;
}

.footer-logo {
  width: 64px;
  height: 64px;
}

.footer-text {
  font-family: "Proxima Nova", sans-serif;
  font-size: 24px;
  color: #1a1a1a;
  cursor: default;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
}

.footer-icon {
  width: 32px;
  height: 32px;
  cursor: pointer; /* Changed from default */
  opacity: .8;
  transition: opacity 0.2s ease;
  position: absolute;
  right: 5%;
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
