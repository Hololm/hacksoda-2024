<script setup>
import LandingText from "@/components/LandingText.vue";
import WebsiteHero from "@/components/WebsiteHero.vue";
import Footer from "@/components/PageFooter.vue";

defineOptions({
  name: 'Container'
})
</script>

<template>
  <div class="container" ref="container">
    <div class="side" ref="side">
      <LandingText />
      <WebsiteHero />
    </div>
    <Footer />
  </div>
</template>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
  transition: transform 0.1s ease-out;
}

.side {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  flex-grow: 1;
  overflow: auto; /* Allow scrolling within the side content if needed */
}
</style>