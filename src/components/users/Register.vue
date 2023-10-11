<template>
  <div class="container">
    <div class="d-flex justify-content-center">

      <div class="card my-4 p-2 col-sm-6">
        <div class="card-head text-center">
          <h4 class="display-6">Sign In</h4>
        </div>
        <div class="card-body">

          <div class="form-group">
            <label class="form-label">@mail:</label>
            <input type="text" placeholder="email@correos.com" class="form-control">
          </div>
          <div class="form-group ">
            <label class="form-label">Password:</label>
            <input type="text" placeholder="Password" class="form-control">
          </div>
          <div class="text-secondary  my-3">
            <a>Forgit password?</a>
          </div>

          <div class="form-group text-center mb-2">
            <button class="btn btn-success">Sign In</button>
          </div>

          <div class="text-secondary text-center my-3">
            <p class="fs-6">Create Account, <b class="text-success" @click="showDisplay()">Sign up</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  props: {
    showDisplay: Function
  }

}
// import { ref } from "vue";

</script>