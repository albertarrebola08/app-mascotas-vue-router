<template>

    <div>
        <menu-registrado/>
        <nav class=" mb-5 navbar navbar-light bg-warning d-flex p-4 justify-content-center">
            <i class=" mx-4 iconfs1 fa-solid fa-list "></i>
            <i class=" mx-4 iconfs1 fa-solid fa-magnifying-glass "></i>
        </nav>
        
        <tabla-mascotas :mascotas="mascotas" @eliminar-mascota="deleteMascota"/>
        <div class="">
            <router-link class="nav-link" to="/form-mascotas">
                <figure class="figure">
                
                <div class="d-flex justify-content-center py-5"><img src="../assets/add.png" class="figure-img img-fluid rounded w-50" alt="..."></div>
                
                </figure>
            </router-link>
        </div>
    </div>
</template>

<script>
import TablaMascotas from '@/components/TablaMascotas.vue'
import MenuRegistrado from '@/components/MenuRegistrado.vue'




    export default {
        components: {TablaMascotas, MenuRegistrado}, 
        data(){
            return{
                mascotas: [],
                mascota: {
                    nombre: '',
                    descripcion: '',
                    foto: ''
                },
                vls:''
            } 
        },
        methods:{
            //leer mascotas
            async getMascotas() {
                try {
                    this.vls = JSON.parse(localStorage.getItem("token"))
                    const response = await fetch('https://pets-web-app.herokuapp.com/api/mascotas');
                    this.mascotas = await response.json();
                
                } catch (error) {
                console.error(error);
                }
            },
            //*****ELIMINAR MASCOTA*******/
            async deleteMascota(mascota) {
                
                    try {
                    
                    await fetch(`https://pets-web-app.herokuapp.com/api/mascotas/${mascota._id}`, {
                    method: "DELETE",
                    headers:{
                        'Content-type': 'application/json; charset=UTF-8',
                        'Authorization' : `Bearer ${this.vls}`
                    }

                  
                    });
                    console.log(mascota._id)
                    this.mascotas = this.mascotas.filter(u => u._id !== mascota._id);
                    
                    } catch (error) {
                        console.error(error +'No tienes permisos de administrador para borrar mascotas...');
                    }
                }
    
            },
            
        
        mounted () {
                this.getMascotas();
            }
    }
                
                    
                  
                
                
                 
</script>

<style lang="scss" scoped>

</style>