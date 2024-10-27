<template>
  <div class="hero-card">
    <div class="card-content">
      <div class="hero-avatar">
        <img :src="avatarUrl" :alt="title" />
      </div>
      <div class="card-details">
        <p class="card-title">{{ title }}</p>
        <div class="card-subtext">
          <span :class="['trust-score', scoreColorClass]">Trust Score: {{ score }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-card {
  background-color: white;
  border-radius: 12px;
  padding: 12px;
  transition: all 0.2s ease;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.hero-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.card-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.hero-avatar {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.hero-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-details {
  flex: 1;
  min-width: 0;
}

.card-title {
  margin: 0 0 4px 0;
  font-size: 12px;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.3;
  font-family: "Gilroy Medium", sans-serif;
}

.trust-score {
  font-size: 15px;
  font-family: "Proxima Nova", sans-serif;
}

.trust-score.green {
  color: #22c55e;
}

.trust-score.yellow {
  color: #eab308;
}

.trust-score.red {
  color: #ef4444;
}
</style>

<script>
export default {
  name: 'HeroCard',
  props: {
    title: String,
    avatarUrl: String,
    score: Number,
    status: String
  },
  computed: {
    scoreColorClass() {
      return this.status;
    }
  }
}
</script>
