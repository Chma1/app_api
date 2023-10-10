<template>
  <nav class="navbar navbar-expand-lg" style="background: purple">
    <div class="container">
      <a class="navbar-brand text-white text-uppercase" href="#">ChmsDevo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navApp"
        aria-controls="navApp" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon text-white"></span>
      </button>
      <div class="collapse navbar-collapse" id="navApp">
        <ul class="navbar-nav text-uppercase">
          <li class="nav-item">
            <a class="nav-link text-white" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/products">Product</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
  <!-- <Products /> -->
  <Footer/>
</template>

<script>
// import Products from "./components/Products.vue";
import Footer from './views/Footer.vue'

export default {
  name: "App",
  components: {
Footer  },
};
</script>

<style scoped></style>
