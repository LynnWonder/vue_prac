<template>
  <div class="helper-window" :style="{ left, top, width, height }"></div>
</template>

<script>
export default {
  props: {
    position: {
      type: Object,
      default: () => ({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      }),
    },
  },
  computed: {
    left() {
      return `${this.position.left}px`
    },
    top() {
      return `${this.position.top}px`
    },
    width() {
      return `${this.position.width}px`
    },
    height() {
      return `${this.position.height}px`
    },
  },
}
</script>

<style lang="less" scoped>
.helper-window {
  position: absolute;
  z-index: 9999998;
  background-color: rgba(255, 255, 255, 0.9);
  // border: 1px solid rgba(0, 0, 0, .5);
  border-radius: 4px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease-out;
}
</style>
