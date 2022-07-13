<template>
    
    
        <nav class="navbar p-4 navbar-expand-lg navbar-light bg-light mb-5">
        <router-link class="navbar-brand" to="/">PETS APP <i class="fs-2 fa-solid fa-paw"></i></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/formulario-login">Iniciar sesión</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/tabla-mascotas">Ver mascotas</router-link>
            </li>
            
            </ul>
        </div>
        
        </nav>
    
    
</template>

<script>
    export default {
        name: 'menu-registrado'
    }
</script>

<style lang="scss" scoped>

</style>