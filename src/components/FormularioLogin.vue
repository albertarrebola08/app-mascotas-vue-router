<template>
    <div id="formulario-login">
    <form @submit.prevent="enviarFormulario">
      <div class="container shadow p-3 mb-5 bg-body rounded">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label>Usuario</label>
              <input v-model="usuario.user" type="text" class="form-control" />
            </div>
          </div>
            <!-- contraseña -->
          <div class="col-md-4">
            <div class="form-group">
              <label>Contraseña</label>
              <input v-model="usuario.pass" type="password" class="form-control"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group d-flex ">
              <button class="btn btn-warning">Iniciar sesión</button>
              <router-link class="text-dark nav-link text-muted mt-4" to="/control-admin"><i class="fa-solid fa-lock"></i>   Entrar como administrador</router-link>
            </div>
            
          </div>
          <p class="fs-6 mt-1 mb-0 pb-5"><router-link class="text-dark nav-link" to="/form-register">¿No tienes cuenta? <b>Regístrate</b></router-link></p>
        </div>
        
      </div>
      
    </form>
  </div>

  
</template>

<script>
    export default {
        name:'formulario-login',
        data() {
          return {
            usuario: {
              user: 'admin@gmail.com',
              pass: 'admin',
            }
          }
        },
        methods: {
          enviarFormulario() {
            this.$emit('check-user', this.usuario);
            this.$router.push('/welcome-page')
          },
  },
    }
</script>

<style lang="scss" scoped>
   .form-group{
    margin-top: 20px;
   }
   .btn{
        margin-top: 1rem;
    }
</style>