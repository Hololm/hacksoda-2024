<template>
  <div class="hero-wrapper">
    <div class="hero-container">
      <div class="hero-image">
        <img src="@/components/ui/amazon.png" alt="Amazon Screenshot">
      </div>
    </div>
    <ExtensionGUI class="extension-gui" />
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
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.hero-container {
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -10%;
  margin-top: 20%;
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
  border-radius: 16px;
}

.extension-gui {
  position: absolute;
  top: 38%;
  left: 55%;
  width: 28%;
  max-width: 300px;
  height: 60%;
  z-index: 10;
}

@media (max-width: 768px) {
  .hero-container {
    width: 90%;
    margin-left: 0;
  }

  .extension-gui {
    position: relative;
    width: 80%;
    max-width: none;
    margin: 2rem auto 0;
  }
}
</style>