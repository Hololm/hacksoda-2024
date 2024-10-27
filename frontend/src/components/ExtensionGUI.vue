<template>
  <div class="extension-container">
    <div class="extension-header">
      <h1 class="header-text">Trusted Products</h1>
    </div>
    <div class="extension-body">
    <HeroCard
      title="ORNARTO Compatible with iPhone 13 Case"
      avatar-url="https://m.media-amazon.com/images/I/51H7ButiKrL._AC_SX679_.jpg"
      :percentage="97"
      status="green"
    />
    <HeroCard
      title=""
      avatar-url="https://m.media-amazon.com/images/I/61ES3XyA2kL._AC_SY606_.jpg"
      :percentage="78"
      status="yellow"
    />
    <HeroCard
      title="Shockproof Clear Designed for iPhone 13 Pro"
      avatar-url="https://m.media-amazon.com/images/I/71U6ML37f5L._AC_SX679_.jpg"
      :percentage="53"
      status="red"
    />
  </div>
  </div>
</template>

<script>
import HeroCard from "@/components/HeroCard.vue";

export default {
  name: 'ExtensionGUI',
  components: {
    HeroCard
  }
}
</script>

<style scoped>

.extension-container {
  position: absolute;
  right: 0;  /* Aligns to the right edge */
  top: 0;    /* Aligns to the top */
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  z-index: 500;
  border-radius: 12px;
}

.extension-header {
  height: 40px;
  background-color: rgba(236, 236, 236, 1);
  border-bottom: 1px solid #eaeaea;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: center;
}

.header-text {
  font-family: "Proxima Nova", sans-serif;
  font-size: 20px;
  color: #000000;
}

.extension-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  background-color: rgb(246, 246, 246);
  overflow-y: auto;
  height: calc(100% - 40px);
}

</style>