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
          d="M0,70
             C250,-10 350,150 500,70
             C650,-10 750,150 1000,70
             C1250,-10 1350,150 1500,70
             C1650,-10 1750,150 2000,70
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
          d="M0,70
             C250,-10 350,150 500,70
             C650,-10 750,150 1000,70
             C1250,-10 1350,150 1500,70
             C1650,-10 1750,150 2000,70
             L2000,150 L0,150 Z"
          fill="url(#waveGradient2)"
        />
      </svg>

      <!-- Third wave -->
      <svg
        viewBox="0 0 2000 150"
        class="wave wave-top"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="rgba(123, 27, 229, 0.2)" stop-opacity="1" />
            <stop offset="100%" stop-color="rgba(224, 25, 25, 0.1)" stop-opacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M0,70
             C250,-10 350,150 500,70
             C650,-10 750,150 1000,70
             C1250,-10 1350,150 1500,70
             C1650,-10 1750,150 2000,70
             L2000,150 L0,150 Z"
          fill="url(#waveGradient3)"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.ocean {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 215px;
  overflow: hidden;
  z-index: 1;
}

.waves-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100%;
}

.wave {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
}

.wave-base {
  animation: moveWave 42s linear infinite;
}

.wave-overlay {
  opacity: 0.5;
  animation: moveWave 18s linear infinite;
}

.wave-top {
  opacity: 0.3;
  animation: moveWave 30s linear infinite;
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
