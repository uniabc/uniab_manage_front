import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/login')
  },

]
/*{
  path: '/about',
      name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../pages/AboutView.vue')
}*/
// component: () => import(/* webpackChunkName: "about" */ '../pages/AboutView.vue')
const router = new VueRouter({
  routes
})

export default router
