<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="losJuegos" v-for="(juego, indice) in losJuegos" v-bind:key="indice">
      <div class="card" style="width: 18rem;">
        <img v-bind:src="juego.background_image" class="card-img-top" v-bind:alt="juego.name">
          <div class="card-body">
            <h5 class="card-title">{{juego.name}}</h5>
            <p class="card-text"></p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Rating: {{juego.rating}}</li>
            <li class="list-group-item">Released: {{juego.released}}</li>
            <li class="list-group-item">Updated: {{juego.updated}}</li>
          </ul>
        <div class="card-body">
          <button type="button" class="btn btn-primary" data-toggle="modal" v-bind:data-target="`#exampleModal${indice}`" >Opinar</button>
        </div>
      </div>

      <div class="modal fade" v-bind:id="`exampleModal${indice}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Escribe tu opinion para {{juego.name}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              
              <form>
                <div class="form-group">
                  <label v-bind:text="eljuego">{{juego.name}}</label>
                </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Nombre</label>
                    <input type="text" v-model="elnombre" class="form-control" id="exampleFormControlInput1" placeholder="Tu nombre aqui">
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Opiniones</label>
                    <textarea class="form-control" v-model="laopinion" rows="3" placeholder="Tu opinion aqui"></textarea>
                </div>
              </form>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="procesarOpinion(juego.name)">Guardar</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'DatosJuegos',
  props: {
    msg: String
  },
  data() {
    return {
      laopinion: '',
      elnombre: '',
      eljuego: '',
    }
  },
  methods: {
    ...mapActions(["insertarOpiniones"]),
    procesarOpinion(nombrejuego) {
      console.log(nombrejuego);
      let elObjetoOpinion = {
        juego: nombrejuego,
        nombre: this.elnombre,
        opinion: this.laopinion
      };
      this.insertarOpiniones(elObjetoOpinion);
      this.laopinion = '';
      this.elnombre = '';
      this.eljuego = '';
    },
  },
  computed: {
    ...mapState(["losJuegos"]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#losJuegos {
  display: inline-block;
}
</style>
