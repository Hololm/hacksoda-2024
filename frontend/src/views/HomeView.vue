<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import NavBar from '@/components/NavBar.vue'
import Container from "@/components/Container.vue";

const homeView = ref(null);

const parallax = (event) => {
  if (!homeView.value) return;

  const children = homeView.value.querySelectorAll('.parallax');
  children.forEach((shift) => {
    const position = shift.getAttribute("data-value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;
    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
};

onMounted(() => {
  document.addEventListener("mousemove", parallax);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", parallax);
});
</script>

<template>
  <div ref="homeView" class="home-view">
    <NavBar/>
    <Container class="parallax" data-value="5"/>
  </div>
</template>

<style scoped>
.home-view {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.parallax {
  transition: transform 0.1s ease-out;
}
</style>
