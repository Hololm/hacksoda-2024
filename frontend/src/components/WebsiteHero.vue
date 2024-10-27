<template>
  <div class="hero-wrapper" ref="heroWrapper">
    <div class="hero-container" ref="heroContainer">
      <div class="hero-image">
        <img src="@/components/ui/amazon2.png" alt="Amazon Screenshot">
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
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
  z-index: 5;
  transform: translateY(-50px);
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
  top: -10px; /* Adjust as needed */
  left: -10px; /* Adjust as needed */
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  background-image: linear-gradient(to left, rgba(224, 25, 25, 0.1), rgba(123, 27, 229, 0.2));
  border-radius: 20px; /* Rounded corners */
  transform: rotate(-3deg); /* Slight rotation */
  z-index: -1; /* Ensure it is behind the content */
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
}

img {
  border: 4px solid #eaeaea;
  border-radius: 10px;
}

.extension-gui {
}

.gui-container {
  position: absolute;
  top: 38%;
  left: 55%;
  width: 28%;
  max-width: 300px;
  height: 48%;
}

.gui-container::before {
  content: '';
  position: absolute;
  top: -10px; /* Adjust as needed */
  left: -10px; /* Adjust as needed */
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  background-image: linear-gradient(to left, rgba(224, 25, 25, 0.1), rgba(123, 27, 229, 0.2));
  border-radius: 20px; /* Rounded corners */
  transform: rotate(3deg); /* Slight rotation */
  z-index: -1; /* Ensure it is behind the content */
}
</style>
