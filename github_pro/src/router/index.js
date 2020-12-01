import Vue from 'vue'
import Router from 'vue-router'
import GitHub from '@/components/GitHub'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GitHub',
      component: GitHub
    }
  ]
})
