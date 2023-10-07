<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="products in myStore" :key="products.id" :products="products">
          <div class="card mb-3 p-2">
            <div class="card-head text-center">
              <b class="text-uppercase text_title text-primary">Product:{{ products.title }}</b>
              <div class="col-sm-12">
                <img :src="products.image" alt="photo_product" class="img_content border border-secondary my-4 rounded" />
              </div>
            </div>
            <div class="card-body">
              <div class="text-secondary mb-2 text-left">
                <span class="text_description">
                  <b>Description:</b>
                  {{ products.description }}
                </span>
              </div>
              <div class="text-center mb-2">
                <span>Price:<b> ${{ products.price }}</b></span>

                <a class="nav-link" href="#">Ver más </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <nav aria-label="Page navigation example " :per-page="perPage">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav> -->
    <nav>
      <v-model
    total-items="20"
    items-per-page="5"
    max-pages-shown="5"
    current-page="1"
    on-click="onClickHandler"
  ></v-model>
    </nav>
  </main>
</template>
<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  components: {

  },


  setup() {
    const onClickHandler=(page)=>{
      page
    }
    const store = useStore();
    onMounted(() => store.dispatch("getProduct"));
    const myStore = computed(() => store.state.products);
    return {
      myStore,
      onClickHandler
    };
  }

}
</script>
<style scoped>
.text_title {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.text_description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.img_content {
  /* background: red; */
  width: 70%;
  height: 50vh;
  padding: 25px;
}
</style>