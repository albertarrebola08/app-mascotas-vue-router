<template>
    <div>
        <menu-registrado/>
    <h1 class=" my-5 text">Bienvenido  <span class="text-success">{{this.username}}</span></h1>
        <img class="w-100" src="../assets/img1.jpg" alt="" >
        <!-- As a heading -->
        <nav class="navbar navbar-light bg-warning d-flex p-5 justify-content-center">
            <h1 class=" navbar-brand mb-0 h1">CADA VEZ SOMOS MÁS !</h1>
        </nav>

        
        <carrusel-mascotas/>
        <nav class="navbar navbar-light bg-warning d-flex p-4 justify-content-center">
            <h1 class=" navbar-brand mb-0 h1">AÑADE A TU MASCOTA</h1>
            <h3>No pierdas ni un segundo más !</h3>
        </nav>
        <div class="">
            <router-link class="nav-link" to="/form-mascotas">
                <figure class="figure">
                
                <div class="d-flex justify-content-center py-5"><img src="../assets/add.png" class="figure-img img-fluid rounded w-50" alt="..."></div>
                
                </figure>
            </router-link></div>
        <router-view/>
    </div>
</template>

<script>
import MenuRegistrado from '@/components/MenuRegistrado.vue'
import CarruselMascotas from '@/components/CarruselMascotas.vue'
    export default {
        name:'welcome-page',
        data(){
            return {
                username:''
            }
        },
        components: { MenuRegistrado, CarruselMascotas },
        mounted(){
            this.username = JSON.parse(localStorage.getItem("user"))
        }
    }


        
        
</script>

<style lang="scss" scoped>

</style>