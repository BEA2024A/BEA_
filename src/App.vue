<template>
  <div id="app">
    <Background />
    <Inicio />
  </div>
</template>

<script>

import Inicio from "@/components/Inicio.vue";

export default {
  components: {
    Inicio,

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
