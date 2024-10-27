<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import NavBar from '@/components/NavBar.vue'
import Container from "@/components/Container.vue";
</script>

<template>
  <div ref="homeView" class="home-view">
    <NavBar/>
    <Container ref="containerRef"/>
  </div>

</template>

<style scoped>
.home-view {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
