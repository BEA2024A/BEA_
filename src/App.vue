<template>
  <div id="app">
    <Background />
    <Inicio />
    <!-- Otras secciones de tu aplicación aquí -->
  </div>
</template>

<script>

import Inicio from "@/components/Inicio.vue"; // Asegúrate de ajustar la ruta

export default {
  components: {
    Inicio,
    // Agrega otros componentes según sea necesario
  },
};
</script>

<style>
body{
  background-color:#f6f6f6;
}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    max-width: 1920px; 
    margin: 0 auto;
  }

</style>
