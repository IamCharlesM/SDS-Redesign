<template>
  <section>
        <div class="columns">
          <div class="column is-one-third hero is-fullheight is-paddingless is-marginless">
            <div class="hero-body hero-body ">
              <div class="container">
                <p class="title has-text-white">Lorem ipsum</p>
                <p class="subtitle slow has-text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, necessitatibus. Eum voluptatum odio eius vero, in saepe id inventore tempore facere, cupiditate a adipisci voluptate, hic nam sunt sapiente accusantium!
            </p>
            <a class="button is-primary is-inverted is-outlined">TICKETS AVAILABLE SOON</a>
            </div>
            </div>
          </div>

          <div class="column wall-1">

          </div>

        </div>
  </section>
</template>

<script>
  export default {
    name: 'Events',

  }

</script>
<style scoped>
  .hero-body {
    /* Both are required for the image to appear */
    /* background-image: url("../assets/ALL NEW-2108.jpg") !important ; */
    /* background-position: center center; */
    /* background-repeat:  no-repeat; */
    /* background-attachment: fixed; */
    background-color:  #e12428;
    /* color: black */
  }

  .wall-1 {
    background-image: url('../assets/wall.jpg');
    background-size: cover;
  }

</style>
