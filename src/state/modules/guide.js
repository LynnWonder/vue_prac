import { getGuideInfo, putGuideInfo } from '@services/guide'
const guideStore = {
    namespaced: true,

    state: {
        guideState: 'guiding',
        currentStep: 0,
        serviceId: '',
        functionName: '',
    },

    mutations: {
        saveAll(state, payload) {
            state.guideState = payload.guideState || 'init'
            state.currentStep = payload.currentStep || 0
            state.serviceId = payload.serviceId || ''
            state.functionName = payload.functionName || ''
        },

        saveGuideState(state, payload) {
            state.guideState = payload
        },

        saveCurrentStep(state, payload) {
            state.currentStep = payload
        },

        saveFunctionName(state, payload) {
            state.functionName = payload
        },
    },

    actions: {
        async fetchInfo({ commit }) {
            const info = await getGuideInfo()
            commit('saveGuideState', info.guideState || 'init')
            commit('saveCurrentStep', info.currentStep || 0)
            commit('saveFunctionName', info.functionName || '')
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
            commit('saveFunctionName', '')
            await putGuideInfo({
                guideState: 'init',
                currentStep: 0,
            })
        },

        async start({ commit }) {
            commit('saveGuideState', 'guiding')
            commit('saveCurrentStep', 0)
            // await putGuideInfo({
            //     guideState: 'guiding',
            //     currentStep: 0,
            // })
        },

        async finish({ commit }) {
            await commit('saveGuideState', 'finish')
            // await putGuideInfo({
            //     guideState: 'finish',
            // })
        },
    },
}

export default guideStore
