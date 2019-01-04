<template>
  
<agile :arrows="false" :speed="750"
    :timing="'linear'" :fade="true"
    :autoplay="true" :pauseOnHover="false">
    <div class="slide slide--1"><img src="../assets/ALL NEW-2108.jpg" alt=""></div>
    <div class="slide slide--2"><img src="../assets/ALL NEW-165.jpg" alt=""></div>
    <div class="slide slide--3"><img src="../assets/bg-blue.jpg" alt=""></div>
</agile>
    
</template>

<script>
  export default {
    name: 'Staff',

  }
</script>
<style scoped>
.hero-body {
  /* background-image: url("../assets/bg-blue.jpg") !important; */
  /* background-position: center center; */
  /* background-repeat:  no-repeat; */
  /* background-attachment: fixed; */
  /* background-size:  cover; */
  /* color: white */
  padding: 0px 0px 0px 0px
}

.bg {
  /* background-color: rgba(102, 114, 234,0.9); */
  /* border-radius: 10px; */
}

.agile {
    &__dots {
        bottom: 0;
        display: block;
        left: 10px;
        position: absolute;
        width: 30px;
    }

    &__dot {
        margin-bottom: 10px;

        button {
            background-color: transparent;
            border: 1px solid #fff;
            margin-top: 10px;

            &:hover {
                background-color: #fff;
            }
        }

        &--current {
            button {
                background-color: #fff;
            }
        }
    }
}

.slide {
  height: 100vh;
    background: {
        position: center;
        size: cover;
    }
}

</style>