import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './state/store'
import guideSelector from './components/guide/utils/selector.js'
import 'ant-design-vue/dist/antd.css'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
import 'modernizr'

Vue.config.productionTip = false

Vue.use(Antd)
// 混入
Vue.mixin({
  data() {
    return {
      process: {
        env: process.env,
      },
    }
  },
})

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
guideSelector.register(app)
