<template>
  <div class="hero-container">
    <div class="hero-frame">
      <div class="inner-frame">
        <img class="logo" src="https://www.google.com/chrome/static/images/chrome-logo.svg" alt="Google Chrome Logo">
        <p class="inner-text">Add to Chrome</p>
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
  flex-direction: column;
  align-items: flex-start;
}

.hero-frame {
  width: 100%;
  max-width: 295px;
  background-color: rgba(144, 191, 255, 0.4);
  border-radius: 8px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  padding: 6px;
}

.inner-frame {
  border-radius: 8px;
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  transform-origin: center;
  padding: 10px;
  justify-content: center;
}

.inner-frame:hover {
  background-color: rgb(255, 255, 255);
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(-0.08rem);
}

.inner-text {
  font-family: "Gilroy Medium", sans-serif;
  font-size: 30px;
  color: rgb(0, 0, 0);
  margin: 0;
  padding: 0;
  backface-visibility: hidden;
}

.logo {
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  padding-right: 10px;
}
</style>