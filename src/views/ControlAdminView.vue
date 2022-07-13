<template>
    <div>
        <menu-admin/>
        <div class="container text-center">
            
               <div class="figure dcol-12 my-5">
                <h2>Ver usuarios</h2>
                
                    <div class="verUsuarios mt-4">    
                        <router-link class="nav-link" to="/tabla-usuarios">
                            <i class="text-dark iconfs2 mx-3 fa-solid fa-arrow-down-short-wide"></i>
                            <i class="text-dark iconfs2 mx-3 fa-solid fa-user"></i>
                        </router-link>
                    </div>
                    
                </div>
                <h2>Ver mascotas</h2>
                <div class="figure dcol-12 ">
                    <router-link class="nav-link" to="/tabla-mascotas">
                        <div class="verMascotas mt-4">
                            <i class=" text-dark iconfs2 mx-3 fa-solid fa-arrow-down-short-wide"></i>
                            <i class="text-dark iconfs2 mx-3 fa-solid fa-dog"></i>
                        </div>
                    </router-link>
                    
                   
                </div>
                    
                
            
        </div>
    </div>
</template>

<script>
import MenuAdmin from '@/components/MenuAdmin.vue'
    export default {
  components: { MenuAdmin },
        
    }
</script>

<style lang="scss" scoped>
    .verMascotas{
        display: flex;
        background-color: darkorange;
        border-radius: 100%;
        width: 200px;
        height: 200px;
        justify-content: center;
        align-items: center;
        
        
    }
    .verUsuarios{
        display: flex;
        background-color: darkorange;
        border-radius: 100%;
        width: 200px;
        height: 200px;
        justify-content: center;
        align-items: center;
    }

</style>