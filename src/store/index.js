import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth_login: false,
    username: '',
    password: ''
  },
  getters:{
    get_auth_login_inverse(state){
      return !state.auth_login
    }
  },
  mutations: {
    account_sign_in(state){ //, params
      console.log('Store sign in')
      state.auth_login = true
    },
    account_sign_out(state){
      console.log('Store sign out')
      state.auth_login = false
    }
  },
  actions: {
    login({commit}){
      commit('account_sign_in');
    },
    sign_out({commit}){
      commit('account_sign_out');
    }
  },
  modules: {
  }
})
