<script setup>
import LandingText from "@/components/LandingText.vue";
import WebsiteHero from "@/components/WebsiteHero.vue";
</script>

<template>
  <div class="side">
  <LandingText/>
  <WebsiteHero/>
  </div>
</template>

<style scoped>
.side {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%; /* Add some horizontal padding */
  height: 100vh; /* Full viewport height */
}
</style>