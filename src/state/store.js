import Vue from 'vue'
import Vuex from 'vuex'
import dispatchActionForAllModules from '../utils/dispatch-action-for-all-modules'
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    errTriggered: false,
  },
  modules,
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production',
  mutations: {
    UPDATE_ERROR_TRIGGER_STATUS(state, status) {
      state.errTriggered = status
    },
  },
})

export default store

// Automatically run the `init` action for every module,
// if one exists.
dispatchActionForAllModules('init')
