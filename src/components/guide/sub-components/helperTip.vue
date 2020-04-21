<template>
  <div
    v-if="tip"
    class="tip"
    :class="`tip-${tipPosition}`"
    :style="{ left: tipLeft, top: tipTop, width: $ccI18n.guideStepTipWidth }"
  >
    <div class="content">{{ tip }}</div>
    <div v-if="computedHint" class="tip-hint">
      <div class="hint-seperator"></div>
      <a-button v-if="computedHint.type === 'button'" type="primary" @click="computedHint.click">{{
        computedHint.content
      }}</a-button>
      <div v-else>{{ computedHint.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tip: {
      type: String,
      default: '',
    },
    tipPosition: {
      type: String,
      default: 'right',
    },
    trackerPosition: {
      type: Object,
      default: () => ({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      }),
    },
    tipHint: {
      type: [String, Object],
    },
  },
  computed: {
    computedHint() {
      if (typeof this.tipHint === 'string') {
        return {
          type: 'string',
          content: this.tipHint,
        }
      }
      return this.tipHint
    },
    tipLeft() {
      let l = 0
      switch (this.tipPosition) {
        case 'right':
          l = this.trackerPosition.width + 10
          break
        case 'left':
          l = -10
          break
        case 'top':
        case 'bottom':
          l = this.trackerPosition.width / 2
          break
        default:
          l = 0
      }
      return `${this.trackerPosition.left + l}px`
    },
    tipTop() {
      let t = 0
      switch (this.tipPosition) {
        case 'right':
        case 'left':
          t = this.trackerPosition.height / 2
          break
        case 'top':
          t = -10
          break
        case 'bottom':
          t = this.trackerPosition.height + 10
          break
        default:
          t = 0
      }
      return `${this.trackerPosition.top + t}px`
    },
  },
}
</script>

<style lang="less" scoped>
.tip {
  position: absolute;
  width: 300px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.4);
  transition: opacity 0.1s ease-out;
  z-index: 10000000;

  .content {
    padding: 10px;
    background: #f0f0f0;
    border-radius: 5px;
  }

  &::after {
    content: '';
    display: block;
    border: 5px solid #ffffff;
    position: absolute;
  }

  &.tip-right {
    transform: translateY(-50%);

    &::after {
      border-bottom-color: transparent;
      border-left-color: transparent;
      border-top-color: transparent;
      top: 50%;
      left: -9px;
      transform: translateY(-50%);
    }
  }

  &.tip-left {
    transform: translate(-100%, -50%);

    &::after {
      border-bottom-color: transparent;
      border-right-color: transparent;
      border-top-color: transparent;
      top: 50%;
      right: -9px;
      transform: translateY(-50%);
    }
  }

  &.tip-top {
    transform: translate(-50%, -100%);

    &::after {
      border-left-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      bottom: -9px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &.tip-bottom {
    transform: translateX(-50%);

    &::after {
      border-left-color: transparent;
      border-right-color: transparent;
      border-top-color: transparent;
      top: -9px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .tip-hint {
    text-align: center;

    .hint-seperator {
      height: 1px;
      margin: 10px 0 20px;
      border-top: 1px solid #eee;
    }
  }
}
</style>
