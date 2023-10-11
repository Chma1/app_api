<template>
  <main>
    <div class="container">
      <div class="row">
        <div
          class="col-sm-4"
          v-for="products in myStore"
          :key="products.id"
          :products="products"
        >
          <div class="card mb-3 p-2">
            <div class="card-head text-center">
              <b class="text-uppercase text_title text-primary"
                >Product:{{ products.title }}</b
              >
              <div class="col-sm-12">
                <img
                  :src="products.image"
                  alt="photo_product"
                  class="img_content border border-secondary my-4 rounded"
                />
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
                <span
                  >Price:<b> ${{ products.price }}</b></span
                >

                <a class="nav-link" href="#">Ver más </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  components: {
  },
  setup() {
    const store = useStore();
    onMounted(() => store.dispatch("getProduct"));
    const myStore = computed(() => store.state.products);
    const loadPage=()=>{

    }
    return {
      myStore,
    };
  },
};
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