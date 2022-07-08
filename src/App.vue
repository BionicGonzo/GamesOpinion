<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" to="#"><i class="fa-solid fa-headset"></i> Games Opinion</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="opciones" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/"><i class="fa-solid fa-house"></i> Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/opiniones"><i class="fa-solid fa-comments"></i> Opiniones</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin"><i class="fa-solid fa-gear"></i> Administración</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>
body {
  box-sizing: border-box;
}

#app {
  font-family: 'Finlandica', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

.navbar {
  display: flex;
  flex-direction: column;
  padding: 10px 50px
}

#opciones {
  justify-content: end;
}
</style>
