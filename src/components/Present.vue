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
          <div class="columns ">
              <div class="column">
                <router-link to="/legacy/past"><a class="button is-danger is-inverted has-text-black">Past</a></router-link>
              </div>

              <div class="column ">
                <router-link  to="/legacy/present"><a class="button is-danger is-inverted has-text-black">Present</a></router-link>
              </div>
            </div>
            <hr>
            <div class="columns">
              <div class="column">
                <div class="image is-128x128 is-centered">
                  <img class="is-rounded" src="../assets/levy.jpg">
                </div>
                <br>
                <p class="title is-size-5">Ted Levy (1999-2001) Artistic Consultant</p>
                <p class="subtitle">
                  Ted Levy began his training at The Sammy Dyer School of the Theatre, under the tutelage of Mrs.
                  Shirley Hall-Bass and Mrs. Muriel Burns Wilson Foster. He intensified his training at Columbia
                  College of Chicago, and provided opportunity for his professional careerr, which began at the Victory
                  Gardens Theater. Ted won an Emmy Award for his television debut performance in the PBS Special
                  "Precious Memories", abd impressed the professional dance world in 1990 with his Broadway debut in
                  "Black and Blue". He has since collaborated with George C. Wolfe and Gregory Hines on "Jelly's Last
                  Jam," which won an Outer Critics Circle Award in 1993, and the Antoinette Perry Drama Desk nomination
                  for choreography. Levy hosted "Ted Levy and Friends," directed by Gregory Hines and was assistant
                  choreographer to Savion Glover for Broadway's 1996 Tony Award Winner, "Bring in 'da Noise, Bring in
                  'da Funk." He has perfomed in China with the Chicago Human Rhythm Project as well as taught workshops
                  and performed with Annual Rhythm World.

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

export default {
  name: 'Present',

}
</script>
<style scoped>
.hero-body {
  /* Both are required for the image to appear */
        /* background-image: url("../assets/ALL NEW-2108.jpg") !important ; */
        /* background-position: center center; */
        /* background-repeat:  no-repeat; */
        /* background-attachment: fixed; */
        /* background-size:  cover; */
        /* color: black */
}

.image {
  margin: 0 auto;
}


</style>
