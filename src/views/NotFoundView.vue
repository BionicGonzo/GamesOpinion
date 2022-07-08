<template>
    <div id="notfound">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>La pagina que buscas no existe.</h1>
        <router-link to="/">Regresar a Inicio</router-link>
    </div>
</template>

<script>
    export default{
        name: 'NotFound',
    }
</script>

<style scoped>

 #notfound{
    color: red;
 }

img {
  width: 30%;
}

 a {
    text-decoration: none;
 }
</style>