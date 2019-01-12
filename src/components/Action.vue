<template>
  <section class="hero ">
    <div class="hero-body">
      <div class="container">
        <div class="columns has-text-white ">
          <div class="column col-1">
            <p class="title has-text-white is-size-3">Registration</p>

            <p class="action-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam deserunt illum, esse
              aut ducimus
              recusandae, deleniti quia quidem voluptatum, fugiat quasi placeat magni rerum? Debitis commodi excepturi
              reiciendis amet eius?</p>

            <span class="box has-text-centered">
              <router-link to="/registration"><a class="button is-danger">Register</a></router-link>
            </span>
          </div>
          <div class="column col-2 ">

            <p class="title has-text-white">Schedule</p>

            <p class="action-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellat esse
              sequi facere,
              accusantium ratione animi perferendis repellendus hic quis porro quibusdam, error sapiente, aspernatur
              veritatis nisi et autem!</p>

            <span class="box has-text-centered">
              <router-link to="/schedule"><a class="button is-danger">Schedule</a></router-link>
            </span>
          </div>
          <div class="column col-3">
            <p class="title has-text-white">Events</p>

            <p class="action-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, modi pariatur
              sapiente nemo iusto dicta
              sunt necessitatibus rem saepe sit. Eaque soluta ullam ab magnam mollitia alias explicabo error voluptate.</p>

            <span class="box has-text-centered">
              <router-link to="/events"><a class="button is-danger">Tickets</a></router-link>
            </span>
          </div>
          <div class="column col-4">
            <p class="title has-text-white">Staff</p>

            <p class="action-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eaque ut
              nesciunt velit molestiae
              eius aut architecto illum quas? Laborum eos vitae similique dolores culpa ullam, alias hic vel velit.</p>

            <span class="box has-text-centered">
              <router-link to="/staff"><a class="button is-danger">Staff</a></router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'Action'

  }

</script>
<style scoped>
  .hero-body {
    /* background-image: url("../assets/action-wall.jpg") !important; */
    /* background-position: center center; */
    /* background-repeat: no-repeat; */
    /* background-attachment: fixed; */
    /* background-size: cover; */
    background-color: #e12428
  }

  .bg {
    /* background-color: rgba(102, 114, 234,0.9); */
    /* border-radius: 10px; */
  }

  .slide {
    height: 100vh;

    background: {
      position: center;
      size: cover;
    }
  }

  .column {
    margin: 0.25rem;


  }


  .box {
    background-color: transparent;
    box-shadow: none;
  }

  .col-1 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/col-image-1e.jpg');
    background-size: cover;


  }

  .col-2 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/col-image-2e.jpg");
    background-size: cover;
  }

  .col-3 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/col-image-4e.jpg");
    background-size: cover;
  }

  .col-4 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/col-image-3e.jpg");
    background-size: cover;
  }

</style>
