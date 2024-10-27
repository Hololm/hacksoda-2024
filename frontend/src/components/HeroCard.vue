<template>
  <div class="hero-card">
    <div class="card-content">
      <!-- Content here -->
    </div>
  </div>
</template>

<style scoped>
.hero-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
  padding: 12px;
  transition: all 0.3s ease;
  flex: 1; /* Make all cards take equal height */
  min-height: 0; /* Allow card to shrink if needed */
  display: flex;
  margin: 0; /* Remove margin to use gap instead */
}

.card-content {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>