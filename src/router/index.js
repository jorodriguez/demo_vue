/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UsuarioPagina from '@/components/usuario'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/usuario',
      name: 'Usuario',
      component: UsuarioPagina
    }
  ]
})
