<template>
    <div id="carouselExampleControls" class="carousel slide p-0" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2015/03/18/e0e9a28f33ce493789faf4615c7841e8/alien.jpg?width=600&height=315&quality=75&mode=crop" class="d-block img-setting" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://www.cakepicturegallery.com/d/61580-3/One+eye+Alien+Halloween+birthday+cake.JPG" class="d-block img-setting" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://grandmascountryovenbakeshoppe.com/wp-content/uploads/2019/09/area-51.jpg" class="d-block img-setting" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<Populares/>

</template>

<script>

import Populares from './populares.vue';
export default {
    name:'ho-me',
      components: {
    Populares
  }
}
</script>

<style scoped>
.img-setting{
  width: 100%;
  height: 600px;
}
</style>