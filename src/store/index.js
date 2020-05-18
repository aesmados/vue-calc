import Vue from 'vue'
import Vuex from 'vuex'
import income from './modules/income'
import outcome from './modules/outcome'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    income, outcome
  }
})
