<template>
  <nav class="navbar">
    <TrustifyLogo class="company-logo"/>
    <router-link to="./">
      <div class="logo">Trustify</div>
    </router-link>
    <div class="nav-buttons">
      <button class="download-button">
        <img class="browser-logo" src="https://www.google.com/chrome/static/images/chrome-logo.svg" alt="Chrome Logo">
        <span>Add to Chrome</span>
      </button>
      <button class="download-button">
        <img class="browser-logo" src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo-sm.f2523d97cbe0.png" alt="Firefox Logo">
        <span>Add to Firefox</span>
      </button>
    </div>
  </nav>
</template>

<script>
import TrustifyLogo from '@/components/ui/trustify.svg';

export default {
  name: 'NavBar',
  components: {
    TrustifyLogo
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6rem 1rem 2.5rem;
  background: white; /* Change to solid white background */
  z-index: 99999;
  box-shadow: 0 3px 13px rgba(0, 0, 0, 0.06); /* Subtle shadow instead of border */
}

.navbar a {
  text-decoration: none;
}

.company-logo {
  width: 128px; /* Smaller logo */
  height: 128px;
  position: absolute;
  color: #22c55e; /* Match the modern green from earlier */
}

.logo {
  font-size: 2.2rem;
  color: #0a2540;
  padding-left: 100px;
  position: relative;
}

.logo::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 100px; /* Match the padding-left */
  width: 0;
  height: 2px;
  background-color: #0a2540;
  transition: width 0.3s ease;
}

.logo:hover::after {
  width: calc(100% - 100px); /* Subtract the padding-left */
}

.nav-link:hover .logo-text::after {
  width: 100%;
}

.nav-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.download-button {
  display: flex;
  align-items: center;
  background-color: white;
  border: 2px solid #f3f4f6; /* Light border */
  border-radius: 8px; /* Slightly reduced radius */
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.download-button:hover {
  transform: translateY(-0.12rem);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-color: #e5e7eb;
}

.browser-logo {
  width: 32px;
  height: 32px;
  margin-right: 8px;
}

.download-button span {
  font-size: 14px;
  font-weight: 600; /* Slightly reduced from bold */
  color: #1f2937; /* Slightly lighter than #0a2540 */
}

* {
  font-family: "Proxima Nova", serif;
}

@media (max-width: 600px) {
  .navbar {
    padding: 1rem;
  }

  .download-button {
    padding: 6px 12px;
  }

  .download-button span {
    font-size: 12px;
  }

  .browser-logo {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
}
</style>