<template>
  <div class="hello">
    <div class="nav">
      <router-link to="/markdown">Markdown</router-link>
      <router-link to="/ellipsis">Ellipsis</router-link>
      <router-link to="/webp">Webp</router-link>
    </div>

    <guide></guide>
    <h1 guide-key="main-page">{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <span style="font-weight: bold">from firebase:</span>
    <h2 style="color:mediumvioletred">{{ info.msg }}</h2>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li
        ><a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        ></li
      >
      <li
        ><a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        ></li
      >
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li
        ><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener"
          >vue-devtools</a
        ></li
      >
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Guide from './guide/Guide.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    ...mapState('cloudFn', ['info']),
  },
  components: {
    Guide,
  },
  methods: {
    ...mapActions('cloudFn', ['fetchInfo']),
  },
  created() {
    this.fetchInfo()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.nav {
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: bold;
}
</style>
