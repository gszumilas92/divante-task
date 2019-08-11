import "bootstrap/scss/bootstrap-grid.scss";
import "./assets/styles/main.scss";

import Vue from "vue";
import Vuex from "vuex";
import VueRouter from 'vue-router'
import App from "./App.vue"

import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Contact from "./views/Contact.vue"

Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store({
  state: {
    itemList: [],
    cartList: [],
    loading: false
  },
  mutations: {
    appendItemsToList (state, payload) {
      state.itemList = payload;
      state.loading = false;
    },
    addToCart (state, payload) {
      state.cartList.push(payload);
    },
    startLoading (state) {
      state.loading = true;
    }
  },
  actions: {
    async fetchItemList(context) {
      context.commit('startLoading')
      let response = await fetch('https://jsonplaceholder.typicode.com/photos')
      let data = await response.json()
      context.commit('appendItemsToList', data.slice(0, 20))
    }
  }
})

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes
})

require('./index.html')

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
