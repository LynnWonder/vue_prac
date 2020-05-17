<template>
  <div class="guide-container">
    <layer v-if="guideState === 'guiding'" />
    <runner v-if="guideState === 'guiding'" />
    <a-modal
      :visible="guideState === 'initial'"
      title="开始引导"
      :close-on-press-escape="false"
      :mask-closable="false"
      :closable="false"
      ok-text="开始引导"
      cancel-text="不需要了，跳过"
      @ok="startGuide"
      @cancel="jumpOver"
    >
      第一次使用？xxx
    </a-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Layer from './Layer'
import Runner from './Runner'

export default {
  computed: {
    ...mapState('guide', ['currentStep', 'guideState']),
  },

  methods: {
    ...mapActions('guide', ['fetchInfo', 'start', 'finish']),

    startGuide() {
      this.start()
    },

    jumpOver() {
      this.finish()
    },
  },
  mounted() {
    this.fetchInfo()
  },

  components: {
    Layer,
    Runner,
  },
}
</script>
