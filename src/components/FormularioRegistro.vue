<template>
  <div id="formulario-persona">
    <form @submit.prevent="enviarFormulario">
      <div class="container shadow p-3 mb-5 bg-body rounded mt-5">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label>Nombre</label>
              <input v-model="persona.nombre" type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Usuario</label>
              <input v-model="persona.user" type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Contraseña</label>
              <input v-model="persona.pass" type="password" class="form-control" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <button @click="showAlert" class="btn btn-primary">Regístrame</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'formulario-persona',
  data() {
    return {
      persona: {
        nombre:'',
        user: '',
        pass: '',
      },
    }
  },
  methods: {
    enviarFormulario() {
      this.$emit('add-persona', this.persona)
      this.$router.push('/formulario-login')
    },
    showAlert() {
      // Use sweetalert2
      this.$swal('Te has registrado correctamente');
    },
  },
}
</script>

<style scoped>
  .form-group{
    margin-top:5px;

  }
  .btn{
    margin-top:10px;
  }
</style>