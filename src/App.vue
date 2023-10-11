<template>
  <nav class="navbar navbar-expand-lg" style="background: purple">
    <div class="container">
      <a class="navbar-brand text-white text-uppercase" href="/">ChmsDevo</a>
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
            <a class="nav-link text-white" href="/promotion">Ofertas</a>
          </li>
        </ul>
     
      </div>
      <ul class="nav_account text-uppercase  ">
          <li class="nav_btn "><button class="btn btn-primary m-2">Crear Cuenta</button></li>
          <li class="nav_btn "><button class="btn btn-success m-2">Iniciar Sesion</button></li>
        </ul>
    </div>
  </nav>
  <router-view />
  <Footer />
</template>

<script>
import Footer from './views/Footer.vue'

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style scoped>
.nav_account {
  display: flex;
  justify-content: flex-end;
}
.nav_btn{
  list-style: none;
  margin-top: 10px;
}
@media(max-width:720px){
  .nav_account{
    display: flex;
    justify-content: center;
    margin-inline-start: 20%;
  }
}

</style>
