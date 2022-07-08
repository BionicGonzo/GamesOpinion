<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <DatosJuegos msg="Lista de Juegos Disponibles"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
import DatosJuegos from '@/components/DatosJuegos.vue'

export default {
  name: 'HomeView',
  components: {
    DatosJuegos
  },
  methods: {
    ...mapActions(["getJuegos"]),
  },
  created() {
    this.getJuegos();
  }
}
</script>

<style scoped>

img {
  width: 30%;
}

</style>
