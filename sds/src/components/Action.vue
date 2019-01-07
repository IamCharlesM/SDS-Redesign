<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-3 ">
          <div class="column has-background-white">
            <p class="title">Class Registration</p>
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam deserunt illum, esse aut ducimus
              recusandae, deleniti quia quidem voluptatum, fugiat quasi placeat magni rerum? Debitis commodi excepturi
              reiciendis amet eius?</p>
          </div>
          <div class="column has-background-white">
            <p class="title">Class Schedule</p>
            <br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellat esse sequi facere,
              accusantium ratione animi perferendis repellendus hic quis porro quibusdam, error sapiente, aspernatur
              veritatis nisi et autem! Ducimus.</p>
          </div>
          <div class="column has-background-danger">
            <p class="title">Upcoming Events</p>
            <br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, modi pariatur sapiente nemo iusto dicta
              sunt necessitatibus rem saepe sit. Eaque soluta ullam ab magnam mollitia alias explicabo error voluptate.</p>
          </div>
          <div class="column has-background-white">
            <p class="title">Staff</p>
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eaque ut nesciunt velit molestiae
              eius aut architecto illum quas? Laborum eos vitae similique dolores culpa ullam, alias hic vel velit.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Action',

  }
</script>
<style scoped>
  .hero-body {
    background-image: url("../assets/action-wall.jpg") !important;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    /* color: white */
    padding: 0px 0px 0px 0px
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
</style>