<script setup>
import LandingText from "@/components/LandingText.vue";
import WebsiteHero from "@/components/WebsiteHero.vue";
import Footer from "@/components/PageFooter.vue";
import WaveComponent from "@/components/WaveComponent.vue";

defineOptions({
  name: 'Container',
  components: {
    LandingText,
    WebsiteHero,
    Footer,
    WaveComponent
  }
})
</script>

<template>
  <div class="container" ref="container">
    <div class="content">
      <div class="side" ref="side">
        <div class="landing"><LandingText /></div>
        <div class="website-container">
          <div class="website"><WebsiteHero /></div>
        </div>
      </div>
    </div>
    <WaveComponent />
    <Footer />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  transition: transform 0.1s ease-out;
}

.content {
  flex-grow: 1;
  overflow: auto;
}

.side {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4%;
  height: 100%;
  position: relative;
}

.website-container {
  width: 42%;
  display: flex;
  align-items: center;
}

.website {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

:deep(.footer) {
  position: relative;
  z-index: 11;
}
</style>
