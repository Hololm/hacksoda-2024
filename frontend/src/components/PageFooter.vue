<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 Trustly</p>
      <nav class="footer-nav">
        <a href="https://github.com/Hololm/hacksoda-2024" target="_blank" class="nav-item">
          <div class="icon-wrapper">
          <GitHub class="icon"/>  <!-- Use the GitHub component here -->
          </div>
        </a>
        <a href="" target="_blank"  class="nav-item">
          <div class="icon-wrapper">
          <DevPost class="icon"/>  <!-- Use the GitHub component here -->
          </div>
        </a>
        <a href="https://hack.thesoda.io/" target="_blank"  class="nav-item">
          <div class="icon-wrapper">
            <Soda class="icon"/>  <!-- Use the WebStore component here -->
          </div>
        </a>
      </nav>
    </div>
  </footer>
</template>

<script>
import DevPost from '@/components/ui/devpost-icon.svg';
import GitHub from '@/components/GitHubIcon.vue';
import Soda from '@/components/ui/logo-light-compact.svg';

export default {
  name: 'Footer',
  components: { DevPost, GitHub, Soda }
}
</script>

<style scoped>
* {
  font-family: "Proxima Nova", sans-serif;
}

.footer {
  border-top: 0.1rem solid #f8f8f8;
  background-color: #fafafa;
  padding: 5px 0 0 0;  /* Reduced padding from 10px to 5px */
  width: 100%;
  z-index: 10;
}

.footer-content {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
}

.footer-nav {
  display: flex;
  gap: 20px;
}

.nav-item {
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
}

.icon-wrapper {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -3px;  /* Increased distance of the underline from the logo */
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #333;
  transition: all 0.3s ease;
}

.nav-item:hover .icon {
  transform: translateY(-0.3rem);
}

.nav-item:hover::after {
  width: 100%;
  left: 0;
}
</style>