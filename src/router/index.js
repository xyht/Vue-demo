import Vue from 'vue'
import Router from 'vue-router'
import login from '.././view/login/login'
import Register from '.././view/register/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Register',
      name: Register,
      component: Register
    }
  ]
})
