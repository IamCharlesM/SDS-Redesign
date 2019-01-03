<template>

<section class="hero is-dark has-text-centered is-fullheight-with-navbar">
  
  <div class="hero-body">
    <div class="container animated fadeIn">
      <div class="columns">
        <div class="column">
      <p class="title slow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
      <hr>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit labore voluptates dolor distinctio quam accusamus doloremque eum blanditiis, eligendi praesentium assumenda exercitationem recusandae illo esse cupiditate rem. Ducimus, accusamus facere.</p>
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
background-image: url("../assets/wall-1.jpg") !important ;
        background-position: center center;
        background-repeat:  no-repeat;
        background-attachment: fixed;
        background-size:  cover;
        background-color: black;
}

.fadeIn {
  animation-duration: 2s;
}

.column {
  margin-right: 10% !important; 
}

</style>
