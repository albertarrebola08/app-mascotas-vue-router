<template>

  <div id="tabla-mascotas" class="row">
    
    <div class="card-container col col-md-4 d-flex flex-wrap justify-content-center" v-for="mascota in mascotas" :key="mascota._id">
      <div class="card m-3 shadow-sm mb-5" style="width: 28rem;">
        <img src="../assets/cr1.jpg" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">{{mascota.nombre}}</h5>
          <p class="card-text">{{mascota.descripcion}}</p>
          <a href="#" class="btn btn-danger ml-2" @click="$emit('eliminar-mascota', mascota)">🗑️ Borrar</a>
        </div>
      </div>
    </div>



  </div>
</template>

<script>

  export default {
  components: {  },
    name: 'tabla-mascotas',
    
    props:{
      mascotas: Array
    }
  }
</script>

<style scoped></style>