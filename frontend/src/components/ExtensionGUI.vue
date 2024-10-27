<template>
  <div class="extension-container">
    <div class="extension-header">
      <!-- You can add header elements here later -->
    </div>
    <div class="extension-body">
      <HeroCard v-for="i in 4" :key="i"/>
    </div>
  </div>
</template>

<script>
import HeroCard from "@/components/HeroCard.vue";

export default {
  name: 'ExtensionGUI',
  components: {
    HeroCard
  }
}
</script>

<style scoped>
.extension-container {
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  z-index: 500;

  border: 6px solid transparent;
  background:
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(to left, rgba(224, 25, 25, 0.1), rgba(123, 27, 229, 0.2)) border-box;
  border-radius: 12px;
}

.extension-header {
  height: 40px;
  background-color: rgba(236, 236, 236, 1);
  border-bottom: 1px solid #eaeaea;
  flex-shrink: 0; /* Prevent header from shrinking */
}

.extension-body {
  flex-grow: 1; /* Allow body to grow and fill remaining space */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribute space between cards */
  align-items: center; /* Center cards horizontally */
  padding: 8px;
  background-color: rgba(236, 236, 236, 0.5);
  overflow-y: auto; /* Add scroll if content exceeds container */
}
</style>
