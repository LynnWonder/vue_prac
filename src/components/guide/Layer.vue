<template>
  <div>
    <div class="layer-container" v-show="!questionModal">
      <div class="mask"></div>
      <div class="action-area">
        <a-button type="danger" ghost class="action-button" @click="showQuestion">退出用户引导</a-button>
        <a-button type="primary" class="action-button" @click="openFeedback">反馈引导问题</a-button>
      </div>
    </div>
    <a-modal
      :visible="questionModal"
      title="取消"
      :close-on-press-escape="false"
      :mask-closable="false"
      :closable="false"
      ok-text="确认取消"
      cancel-text="继续引导"
      @ok="finishGuide"
      :z-index="10000000"
    >
    </a-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      questionModal: false,
    }
  },

  methods: {
    ...mapActions('guide', ['finish']),
    // ...mapActions('feedback', ['openOncallForUser']),

    showQuestion() {
      this.questionModal = true
    },

    finishGuide() {
      this.questionModal = false
      this.finish()
      document.body.style.overflow = null
    },

    async openFeedback() {
      // await this.openOncallForUser()
      this.$notice({
        title: '请进入反馈页反馈',
        desc: '会第一时间为您响应。',
        duration: 10000,
      })
    },
  },
}
</script>

<style lang="less" scoped>
.layer-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.6;

    box-sizing: content-box;
    background-color: #000;
    transition: all 0.3s ease-out;
  }

  .action-area {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    display: flex;

    .action-button {
      margin: 0 20px;
    }
  }
}
</style>
