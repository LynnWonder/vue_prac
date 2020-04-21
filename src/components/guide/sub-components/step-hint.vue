<template>
  <div class="step-hint">
    <a-progress :percent="percent" type="circle" class="progress" />
    <div>
      <span class="current">第 {{current}} 步 /&nbsp;</span>
      <span class="total">总共 {{total}} 步</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  computed: {
    percent() {
      return Math.floor((this.current / this.total) * 100)
    },
  },
}
</script>

<style lang="less" scoped>

.step-hint {
  position: absolute;
  left: 50%;
  bottom: 80px;
  transform: translateX(-50%);
  z-index: 9999999;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .progress {
    margin: 0 auto 16px;

    :global(.byte-progress__text) {
      display: none;
    }
  }

  .current {
    color: grey;
    font-size: 18px;
    margin-bottom: 6px;
  }

  .total {
    color: grey;
    font-size: 18px;
  }
}
</style>
