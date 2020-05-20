import { getGuideInfo, putGuideInfo } from '@services/guide'
const guideStore = {
  namespaced: true,

  state: {
    guideState: '',
    currentStep: 0,
    serviceId: '',
    functionName: '',
  },

  mutations: {
    saveGuideState(state, payload) {
      state.guideState = payload
    },

    saveCurrentStep(state, payload) {
      state.currentStep = payload
    },
  },

  actions: {
    async fetchInfo({ commit }) {
      const info = await getGuideInfo()
      commit('saveGuideState', info.guideState || 'initial')
      commit('saveCurrentStep', info.currentStep || 0)
    },

    async nextStep({ commit, state }, payload) {
      if (state.guideState !== 'guiding') {
        return
      }

      const newStep = state.currentStep + 1
      commit('saveCurrentStep', newStep)
      if (payload && payload.recordToStorage) {
        await putGuideInfo({ currentStep: newStep })
      }
    },

    async reset({ commit }) {
      commit('saveGuideState', 'init')
      commit('saveCurrentStep', 0)
      await putGuideInfo({
        guideState: 'initial',
        currentStep: 0,
      })
    },

    async start({ commit }) {
      commit('saveGuideState', 'guiding')
      commit('saveCurrentStep', 0)
      await putGuideInfo({
        guideState: 'guiding',
        currentStep: 0,
      })
    },

    async finish({ commit }) {
      await commit('saveGuideState', 'finish')
      await putGuideInfo({
        guideState: 'finish',
      })
    },
  },
}

export default guideStore
