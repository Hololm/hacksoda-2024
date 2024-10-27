<template>
  <div class="hero-wrapper" ref="heroWrapper">
    <div class="hero-container" ref="heroContainer">
      <div class="hero-image">
        <img src="@/components/ui/amazon.png" alt="Amazon Screenshot">
      </div>
    </div>
    <div class="gui-container">
    <ExtensionGUI class="extension-gui" ref="extensionGui" />
      </div>
  </div>
</template>

<script>
import ExtensionGUI from "@/components/ExtensionGUI.vue";

export default {
  name: 'WebsiteHero',
  components: {
    ExtensionGUI
  }
}
</script>

<style scoped>
.hero-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  z-index: 5;
  transform: translateY(-70px);
}

.hero-container {
  position: relative;
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -10%;
  margin-top: 20%;
  z-index: -1;
}

.hero-container::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  background-image: linear-gradient(to left, rgba(224, 25, 25, 0.1), rgba(123, 27, 229, 0.2));
  border-radius: 20px;
  transform: rotate(-3deg);
  z-index: -1;
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
  border: none;
}

.gui-container {
  position: absolute;
  top: 38%;
  left: 55%;
  width: 28%;
  max-width: 300px;
  height: 48%;
  transform: translateX(100px);
  transition: all 0.3s ease;
}

.gui-container::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 120px);
  background-image: linear-gradient(to left, rgba(224, 25, 25, 0.2), rgba(123, 27, 229, 0.2));
  border-radius: 20px;
  transform: rotate(3deg);
  z-index: -1;
}

/* Large screens (1440px and up) */
@media only screen and (min-width: 1440px) {
  .hero-wrapper {
    max-width: 1400px;
  }

  .gui-container {
    width: 30%;
    transform: translateX(100px);
  }
}

/* Standard desktop (1200px to 1439px) */
@media only screen and (max-width: 1439px) {
  .gui-container {
    width: 28%;
    transform: translateX(100px);
  }
}

/* Smaller desktop (1024px to 1199px) */
@media only screen and (max-width: 1199px) {
  .hero-wrapper {
    max-width: 1000px;
  }

  .gui-container {
    width: 32%;
    transform: translateX(80px);
    left: 52%;
  }

  .hero-container {
    margin-left: -5%;
  }
}

/* Small desktop (800px to 1023px) */
@media only screen and (max-width: 1023px) {
  .hero-wrapper {
    max-width: 800px;
    transform: translateY(-30px);
  }

  .gui-container {
    width: 35%;
    transform: translateX(60px);
    left: 50%;
  }

  .hero-container {
    margin-left: 0;
    max-width: 600px;
  }
}
</style>
