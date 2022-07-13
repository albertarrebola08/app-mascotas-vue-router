<template>
  <div class="home">
        <!-- Navigation-->

        <!-- Container 1 -->
        <div class="container container1  h-100  text-center">
            <div class="row">
                <div class="col">
                    <div class="row">
                        <div class="col">
                            <h1 class="tituloPortada text-center mt-5 tituloPortada">PETS APP</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="row">
                        <div class="col">
                           <img class=" my-4 w-75" src="https://st3.depositphotos.com/1177973/13992/i/600/depositphotos_139926842-stock-photo-group-of-cute-pets.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <router-link class="text-dark nav-link" to="/formulario-login"><button class="my-4 px-5 fs-2  btn-dark rounded">Sign in</button></router-link>
            <p class="fs-6 mt-1 mb-0 pb-5"><router-link class="text-dark nav-link" to="/form-register">¿No tienes cuenta? <b>Regístrate</b></router-link></p>
            
             
          
            

        </div>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
 
  }
}
</script>
