import guideSelector from './selector'

export default {
  data() {
    return {
      targetComp: null,
      targetCompId: '',
      requiredPath: '',
    }
  },
  methods: {
    registerTarget() {},
    unregisterTarget() {},
    goNext(recordToStorage = false) {
      this.$store.dispatch('guide/nextStep', { recordToStorage })
    },
    trackTargetComp() {
      if (!this.targetComp) {
        if (this.targetCompId) {
          const comp = guideSelector.query(this.targetCompId)
          if (comp) {
            // first time got target
            this.targetComp = comp
            this.registerTarget()
            this.trackHandler = null
          } else {
            // not found, continue track
            this.trackHandler = setTimeout(() => this.trackTargetComp(), 16)
          }
        } else {
          // target comp id not set, continue track
          this.trackHandler = setTimeout(() => this.trackTargetComp(), 16)
        }
      }
    },
    stopKeyboard() {
      window.addEventListener('keydown', this._keyboardStopFunc, true)
    },
    resumeKeyboard() {
      window.removeEventListener('keydown', this._keyboardStopFunc)
    },
    _keyboardStopFunc(event) {
      event.stopPropagation()
    },
  },
  mounted() {
    if (this.requiredPath && this.$route.path !== this.requiredPath) {
      this.$router.replace(this.requiredPath)
    }
    document.body.classList.add('guide-body')
    if (this.targetCompId) {
      this.trackTargetComp()
    }
  },
  beforeDestroy() {
    this.$emit('reset-hand')
    if (this.trackHandler) {
      clearTimeout(this.trackHandler)
      this.trackHandler = null
    }
    if (this.targetComp) {
      this.unregisterTarget()
    }
    document.body.classList.remove('guide-body')
  },
}
