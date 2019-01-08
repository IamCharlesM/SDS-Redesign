<template>

<section class="hero is-dark has-text-centered is-fullheight-with-navbar">
  
  <div class="hero-body">
    <div class="container animated fadeIn">
      <div class="columns">
        <div class="column">
      <p class="title slow">
        Sammy Dyer School of the Theatre
      </p>
      <hr>
      <p>Celebrating 85 Years of service to the Performing Arts.</p>
      </div>
      <div class="column"></div>
      </div>
    </div>
  </div>
</section>
</template>


<script>
export default {
  name: 'Home',
  
}
</script>
<style scoped>
.hero-body{
  /* Both are required for the image to appear */
background-image:  url("../assets/wall-1.jpg");
        background-position: center center;
        background-repeat:  no-repeat;
        background-attachment: fixed;
        background-size:  cover;
}

.fadeIn {
  animation-duration: 2s;
}

.column {
  margin-right: 10% !important; 
}

</style>
