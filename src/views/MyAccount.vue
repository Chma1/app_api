<template>
  <main>
    <div class="container mb-3">
      <Register :showDisplay="showDisplay" v-if="!newValue" />
      <Login :showDisplay="showDisplay" v-if="newValue" />
    </div>
  <router-view />
  </main>
</template>
<script>
import Login from '@/components/users/Login.vue';
import Register from '@/components/users/Register.vue';
import { ref } from 'vue';

export default {
  components: {
    Register,
    Login
  },
  setup() {

    const newValue = ref(false);
    const showDisplay = () => {
      newValue.value = !newValue.value;
      // console.log(newValue);
    };
    return {
      showDisplay,
      newValue
    };
  },
}
</script>