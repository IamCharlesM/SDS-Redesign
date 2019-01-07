<template>
<section class="hero has-text-centered is-white">
    <div class="hero-body has-text-white">
      <div class="container animated fadeIn">
      <div class="columns">
        <div class="column bg">
      <p class="title has-text-white slow">
        The purpose
      </p>
      <hr>
      <p>The purpose of the Sammy Dyer School of the Theatre is to promote the progress of creativity and education in the performing arts as well as to assist children in receiving quality instruction in technique and dance appreciation.</p>
      </div>
      
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Splitter',
  
}
</script>
<style scoped>
.hero-body {
  /* Both are required for the image to appear */
        background-image: url("../assets/wall.jpg") !important ;
        background-position: center center;
        background-repeat:  no-repeat;
        background-attachment: fixed;
        background-size:  cover;
        /* background-color: #4cb0e8 !important; */
        /* color: black */
        
}

.hero {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}



</style>
