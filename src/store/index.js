import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    losJuegos:[],
    lasopiniones:[],
  },
  getters: {
    sumaOpiniones(state){
      return state.lasopiniones.length;
    }
  },
  mutations: {
    changelosJuegos(state, juego){
      state.losJuegos.push(juego);
    },
    changeLasOpiniones(state, opinion){
      // console.log("Antes del push");
      state.lasopiniones.push(opinion);
      // console.log(state.lasopiniones);
    },
    deleteLasOpiniones(state, id){
      state.lasopiniones.splice(id,1);
    },
    updateLasOpiniones(state, objetoOpiniones){
      state.lasopiniones.splice(objetoOpiniones.id,1,objetoOpiniones.opinion);
    }
  },
  actions: {
    async getJuegos({commit}){
      const res = await fetch("games.json");
      const json = await res.json();
      // console.log(json);
      for(let juego of json){
        commit("changelosJuegos", juego);
      }
    },
    insertarOpiniones({commit}, objetoOpiniones){
      // console.log('action insertarOpiniones, objetoOpiniones=>');
      // console.log(objetoOpiniones);
      commit("changeLasOpiniones", objetoOpiniones);
    },
    eliminarOpinion({commit}, idopinion){
      commit("deleteLasOpiniones", idopinion);
    },
    actualizarOpinion({commit}, objetoOpiniones){
      commit("updateLasOpiniones", objetoOpiniones);
    },
  },
  modules: {
  }
})