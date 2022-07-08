<template>
  <div class="opiniones">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Opiniones de Jugadores</h1>
    <p>La cantidad de opiniones es: {{sumaOpiniones}}</p>
    <div v-for="(laopinion,indice) in lasopiniones" v-bind:key="indice">
      <div class="accordion" id="accordionExample" >
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <button id="opinion" class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" v-bind:data-target="`#collapseTwo${indice}`" aria-expanded="false" aria-controls="collapseTwo">
              Opinión creada por : {{ laopinion.nombre }}, para el juego: {{ laopinion.juego }}.
              </button>
            </h2>
          </div>
          <div v-bind:id="`collapseTwo${indice}`" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
              <h3>Opinión:</h3>
              {{ laopinion.opinion }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default{
    name:'OpinionesView',
    methods:{

    },
    computed:{
        ...mapState(["lasopiniones"]),
        ...mapGetters(["sumaOpiniones"]),
    }
}
</script>

<style scoped>
img {
  width: 30%;
}
</style>