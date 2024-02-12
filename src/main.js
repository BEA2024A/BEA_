import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import IniciarSesion from './components/IniciarSesion'
import PrimeraCita from './components/PrimeraCita.vue'
import Seguimiento from './components/Seguimiento.vue'
import Horario from './components/Horario.vue'
import Autoayuda from './components/Autoayuda.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/iniciar-sesion', component: IniciarSesion },
  { path: '/primera-cita', component: PrimeraCita },
  { path: '/seguimiento', component: Seguimiento },
  { path: '/horario', component: Horario },
  { path: '/autoayuda', component: Autoayuda }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

