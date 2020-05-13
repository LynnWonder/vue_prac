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
      console.info('===>')
      console.info(info)
      commit('saveCloudFnState', info || {})
    },
  },
}

export default cloudFnStore
