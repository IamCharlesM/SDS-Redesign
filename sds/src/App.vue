<template>

 <div id="app">
   <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
<!-- <section class="hero is-dark is-medium"> -->
  <!-- Hero head: will stick at the top -->
  <!-- <div class="hero-head"> -->
    <nav class="navbar ">
      <div class="container ">
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
    <Partner />
    <Staff />
  </div>
</template>

<script>
  import Partner from './components/Partner.vue'
  import Home from './components/Home.vue'
  import Staff from './components/Staff.vue'
export default {
  name: 'app',
  components: {
    Partner,
    Home,
    Staff
  }
}
</script>

<style scoped>
#app {
  background-color: #e12428;
  background-image: url(/img/wall-1.267faee9.jpg) !important;
  background-size: cover;
}

.navbar-dropdown {
  /* background-color: hsl(0, 0%, 21%) */
  background-color: #e12428
}
.navbar-dropdown a:hover {
  color: #e12428 !important
}

.navbar-dropdown a {
  color: white !important
}

.navbar {
  background-color: #e12428;
}

a {
  color: white !important;
}

a:hover {
  color: #e12428 !important;
}

a:active {
  color: #e12428;
}
</style>