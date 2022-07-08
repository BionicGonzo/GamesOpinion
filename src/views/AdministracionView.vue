<template>
  <div class="admin">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Administrando la Lista de Opiniones</h1>
    <table border="1">
      <tr>
        <th>#</th>
        <th>Persona</th>
        <th>Juego</th>
        <th>Opinión</th>
        <th>Operación</th>
      </tr>
      <tr v-for="(laopinion, indice) in lasopiniones" v-bind:key="indice">
        <td>{{indice}}</td>
        <td>{{laopinion.nombre}}</td>
        <td>{{laopinion.juego}}</td>
        <td>{{laopinion.opinion}}</td>
        <td><button class="btn btn-danger" v-on:click="eliminarOpinion(indice)">Eliminar</button> | <router-link class="btn btn-info" v-bind:to="`/editar/${indice}`">Editar</router-link></td>
      </tr>
      </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default{
    name:'AdministracionView',
    methods:{
      ...mapActions(["eliminarOpinion"]),
    },
    computed:{
      ...mapState(["lasopiniones"]),
    }
}
</script>

<style scoped>

img {
  width: 30%;
}

table {
  display: inline-block;
}
</style>