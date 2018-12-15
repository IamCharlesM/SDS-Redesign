<template>
<body>
 <div id="app">
    <Navbar />
    <Home />
  </div>
</body>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Home from './components/Home.vue'
  // import Registration from './components/Registration.vue'
export default {
  name: 'app',
  components: {
    Navbar,
    Home,
    // Registration
  }
}
</script>

<style>
#app {
  /* background-color: black; */
  background-image: url("./assets/wall.jpg")
}
</style>