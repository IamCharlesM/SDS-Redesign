<template>

 <div id="app">
   <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
<!-- <section class="hero is-dark is-medium"> -->
  <!-- Hero head: will stick at the top -->
  <!-- <div class="hero-head"> -->
    <nav class="navbar is-black">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="./assets/placeholder.jpg" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
           
      <a class="navbar-item">
        Registration
      </a>

      <a class="navbar-item">
        Schedule
      </a>
            <div class="navbar-item has-dropdown is-hoverable is-boxed ">
        <a class="navbar-link ">
          More
        </a>

        <div class="navbar-dropdown is-boxed ">
          <a class="navbar-item">
            Legacy
          </a>
          <a class="navbar-item">
            Staff
          </a>
          <a class="navbar-item">
            Contact Us
          </a>
        
        </div>
      </div>
          </div>
        </div>
      </div>
    </nav>
  <!-- </div> -->
  <!-- </section> -->

    <Home />
  </div>
</template>

<script>
  // import Navbar from './components/Navbar.vue'
  import Home from './components/Home.vue'
  // import Registration from './components/Registration.vue'
export default {
  name: 'app',
  components: {
    // Navbar,
    Home,
    // Registration
  }
}
</script>

<style scoped>
/* #app {
  background-color: black;
  background-image: url("./assets/wall.jpg") !important;
  background-size: cover;
} */

.navbar-dropdown {
  /* background-color: hsl(0, 0%, 21%) */
  background-color: black
}
.navbar-dropdown a:hover {
  color: black !important
}

.navbar-dropdown a {
  color: white !important
}
</style>