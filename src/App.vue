<template>
  <div id="app">
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

            <router-link class="navbar-item is-active" to="/">Home</router-link>
            <router-link class="navbar-item" to="/registration">Registration</router-link>
            <router-link class="navbar-item" to="/schedule">Schedule</router-link>

            <div class="navbar-item has-dropdown is-hoverable is-boxed ">
              <a class="navbar-link ">
                More
              </a>

              <div class="navbar-dropdown is-boxed ">

                <router-link class="navbar-item" to="/legacy">Legacy</router-link>
                <router-link class="navbar-item" to="/staff">Staff</router-link>
                <router-link class="navbar-item" to="/contact">Contact Us</router-link>
                <router-link class="navbar-item" to="/events">Events</router-link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
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

  .navbar-link:not(.is-arrowless)::after {
    border-color: white
  }

</style>
