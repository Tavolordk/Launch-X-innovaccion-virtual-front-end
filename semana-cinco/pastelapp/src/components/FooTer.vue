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
          ><font-awesome-icon icon="fa-brands fa-facebook" /></a>

        <!-- Twitter -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><font-awesome-icon icon="fa-brands fa-twitter" /></a>

        <!-- Google -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><i class="fab fa-google"></i
        ></a>

        <!-- Instagram -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><font-awesome-icon icon="fa-brands fa-instagram" /></a>

        <!-- Linkedin -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          >  <font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>

        <!-- Github -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><i class="fab fa-github"></i
        ></a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div
      class="text-center p-3 copyright"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      © 2022 Copyright:
      <a class="text-white" href="home">Octavio Olea Pérez</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>


export default({
    name:'FooTer'
})
</script>
<style scoped>
footer {
  height: 130px;
}
.bg-change {
  background-image: linear-gradient(#5c2fff, #070bf7);
}
</style>