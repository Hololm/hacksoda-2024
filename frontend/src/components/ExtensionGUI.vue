<template>
  <div class="extension-container">
    <div class="extension-header">
      <h1 class="header-text">Trustify</h1>
    </div>
    <div class="extension-body">
      <HeroCard v-for="i in 3" :key="i"/>
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

<style>
.extension-container {
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
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
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