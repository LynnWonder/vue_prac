<template>
  <div>
    <div class="ellipsis-container" v-if="show">
      <div class="shadow">
        <textarea class="content" :rows="rows"></textarea>
        <div class="shadow-box" ref="box">
          {{ showContent }}
          <slot name="ellipsis">
            {{ ellipsisText }}
            <span class="ellipsis-btn">{{ showBtnText }}</span>
          </slot>
          <span ref="tail"></span>
        </div>
      </div>
      <div class="real-box">
        {{ showContent }}
        <slot name="ellipsis" v-if="textLength < content.length">
          {{ ellipsisText }}
          <span class="ellipsis-btn" @click.stop="showMore">{{ showBtnText }}</span>
        </slot>
      </div>
    </div>
    <div v-else class="original-content">
      {{ content }}
      <span class="ellipsis-btn" @click.stop="hideMore">{{ hideBtnText }}</span>
    </div>
  </div>
</template>

<script>
// 根据 vue-overflow-ellipsis 修改
import resizeObserver from 'element-resize-detector'
const observer = resizeObserver()

export default {
  props: {
    content: {
      type: String,
      default: '',
    },
    showBtnText: {
      type: String,
      default: '展开',
    },
    hideBtnText: {
      type: String,
      default: '收起',
    },
    ellipsisText: {
      type: String,
      default: '...',
    },
    rows: {
      type: Number,
      default: 2, // notice: 默认显示两行
    },
  },
  data() {
    return {
      textLength: 0,
      beforeRefresh: null,
      boxWidth: 0,
      boxHeight: 0,
      show: true,
    }
  },
  computed: {
    showContent() {
      return this.content.substr(0, this.textLength)
    },
    watchData() {
      return [this.content, this.btnText, this.ellipsisText, this.rows]
    },
  },
  watch: {
    watchData: {
      immediate: true,
      handler() {
        this.refresh()
      },
    },
  },
  mounted() {
    observer.listenTo(this.$refs.box, (el) => {
      if (el.offsetWidth == this.boxWidth && el.offsetHeight == this.boxHeight) return
      this.boxWidth = el.offsetWidth
      this.boxHeight = el.offsetHeight
      this.refresh()
    })
  },
  beforeDestroy() {
    observer.uninstall(this.$refs.box)
  },
  methods: {
    refresh() {
      this.beforeRefresh && this.beforeRefresh()
      let stopLoop = false
      this.beforeRefresh = () => (stopLoop = true)
      this.textLength = this.content.length
      const checkLoop = (start, end) => {
        if (stopLoop || start + 1 >= end) {
          this.beforeRefresh = null
          return
        }
        const boxRect = this.$refs.box.getBoundingClientRect()
        const tailRect = this.$refs.tail.getBoundingClientRect()
        // notice: check isOverflow by compare the bottom
        const overflow = tailRect.bottom > boxRect.bottom
        overflow ? (end = this.textLength) : (start = this.textLength)
        this.textLength = Math.floor((start + end) / 2)
        this.$nextTick(() => checkLoop(start, end))
      }
      this.$nextTick(() => checkLoop(0, this.textLength))
    },
    showMore() {
      this.show = false
    },
    hideMore() {
      this.show = true
    },
  },
}
</script>

<style lang="less" scoped>
.ellipsis-container {
  text-align: left;
  position: relative;
  line-height: inherit;
  .shadow {
    position: absolute;
    width: 100%;
    display: flex;
    pointer-events: none;
    user-select: none;
    opacity: 0; // notice: 这里是显示展开还是收起的关键
    .content {
      border: none;
      flex: auto;
      padding: 0;
      resize: none;
      overflow: hidden;
      font-size: inherit;
      line-height: inherit;
    }
    .shadow-box {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
}
.original-content {
  text-align: left;
  line-height: inherit;
}
.ellipsis-btn {
  cursor: pointer;
  color: blue;
  &:hover {
    color: mediumblue;
  }
  &:active {
    color: darkblue;
  }
}
</style>
