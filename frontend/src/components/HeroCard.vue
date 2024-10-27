<template>
  <div class="hero-card">
    <div class="card-content">
      <p>Text</p>
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
  height: calc((100vh - 40px - 48px) / 3); /* Viewport height minus header and padding, divided by 3 */
  min-height: 40px; /* Minimum height for the card */
  max-height: 80px;
  margin: 0;
}

.card-content {
  width: 100%;
  height: 100%;
  display: flex;
}

</style>