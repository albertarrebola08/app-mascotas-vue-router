<template>
<menu-registrado/>
<nav class=" mb-5 navbar navbar-light bg-warning d-flex p-4 justify-content-center"><h3 class="  mx-1">Inicia sesión con PetsApp para poder añadir a tu mascota y tenerla vigilada.</h3></nav>

    <div class="d-flex justify-content-center align-items-center mt-5">
        <formulario-login  @check-user="compruebaUsuario"/>
    </div>



    
    
</template>

<script>
import FormularioLogin from '@/components/FormularioLogin.vue'
import MenuRegistrado from '@/components/MenuRegistrado.vue';


    export default {
        components: {FormularioLogin, MenuRegistrado},
        methods:{
            //metodo para logear usuario POST
            async compruebaUsuario(usuario) {
                try {
                alert('comprobando usuario....')
                const response = await fetch('https://pets-web-app.herokuapp.com/api/login', {
                    method: 'POST',
                    body: JSON.stringify(usuario),
                    headers: { 'Content-type': 'application/json; charset=UTF-8' },
                });
                    //recibimos la respuesta objeto con await en formato json
                    const usuarioComprobado = await response.json();
                    //lo pasamos a texto para poder guardarlo en localstorage (setItem)
                    localStorage.setItem("token", JSON.stringify(usuarioComprobado.token));
                    localStorage.setItem("user", JSON.stringify(usuarioComprobado.user))
                    localStorage.setItem("rol", JSON.stringify(usuarioComprobado.rol))

    
                    const vls = JSON.parse(localStorage.getItem("token"))
                    const username = JSON.parse(localStorage.getItem("user"))
                    const rol = JSON.parse(localStorage.getItem("rol"))
                    

                    console.log(vls)
                    console.log(username)
                    console.log(rol)
                    

                    
                    
                    alert('Te has logeado correctamente. Bienvenido ' + usuarioComprobado.user)
                if(usuarioComprobado.rol == 'admin'){
                    this.$router.push('/control-admin')
                }else{
                    alert('No tienes permisos para entrar como administrador')
                    this.$router.push('/welcome-page')
                }
                
                } catch (error) {
                console.error(error);
                }
            }
        }  
    }
    
</script>

<style lang="scss" scoped>
   
</style>