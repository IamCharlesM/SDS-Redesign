<template>
<section class="hero is-dark has-text-centered is-fullheight-with-navbar">
  <div class="hero-body">
    <div class="container animated fadeIn">
      <p class="title slow">
        85 years of dedication to the Performing arts.
      </p>
      <hr>
      <p>The purpose of the Sammy Dyer School of the Theatre is to promote the progress of creativity and education in the performing arts as well as to assist children in receiving quality instruction in technique and dance appreciation.
In addition, we hope to bring together professionals and students interested in performing arts education by providing resources and the opportunity to realize their visions. We hope to preserve and develop the legacy of the African American dance traditions of the mid to late 20th century.</p>
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
background-image: url("../assets/wall.jpg") !important ;
        background-position: center center;
        background-repeat:  no-repeat;
        background-attachment: fixed;
        background-size:  cover;
        background-color: black;
}

.fadeIn {
  animation-duration: 2s;
}

</style>
