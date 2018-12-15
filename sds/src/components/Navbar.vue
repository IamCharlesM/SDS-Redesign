<template>

  <section class="hero is-dark is-medium">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar is-transparent">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="../assets/placeholder.jpg" alt="Logo">
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

        <div class="navbar-dropdown is-boxed is-dark">
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
  </div>
  </section>
</template>

<script>

export default {
  name: 'Navbar',
  components: {
    
  }
}
</script>

<style scoped>

.navbar-dropdown {
  background-color: hsl(0, 0%, 21%)
}
.navbar-dropdown a:hover {
  color: white !important
}

</style>

