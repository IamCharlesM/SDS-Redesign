<template>
<section class="hero is-dark has-text-centered is-medium">
  <div class="hero-body">
    <div class="container animated fadeIn">
      <p class="title slow">
        Lorem ipsum
      </p>
      <p>Title</p>
      <br>
      <figure class="image is-128x128 is-horizontal-center">
  <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
</figure>
<br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Partner',
  
}
</script>
<style scoped>
.hero-body{
  /* Both are required for the image to appear */
/* background-image: url("../assets/wall.jpg") !important ;
        background-position: center center;
        background-repeat:  no-repeat;
        background-attachment: fixed; */
        /* background-size:  cover; */
        background-color: #e12428;
        color: black
}

.fadeIn {
  animation-duration: 2s;
}

.is-horizontal-center {
  margin: 0 auto
}


</style>
