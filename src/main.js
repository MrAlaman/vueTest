import Vue from 'vue'
import App from './App.vue'
import VueTouch from 'vue-touch'
import VueRouter from 'vue-router'
import VueSwing from 'vue-swing'
import Vuex from 'vuex'
import game from './components/game.vue'
import end from './components/end.vue'
import Start from './components/Start.vue'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueTouch)

Vue.component('vue-swing', VueSwing)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/game', component: game, name: 'game' },
    { path: '/end', component: end, name: 'end'},
    { path: '/', component: Start, name: 'main'}
  ]
})
const store = new Vuex.Store({
    state: {
      sad: 0,
      happy: 0,
      loyal: 0,
    },
    actions: {
      sadinc({commit}){
        commit('SAD_INCREMENT')
      },
      happyinc({commit}){
        commit('HAPPY_INCREMENT')
      },
      loyalinc({commit}){
        commit('LOYAL_INCREMENT')
      },
      refresh({commit}){
        commit('REFRESH')
      }
    },
    mutations: {
      SAD_INCREMENT(state) {
        state.sad++;
      },
      HAPPY_INCREMENT(state) {
        state.happy++;
      },
      LOYAL_INCREMENT(state) {
        state.loyal++;
      },
      REFRESH(state) {
        state.loyal = 0;
        state.sad = 0;
        state.happy = 0;
      }
    },
    getters: {
      sad(state) {
        return state.sad;
      },
      happy(state) {
        return state.happy;
      },
      loyal(state) {
        return state.loyal;
      }
    },
    modules: {}
})

new Vue({
  el: "#app",
  router,
  store,
  render: h1 => h1(App),
})
