<template>
  <section class="hero is-fullheight-with-navbar is-white ">
    <div class="hero-body has-text-white">
      <div class="container animated fadeIn">
        <div class="columns">
          <div class="column is-one-third card has-text-black">

            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="e.g Sammy Dyer">
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="e.g. sammydyer@email.com">
              </div>
            </div>

            <div class="field">
              <label class="label">Subject</label>
              <div class="control">
                <div class="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea class="textarea" placeholder="Textarea"></textarea>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
              <div class="control">
                <button class="button is-text">Cancel</button>
              </div>
            </div>
          </div>
          <div class="column is-one-third card has-text-black">

            <p class="title">Harold Washington Cultural Center</p>
            <hr>
            <p class="subtitle">4701 S Dr. Martin Luther King Drive, Chicago, IL
            </p>
            <p class="subtitle">Phone: 773.968.9053 or 773.939.8211</p>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Contact',

  }

</script>
<style scoped>
  .hero-body {
    /* Both are required for the image to appear */
    background-image: url("../assets/sds-map.jpeg");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    /* color: black */
  }

</style>
