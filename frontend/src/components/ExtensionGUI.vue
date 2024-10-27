<template>
  <div class="extension-container">
    <div class="extension-header">
    </div>
    <div class="extension-body">
      <HeroCard v-for="i in 5" :key="i"/>
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
  border-radius: 12px;
}

.extension-header {
  height: 40px;
  background-color: rgba(236, 236, 236, 1);
  border-bottom: 1px solid #eaeaea;
  flex-shrink: 0;
}

.extension-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px; /* Consistent spacing between cards */
  padding: 8px;
  background-color: rgb(246, 246, 246);
  overflow: hidden; /* Prevent scrolling */
}

/* Add media query for height adjustment if needed */
@media (max-height: 600px) {
  .extension-body {
    gap: 4px; /* Smaller gap for smaller screens */
  }
}
</style>