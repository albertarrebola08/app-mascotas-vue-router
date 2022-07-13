<template>
<menu-registrado/>
  <div>
    <nav class=" mb-5 navbar navbar-light bg-warning d-flex p-4 justify-content-center"><h3 class="my-4 mx-1">Regístrate para poder añadir tu mascota y acceder a todas nuestras funcionalidades.</h3></nav>
    <formulario-registro @add-persona="postUsuario" />
  </div>
</template>

<script>
import FormularioRegistro from '@/components/FormularioRegistro.vue'
import Swal from 'sweetalert2'
import MenuRegistrado from '@/components/MenuRegistrado.vue';

  export default {
  components: {FormularioRegistro, MenuRegistrado  },
  
  methods:{
    // **** POST ****//
      async postUsuario(persona) {
        try {
          const response = await fetch('https://pets-web-app.herokuapp.com/api/registro', {
            method: 'POST',
            body: JSON.stringify(persona),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
          });
          
          const usuarioCreado = await response.json();
          console.log(usuarioCreado)
          
          Swal.fire(
            'Bienvenido !',
            'Te has registrado correctamente',
            'success'
          )
          this.$router.push('/formulario-login')
        } catch (error) {
          console.error(error);
        }
      }
  }
    
  }
</script>

<style lang="scss" scoped>

</style>
