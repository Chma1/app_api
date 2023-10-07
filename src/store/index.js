import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
  },
  getters: {},
  mutations: {
    setProduct(state, payload) {
      state.products = payload;
      // console.log(state.products);
    },
  },
  actions: {
    async getProduct({ commit }) {
      const tables = await fetch("https://fakestoreapi.com/products");
      const resp = await tables.json();
      commit("setProduct", resp);
    },
  },
  modules: {},
});
