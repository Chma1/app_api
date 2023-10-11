<template>
    <main>
        <div class="container">
            <div class="d-flex justify-content-center">

                <div class="card my-4 p-2 col-sm-6">
                    <div class="card-head text-center">
                        <h4 class="display-6">Create Account</h4>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label class="form-label">Name:</label>
                            <input type="text" placeholder="Your name" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="form-label">@mail:</label>
                            <input type="text" placeholder="email@correos.com" class="form-control">
                        </div>
                        <div class="form-group ">
                            <label class="form-label">Password:</label>
                            <input type="text" placeholder="Create password" class="form-control">
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label">Confirm:</label>
                            <input type="text" placeholder="Confirm password" class="form-control">
                        </div>
                        <div class="text-secondary my-3">
                            <p class="fs-6">Dont have on Account, <b class="text-success" @click="showDisplay()">Sign in</b>
                            </p>
                        </div>
                        <div class="form-group text-center mb-2">
                            <button class="btn btn-primary" :disabled="!valideChebox" >Create Account</button>
                        </div>
                        <div class="text-secondary text-center my-3">
                            <input type="checkbox" class="form-checkbox m-2" v-model="valideChebox" >
                            <span>Accept Terms and Conditions</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>
<script>
import { ref } from 'vue'
export default {
    props: {
        showDisplay: Function
    },
    setup(){
        const valideChebox=ref(false)
     
        return{
            valideChebox,
        }
    }
}
</script>
<style scoped>
</style>