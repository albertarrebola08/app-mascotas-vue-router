<template>
    <div>
        <menu-admin/>
        <tabla-usuarios :usuarios="usuarios" @eliminar-usuario="deleteUsuario"/>
    </div>
</template>

<script>
import TablaUsuarios from '@/components/TablaUsuarios.vue'
import MenuAdmin from '@/components/MenuAdmin.vue'

    export default {
        components: {TablaUsuarios, MenuAdmin}, 
        data(){
            return{
                usuarios: [],
                usuario: {
                    nombre: '',
                    user: '',
                    roles:''
                },
                vls : ''

            } 
        },
        
        methods:{
            //leer usuarios
            async getUsuarios() {
                try {
                    this.vls = JSON.parse(localStorage.getItem("token"))

                    console.log(this.vls)
                    
                    const response = await fetch(
                        'https://pets-web-app.herokuapp.com/api/usuarios',
                        {
                            method:'GET',
                            headers:{
                                'Content-type': 'application/json; charset=UTF-8',
                                'Authorization' : `Bearer ${this.vls}`
                            }
                     }
                    )
                    this.usuarios = await response.json()
                    console.log(this.usuario.roles)
                
                
                
                
                } catch (error) {
                console.error(error);
                
                }
            },
            // *****ELIMINAR USUARIO*******/
            async deleteUsuario(usuario) {
                try {
                    await fetch(`https://pets-web-app.herokuapp.com/api/usuarios/${usuario._id}`, {
                    method: "DELETE",
                    headers:{
                        'Content-type': 'application/json; charset=UTF-8',
                        'Authorization' : `Bearer ${this.vls}`
                    }

                  
                });
                console.log(usuario._id)
                this.usuarios = this.usuarios.filter(u => u._id !== usuario._id);
                
                } catch (error) {
                
                console.log(error)
                }
            },
        },
        
        mounted () {
          
            this.getUsuarios();
        },
    }    
</script>

<style lang="scss" scoped>

</style>