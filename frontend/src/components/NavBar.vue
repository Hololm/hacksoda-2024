<template>
  <nav class="navbar">
    <router-link to="./"><div class="logo">Trustly</div></router-link>
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
export default {
  name: 'NavBar'
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
  padding: 1rem 2rem;
  background-color: rgba(144, 191, 255, 0.4);
  z-index: 1000;
  border-bottom: 0.2rem solid rgba(210, 210, 210, 0.1);
}

.navbar a {
  text-decoration: none;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #0a2540;
  text-decoration: none;
}

.nav-buttons {
  display: flex;
  align-items: center;
  gap: 1rem; /* Add space between buttons */
}

.download-button {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}

.download-button:hover {
  background-color: #ffffff;
  transform: translateY(-0.12rem);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.browser-logo {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.download-button span {
  font-size: 14px;
  font-weight: bold;
  color: #0a2540;
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