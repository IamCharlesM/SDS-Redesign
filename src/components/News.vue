<template>
<section class="hero has-text-centered is-white ">
    <div class="hero-body has-text-white">
      <div class="container animated fadeIn">
        <div class="columns">
          <div class="column bg">
            <p class="title slow">
              Our Staff
            </p>
            <hr>
            <div class="columns">

              <div class="column">

                <div class="image is-128x128 is-centered">
                  <img src="../assets/placeholder.jpg">
                </div>
                <br>
                <p class="title is-size-5">Lorem ipsum</p>
                <p class="subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veritatis dolor illo quidem eius excepturi. Similique nisi fugit quos nihil odio qui officiis id nobis? Veritatis tempore dignissimos autem omnis!
                </p>
              </div>
              <div class="column">

                <div class="image is-128x128 is-centered">
                  <img src="../assets/placeholder.jpg">
                </div>
                <br>
                <p class="title is-size-5">Lorem ipsum</p>
                <p class="subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veritatis dolor illo quidem eius excepturi. Similique nisi fugit quos nihil odio qui officiis id nobis? Veritatis tempore dignissimos autem omnis!
                </p>
              </div>
              <div class="column">

                <div class="image is-128x128 is-centered">
                  <img src="../assets/placeholder.jpg">
                </div>
                <br>
                <p class="title is-size-5">Lorem ipsum</p>
                <p class="subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veritatis dolor illo quidem eius excepturi. Similique nisi fugit quos nihil odio qui officiis id nobis? Veritatis tempore dignissimos autem omnis!
                </p>
              </div>
            </div>

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
    components: {
      Past,
      Present
    }
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
