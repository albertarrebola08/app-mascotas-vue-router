<template>

  <div id="tabla-usuarios">
    <!-- <div v-if="!mascotas.length" class="alert alert-info" role="alert">
        No se han agregado mascotas
    </div> -->
    
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Usuario (Nickname)</th>
          <th>Rol</th>
          <th>Acciones</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario._id">
          <td>{{usuario.nombre}}</td>
          <td>{{usuario.user}}</td>
          <td>{{usuario.roles}}</td>
          <td>
              <button class="btn btn-danger ml-2" @click="$emit('eliminar-usuario', usuario)">🗑️ Borrar</button>
          </td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
  components: {  },
    name: 'tabla-usuarios',
    
    props:{
      usuarios: Array
    }
  }
</script>

<style scoped></style>