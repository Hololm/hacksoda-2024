<template>
  <div class="hero-container">
    <div class="hero-frame">
      <div class="inner-frame">
        <img class="logo" src="https://www.google.com/chrome/static/images/chrome-logo.svg" alt="Google Chrome Logo">
        <p class="inner-text">Add to Chrome</p>
      </div>
    </div>
    <div class="hero-frame">
      <div class="inner-frame">
        <img class="logo" src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo-sm.f2523d97cbe0.png" alt="Mozilla Firefox Logo">
        <p class="inner-text">Add to Firefox</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownloadHero',
}
</script>

<style scoped>
* {
  font-family: "Gilroy Regular", serif;
}

.hero-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 610px;
}

.hero-frame {
  width: 100%;
  max-width: 295px;
  padding: 6px;
  flex: 1;
  min-width: 0;
}

.inner-frame {
  border-radius: 16px;
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  transform-origin: center;
  padding: 10px;
  justify-content: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border: 4px solid rgba(144, 191, 255, 0.6);
  width: 100%;
}

.inner-frame:hover {
  background-color: rgb(255, 255, 255);
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.2);
  border: 4px solid rgba(144, 191, 255, 1);
  transform: TranslateY(-0.2rem);
}

.inner-text {
  font-family: "Gilroy Medium", sans-serif;
  font-size: 30px;
  color: rgb(0, 0, 0);
  margin: 0;
  padding: 0;
  backface-visibility: hidden;
  white-space: nowrap;
   -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.logo {
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  padding-right: 10px;
}
</style>