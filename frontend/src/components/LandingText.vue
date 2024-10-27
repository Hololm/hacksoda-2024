<script>
import DownloadHero from '@/components/DownloadHero.vue'
export default {
  name: 'LandingText',
  components: {
    DownloadHero,
  }
}
</script>

<template>
  <div class="hero-container">
    <div class="text-container">
      <p class="subtext">Shop with confidence.</p>
      <h1 class="title">Verify trusted Amazon sellers and avoid scams</h1>
      <p class="download-text">Get your #1 shopping assistant with Chrome or Firefox</p>
    </div>
    <DownloadHero class="hero-component"/>
  </div>
</template>

<style scoped>

.hero-container {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  width: 100%;
  margin-top: -20px;
}

.text-container {
  max-width: 800px;
  position: relative;
}

.subtext {
  font-size: 36px;
  font-family: "Gilroy Medium", sans-serif;
  line-height: 1.4;
  margin: 0;
  padding: 0;
}

.download-text {
  font-size: 24px;
  font-family: "Gilroy Regular", sans-serif;
  line-height: 1.1;
  transform: translateY(2rem);
  padding-left: 0;
}

.title {
  font-size: 64px;
  font-family: "Proxima Nova", sans-serif;
  line-height: 1.2;
  margin: 10px 0;
  padding: 0;
}

.hero-component {
  margin-top: 16px;
  transform: translateY(2rem);
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-self: flex-start;
  padding-left: 0;
}
</style>