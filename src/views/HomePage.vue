<template>
  <main>
    <div class="container  my-3">
      <div id="carouselExampleDark" class="carousel carousel-dark slidev ">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="../assets/premiun.jpeg" class="d-block w-100 my-3" style="height: 50vh" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="../assets/banner_3.jpg" class="d-block w-100 my-3" style="height: 50vh" alt="..." />
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="../assets/banner_2.jpg" class="d-block w-100  my-3" style="height: 050vh" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev btn_carrusel " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next btn_carrusel" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
      <Welcome class="my-3" />
      <Products v-if="showProduct" />
    </div>
  </main>
</template>
<script>
import Welcome from "@/components/Welcome.vue";
import Products from "@/components/Products.vue";
import { ref } from 'vue';

export default {
  components: {
    Welcome,
    Products,
  },
  props: {
    
  },
  setup() { 
    const showProduct=ref(false)
    return{
      showProduct
    }
  },
};
</script>
<style scoped>
.btn_carrusel{
  display: flex;
  top: 200px;
  justify-items: center;
  height: 15vh;
}
</style>