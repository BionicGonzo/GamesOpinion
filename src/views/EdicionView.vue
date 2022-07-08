<template>
    <div>
        <p id="resultado">{{ elresultado }} </p>
        <h1>Editando Opinion Para:</h1>
        <form>
            <div class="form-group">
                <input type="text" v-model="eljuego" class="form-control" id="exampleFormControlInput1" disabled >
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Nombre</label>
                <input type="text" v-model="elnombre" class="form-control" id="exampleFormControlInput1" placeholder="Tu nombre aquí" >
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Opiniones</label>
                <textarea class="form-control" v-model="laopinion" id="exampleFormControlTextarea1" rows="3" placeholder="Tu opinión aquí"></textarea>
            </div>
            <div>
                <Router-Link class="btn btn-primary" to="/administracion">Regresar</Router-Link>
                <button type="button" class="btn btn-info" v-on:click="prepararNuevaOpinion">Guardar</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
    export default{
    name:'EdicionView',
    methods:{
        ...mapActions(["actualizarOpinion"]),
        prepararNuevaOpinion(){
            let elindice = this.$route.params.id;
            let lanuevaopinion = {
                id: elindice,
                opinion: {
                    juego: this.eljuego,
                    nombre: this.elnombre,
                    opinion: this.laopinion,
                },//fin opinion
            };//fin lanuevaopinion
            this.actualizarOpinion(lanuevaopinion);
            this.eljuego='';
            this.elnombre='';
            this.laopinion='';
            this.elresultado = 'DATOS ACTUALIZADOS CORRECTAMENTE';
        },
    },
    data(){
      return{
          eljuego:'',
          elnombre:'',
          laopinion:'',
          elresultado:'',
      }
    },
    computed:{
      ...mapState(["lasopiniones"]),
    },
    created(){
        let elindice = this.$route.params.id;
        let estaopinion = this.lasopiniones[elindice];
        console.log("created , estaopinion=>");
        console.log(estaopinion);

        if(estaopinion == undefined){
            console.log('ingresa al if cuando estaopinion es undefined');
            this.$router.push('/notfound');
        }
        else{
        this.elnombre = estaopinion.nombre;
        this.laopinion = estaopinion.opinion;
        this.eljuego = estaopinion.juego;
        }
    }, //fin created
}
</script>

<style scoped>
#resultado{
  color: green;
  font-size: 30px;
}
</style>