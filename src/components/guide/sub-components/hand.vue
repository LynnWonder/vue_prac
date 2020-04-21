<template>
  <div class="hand" :style="{ left, top }">
    <div class="dot"></div>
    <img :src="hand" alt class="hand-img" />
  </div>
</template>

<script>
import hand from './hand-point-up.svg'

export default {
  data() {
    return {
      hand,
    }
  },
  props: {
    position: {
      type: Object,
      default: () => ({
        left: 0,
        top: 0,
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
  },
}
</script>

<style lang="less" scoped>
@alpha: 0.4;

@keyframes handmove {
  0% {
    top: 50px;
    opacity: 0;
  }
  5% {
    top: 50px;
    opacity: 1;
  }
  50% {
    top: 0;
  }
  75% {
    top: 0;
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes dotpulse {
  0% {
    box-shadow: 0 0 0 0 fade(blue, @alpha);
  }
  50% {
    box-shadow: 0 0 0 0 fade(blue, @alpha);
  }
  70% {
    box-shadow: 0 0 0 60px fade(blue, @alpha);
  }
  75% {
    box-shadow: 0 0 0 0 fade(blue, @alpha);
  }
  100% {
    box-shadow: 0 0 0 0 fade(blue, @alpha);
  }
}
.hand {
  position: absolute;
  display: block;
  z-index: 100000000;
  pointer-events: none;

  .hand-img {
    width: 50px;
    height: 50px;
    position: absolute;
    animation: handmove 3s infinite;
  }

  .dot {
    position: absolute;
    width: 2px;
    height: 2px;
    top: -1px;
    left: 19px;
    border-radius: 1px;
    animation: dotpulse 3s infinite;
  }
}
</style>
