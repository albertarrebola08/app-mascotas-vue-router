<template>
  <div id="formulario-mascota">
    <form @submit.prevent="enviarFormulario">
      <div class="container shadow p-3 mb-5 bg-body rounded">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label>Nombre</label>
              <input  v-model="mascota.nombre" type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Descripción</label>
              <input v-model="mascota.descripcion" type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Foto</label>
              <input type="file">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <button @click="showAlert" class="btn btn-primary">Añadir mascota</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'formulario-mascota',
    data() {
      return {
        mascota: {
          nombre: '',
          descripcion: '',
          foto: ''
        },
      }
    },
    methods: {
    enviarFormulario() {
      this.$emit('add-pet', this.mascota);
    },
    showAlert() {
      // Use sweetalert2
      this.$swal('Tu mascota ha sido añadida a nuestra base de datos con éxito');
      
    },
  },
   
   

  }


</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }
  button{
    margin-top:2rem;
  }
</style>