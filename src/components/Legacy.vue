<template>
  <section class="hero has-text-centered is-white ">
    <div class="hero-body has-text-white">
      <div class="container animated fadeIn">
        <div class="columns">
          <div class="column bg">
            <p class="title slow">
              The Legacy
            </p>
            <br>
            <div class="columns has-text-black">
              <div class="column ">
                <router-link class="title" to="/legacy/past">Past</router-link>
              </div>

              <div class="column has-text-black">
                <router-link class="title" to="/legacy/present">Present</router-link>
              </div>

            </div>
            <hr>
            <router-view></router-view>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Past from './Past'
import Present from './Present'
  export default {
    name: 'Legacy',

  }

</script>
<style scoped>
  .image {
    margin: 0 auto;
  }

  .hero-body {
    /* Both are required for the image to appear */
    /* background-image: url("../assets/ALL NEW-2108.jpg") !important ; */
    /* background-position: center center; */
    /* background-repeat:  no-repeat; */
    /* background-attachment: fixed; */
    /* background-size:  cover; */
    /* color: black */
  }

</style>
