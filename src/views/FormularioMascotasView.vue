<template>
    <div>
        
        <menu-registrado/>
        <nav class=" mb-5 navbar navbar-light bg-warning d-flex p-4 justify-content-center"><h1>Rellena el formulario con los datos de tu mascota !</h1></nav>
        <formulario-mascota @add-pet="postMascota"/>
    </div>
</template>

<script>
import FormularioMascota from '@/components/FormularioMascota.vue'
import MenuRegistrado from '@/components/MenuRegistrado.vue';
import Swal from 'sweetalert2'

const vls = JSON.parse(localStorage.getItem("token"))

    export default {
        components: {FormularioMascota, MenuRegistrado },
        methods:{
            // **** POST ****//
            async postMascota(mascota) {
                try {
                const response = await fetch('https://pets-web-app.herokuapp.com/api/mascotas', {
                    method: 'POST',
                    body: JSON.stringify(mascota),
                    headers:{
                        'Content-type': 'application/json; charset=UTF-8',
                        'Authorization' : `Bearer ${vls}`
                    }     
                });
                
                const mascotaCreada = await response.json();
                console.log(mascotaCreada)
                
                Swal.fire(
                    'Perfecto !',
                    'Tu mascota ha sido añadido a nuestra base de datos con éxito',
                    'success'
                )
                this.$router.push('/tabla-mascotas')
                } catch (error) {
                console.error(error);
                }
            },
            
        },

        
        
    }
</script>

<style lang="scss" scoped>

</style>