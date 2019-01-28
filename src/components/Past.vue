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
              <div class="column is-one-forth">
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
                  <img class="is-rounded" src="../assets/sammydyer.jpg">
                </div>
                <br>
                <p class="title is-size-5">Sammy Vashon Dyer (1933-1960) - Founder/Director</p>
                <p class="subtitle">The Sammy Dyer School of Dancing was established in May 1933 by noted Choreographer
                  Sammy Dyer.

                  Dyer, an Instructor of Tap Dance and stage shows for Muriel Abbott and the famous Abbotteers,
                  produced cafe shows at the old Sunset Cafe, Club Morocco, and the Club DeLisa where he spent eighteen
                  years. In 1950 Sammy Dyer created the Dyerettes, an African American female dance troupe known to be
                  the only chorus act of its kind. The Dyerettes toured internationally with some of the greatest
                  entertainers of the twentieth century including Nat King Cole, Sammy Davis Jr., and Sarah Vaughn. Mr.
                  Dyer's desire to provide affordable dance education to African American children resulted in the
                  establishment of The Sammy Dyer School of the Theatre. Today the legacy continues as the School of
                  Theatre is entering its 85th year.</p>

              </div>
              <div class="column">

                <div class="image is-128x128 is-centered">
                  <img class="is-rounded" src="../assets/Shirleyhall.jpg">
                </div>
                <br>
                <p class="title is-size-5">
                  Shirley Hall Bass
                  (1960-1998)
                  Artistic Director</p>
                <p class="subtitle"> In 1980, at Mr. Dyer's request, the Directorship of the school was passed to
                  Dyerette Shirley Hall Bass. In 1968, Mrs. Bass traveled to the Bahamas Islands with 30 Sammy Dyer
                  students, beginning the Cultural Exchange Workshop. In this program students from the Bahamas Dance
                  Theatre and Sammy Dyer School travel each year to share culture and tradition through dance and
                  friendship. In recent years the Chicago school has hosted an array of exciting dance workshops and
                  seminars including "Tap Explosion", which featured Broadway star and instructorr, Savion Glover.
                  Students of Sammy Dyer have also placed 1st in numerous competitions on regional and national levels.</p>
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
  name: 'Past',

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
