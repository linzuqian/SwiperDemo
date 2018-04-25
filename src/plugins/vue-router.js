/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/routers'
// import store from '@/store'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes,
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(m => m.meta.auth) && !store.state.auth.authenticated) {
//     next({
//       name: 'login.index'
//     })
//   } else {
//     next()
//   }
// })

Vue.router = router

export default {
  router
}
