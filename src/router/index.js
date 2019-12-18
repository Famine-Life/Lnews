import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import MY_list from '@/components/MY_list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/MY_list',
      name: 'MY_list',
      component: MY_list,
      
    }
  ]
})
