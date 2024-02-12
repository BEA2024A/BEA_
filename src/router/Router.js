import Vue from 'vue';
import Router from 'vue-router';
import IniciarSesion from '../components/IniciarSesion.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/iniciar-sesion',
      name: 'IniciarSesion',
      component: IniciarSesion
    }
  ]
});