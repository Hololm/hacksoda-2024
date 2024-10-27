<template>
  <div class="hero-container">
    <div class="hero-image">
      <img src="@/components/ui/amazon.png" alt="LeetCode Screenshot">
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebsiteHero'
}
</script>

<style scoped>
.hero-container {
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(144, 191, 255, 0.4);
  border-radius: 24px;
  transform: translateX(-80px); /* Use transform instead of margin */
}

.hero-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>