<template>
  <nav class="navbar">
    <router-link to="./"><div class="logo">findit.</div></router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  z-index: 1000;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #0a2540;
  position: relative;
  text-decoration: none;
  display: inline-block;
  padding-bottom: 4px;
}

.logo::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0a2540;
  transition: width 0.2s ease-in-out;
}

.logo:hover::after {
  width: 100%;
}

.nav-links a {
  margin-right: 1.5rem;
  color: #0a2540;
  text-decoration: none;
}

.auth-buttons button {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.sign-in {
  background-color: transparent;
  border: none;
  color: #0a2540;
}

.contact-sales {
  background-color: #0a2540;
  color: white;
  border: none;
}

</style>