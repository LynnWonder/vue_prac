<template>
  <div>
    <component
      :is="currentStepComponent"
      @move-helper="handleMoveHelper"
      @update-tip="handleUpdateTip"
      @set-hand="handleSetHand"
      @reset-hand="handleResetHand"
    />
    <helper-window v-if="helperPosition" :position="helperPosition" />
    <helper-tip v-if="tipContent" :tip="tipContent" v-bind="tipOptions" />
    <hand v-if="handPosition" :position="handPosition" />
    <step-hint :current="currentStep + 1" :total="totalSteps" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import steps from './steps'
import HelperWindow from './sub-components/helperWindow'
import HelperTip from './sub-components/helperTip'
import Hand from './sub-components/hand'
import StepHint from './sub-components/step-hint'

export default {
  data() {
    return {
      helperPosition: undefined,
      tipContent: '',
      handPosition: undefined,
      tipOptions: {
        tipPosition: 'right',
        trackerPosition: undefined,
        tipHint: null,
      },
    }
  },

  computed: {
    ...mapState('guide', ['currentStep']),
    ...mapState('session', ['currentUser']),

    totalSteps() {
      return steps.length
    },
    currentStepComponent() {
      console.info('current===>',this.currentStep,steps[0])
      return steps[this.currentStep]
    },
  },

  methods: {
    handleMoveHelper(nextPosition) {
      this.helperPosition = nextPosition
    },
    handleUpdateTip(tipContent, options = {}) {
      this.tipContent = tipContent
      this.tipOptions = {
        tipPosition: 'right',
        trackerPosition: this.helperPosition,
        tipHint: null,
        ...options,
      }
    },
    handleSetHand(nextPosition) {
      if (
        this.handPosition &&
        this.handPosition.left === nextPosition.left &&
        this.handPosition.top === nextPosition.top
      ) {
        return
      }
      this.handPosition = nextPosition
    },
    handleResetHand() {
      this.handPosition = undefined
    },
  },

  components: {
    HelperWindow,
    HelperTip,
    Hand,
    StepHint,
  },
}
</script>
