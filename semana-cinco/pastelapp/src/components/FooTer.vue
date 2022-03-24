<template>

    <footer class="bg-change text-center text-white">
    <!-- Grid container -->
    <div class="container">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><font-awesome-icon :icon="['fab','facebook']" /></a>

        <!-- Twitter -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><font-awesome-icon :icon="['fab','twitter']" /></a>

        <!-- Google -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><font-awesome-icon :icon="['fab','google']" /></a>

        <!-- Instagram -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><font-awesome-icon :icon="['fab','instagram']" /></a>

        <!-- Linkedin -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          >  <font-awesome-icon :icon="['fab','linkedin-in']" /></a>

        <!-- Github -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><font-awesome-icon :icon="['fab','github']" /></a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div
      class="text-center p-3 copyright letra"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      © 2022 Copyright:
      <a class="text-white letra" href="home">Octavio Olea Pérez</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>


export default({
    name:'foo-ter'
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&family=Merienda:wght@700&display=swap');
.letra{
  font-family: 'Fuzzy Bubbles';
  font-size: 15px;
}
footer {
  height: 130px;
}
.bg-change {
  background-image: linear-gradient(#5c2fff, #070bf7);
}
</style>