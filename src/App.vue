<template>
  <div id="app">
    <Background />
    <Inicio />
  </div>
</template>

<script>
import Background from "@/components/Background.vue";
import Inicio from "@/components/Inicio.vue";
import Router from './router/Router'; 

export default {
  name: 'App',
  router: Router,
  components: {
    Background,
    Inicio,
  },
  methods: {
    redirectTo(path) {
      this.$router.push(path);
    }
  }
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
