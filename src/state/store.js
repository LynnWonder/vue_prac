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
        UPDATE_ERROR_TRIGGER_TIME(state, time) {
            state.errTriggeredTime = time
        },
    },
    actions: {
        // globalError({}, payload) {
        //     if (payload.errcode === 10037) {
        //         return
        //     }
        //     Vue.prototype.$message ? Vue.prototype.$message.error(payload.errmsg) : console.error(payload.errmsg)
        // },
    },
})

export default store

// Automatically run the `init` action for every module,
// if one exists.
dispatchActionForAllModules('init')
