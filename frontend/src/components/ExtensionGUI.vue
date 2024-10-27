<template>
  <div class="extension-container">
    <div class="extension-header">
      <!-- You can add header elements here later -->
    </div>
    <div class="extension-body">
      <!-- You can add body elements here later -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExtensionGUI'
}
</script>

<style scoped>
.extension-container {
  width: 100%;
  height: 50%;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border: 4px solid rgba(144, 191, 255, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;
}

.extension-header {
  height: 40px;
  background-color: rgba(236, 236, 236, 1);
  border-bottom: 1px solid #e0e0e0;
}

.extension-body {
  padding: 16px;
}
</style>