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
.hero-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 550px;
}

.hero-frame {
  width: 100%;
  flex: 1;
  min-width: 0;
}

.inner-frame {
  position: relative;
  gap: 10px;
  height: 40px;
  border-radius: 16px;
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  justify-content: center;
  width: 100%;
  border: 3px solid #e0e0e0;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.03);
  background-image: linear-gradient(white, white),
                    linear-gradient(to left, rgba(224, 25, 25, 0.1), rgba(123, 27, 229, 0.2));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.inner-frame:hover {
  transform: translateY(-0.2rem);
  border-color: transparent;
}

.inner-text {
  font-family: "Gilroy Medium", sans-serif;
  max-width: calc(100% - 48px);
  font-size: 28px;
  color: #000;
  margin: 0;
  padding: 0;
  backface-visibility: hidden;
  white-space: nowrap;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
}

.logo {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}
</style>