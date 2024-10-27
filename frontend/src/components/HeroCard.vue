<template>
  <div class="hero-card">
    <div class="card-content">
      <div class="hero-avatar">
        <img :src="avatarUrl" :alt="title" />
      </div>
      <div class="card-details">
        <p class="card-title">{{ title }}</p>
        <div class="card-subtext">
          <p>{{ percentage }}%</p>
          <component :is="checkmarkComponent" class="checkmark" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RedCheckmark from '@/components/ui/checkmarks/red_checkmark.svg';
import YellowCheckmark from '@/components/ui/checkmarks/yellow_checkmark.svg';
import GreenCheckmark from '@/components/ui/checkmarks/green_checkmark.svg';

export default {
  name: 'HeroCard',
  components: {
    RedCheckmark,
    YellowCheckmark,
    GreenCheckmark
  },
  props: {
    title: {
      type: String,
      default: 'Hero Title'
    },
    avatarUrl: {
      type: String,
      default: 'https://placehold.co/512'
    },
    percentage: {
      type: Number,
      default: 100,
      validator: value => value >= 0 && value <= 100
    },
    status: {
      type: String,
      default: 'green',
      validator: value => ['red', 'yellow', 'green'].includes(value)
    }
  },
  computed: {
    checkmarkComponent() {
      const checkmarks = {
        red: 'RedCheckmark',
        yellow: 'YellowCheckmark',
        green: 'GreenCheckmark'
      };
      return checkmarks[this.status];
    }
  }
}
</script>

<style scoped>
.hero-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
  padding: 12px;
  transition: all 0.3s ease;
  height: calc((100vh - 40px - 48px) / 3);
  min-height: 40px;
  max-height: 80px;
  margin: 0;
}

.card-content {
  display: flex;
  align-items: center; /* Centers avatar vertically */
  height: 100%;
}

.hero-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0; /* Prevents avatar from shrinking */
}

.hero-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
  gap: 4px; /* Adds space between title and subtext */
}

.card-title {
  font-family: "Gilroy Medium", sans-serif;
  margin: 0; /* Remove default margins */
  font-size: 12px;
}

.card-subtext {
  display: flex;
  align-items: center;
  gap: 4px; /* Space between checkmark and percentage */
  font-size: 18px;
}

.card-subtext p {
  margin: 0; /* Remove default margins */
  order: 2; /* Moves percentage to the right */
  font-family: "Proxima Nova", sans-serif;
}

:deep(.checkmark), /* For Vue scoped styles */
.checkmark {
  order: 1; /* Moves checkmark to the left */
  width: 24px; /* Adjust size as needed */
  height: 24px; /* Adjust size as needed */
}

:deep(.checkmark svg) {
  width: 100%;
  height: 100%;
}
</style>
