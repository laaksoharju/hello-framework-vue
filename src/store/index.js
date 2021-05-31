import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: false
  },
  mutations: {
    mutateDarkMode (state) {
      state.darkMode = !state.darkMode;
    }
  },
  actions: {
    toggleDarkMode (context) {
      context.commit('mutateDarkMode');
      document.body.classList.toggle('dark');
    }
  },
  modules: {
  }
})
