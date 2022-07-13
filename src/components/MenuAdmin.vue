<template>
    <div>
        <!-- Navigation-->
    <nav class="navbar menu py-4 navbar-expand-lg " id="mainNav">
        <div class="container">
            <a class="fs-3 navbar-brand fw-bold" href="#page-top"><i class="fs-2 fa-solid fa-paw text-dark"></i></a>
            <button class=" p-2 navbar-toggler text-uppercase fw-bold p-2 burguer text-dark  rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-bars"></i>
            </button>
            <div class="  collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                <li class=" nav-item">
                  <router-link class="text-dark nav-link active" to="/">Home</router-link>
                </li>
                
                <li class="nav-item">
                  <router-link class="text-dark nav-link" to="/form-mascotas">Añadir mascotas</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="text-dark nav-link" to="/tabla-mascotas">Ver mascotas</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="text-dark nav-link" to="/tabla-usuarios">Ver usuarios</router-link>
                </li>
                
                


              </ul>
            </div>
        </div>
    </nav>
        
    </div>
</template>

<script>
    export default {
        name: 'menu-admin'
    }
</script>

<style lang="scss" scoped>

</style>