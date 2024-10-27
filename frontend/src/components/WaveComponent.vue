<template>
  <div class="ocean">
    <div class="waves-container">
      <!-- First wave -->
      <svg
        viewBox="0 0 2000 150"
        class="wave wave-base"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="rgba(123, 27, 229, 0.2)" stop-opacity="1" />
            <stop offset="100%" stop-color="rgba(224, 25, 25, 0.1)" stop-opacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M0,50
             C250,0 350,100 500,50
             C650,0 750,100 1000,50
             C1250,0 1350,100 1500,50
             C1650,0 1750,100 2000,50
             L2000,150 L0,150 Z"
          fill="url(#waveGradient)"
        />
      </svg>

      <!-- Second wave -->
      <svg
        viewBox="0 0 2000 150"
        class="wave wave-overlay"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="rgba(123, 27, 229, 0.2)" stop-opacity="1" />
            <stop offset="100%" stop-color="rgba(224, 25, 25, 0.1)" stop-opacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M0,25
             C250,75 350,0 500,25
             C650,75 750,0 1000,25
             C1250,75 1350,0 1500,25
             C1650,75 1750,0 2000,25
             L2000,150 L0,150 Z"
          fill="url(#waveGradient2)"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaveComponent'
}
</script>

<style scoped>
.ocean {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 300px; /* Added fixed height */
  overflow: hidden;
  z-index: 1;
}

.waves-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100%; /* Make it fill the ocean container */
}

.wave {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
}

.wave-base {
  animation: moveWave 10s linear infinite;
}

.wave-overlay {
  opacity: 0.5;
  animation: moveWave 8s linear infinite;
}

@keyframes moveWave {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>