<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 my-4">
                    <div class="card">
                        <div class="row ">
                            <div class="col-sm-4  ">
                                <div class="bg_sign p-4">

                                    <h4 class="display-4 text-center text-white">Welcome Back!</h4>
                                <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
                                    deserunt!
                                    Exercitationem dolore quas quasi quibusdam impedit laborum assumenda, atque adipisci
                                    recusandae, nulla, odit voluptates tempora?</p>
                                <button class="btn btn_sign w-100 mb-4" @click="showDisplay()">SIGN IN</button>
                                </div>
                               
                            </div>
                            <div class="col-sm-8 text-center">
                                <h4 class="display-4 text-center mb-3">Create Account</h4>
                                <form>
                                    <div class="p-4">
                                        <div class="form-group  p-2">
                                            <input type="text" placeholder="Your Name" class="form-control ">
                                        </div>
                                        <div class="form-group  p-2 ">
                                            <input type="email" placeholder="corremeo@gmal.com" class="form-control">
                                        </div>
                                        <div class="form-group  p-2 mb-2">
                                            <input type="password" placeholder="Create password" class="form-control ">
                                        </div>
                                        <button class="btn btn-primary mb-3 w-75" type="submit">Create Account</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>
<script>
export default {
    props: {
        showDisplay: Function
    }
}
</script>
<style scoped>
.bg_sign {
    background:
        #6b0080e0;
}

.btn_sign {
    background: #030303e0;
    color: white;
}
</style>