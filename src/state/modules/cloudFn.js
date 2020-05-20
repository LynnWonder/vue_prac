import { getCloudInfo } from '@services/cloudFn'
const cloudFnStore = {
  namespaced: true,

  state: {
    info: {},
  },

  mutations: {
    saveCloudFnState(state, payload) {
      state.info = payload
    },
  },

  actions: {
    async fetchInfo({ commit }) {
      const info = await getCloudInfo()
      commit('saveCloudFnState', info || {})
    },
  },
}

export default cloudFnStore
