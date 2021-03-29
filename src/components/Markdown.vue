<template>
  <div>
    <a-textarea v-model="value" placeholder="Controlled autosize" :auto-size="{ minRows: 3, maxRows: 5 }" />
    <div class="markdown-body">
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
import { marked, template } from '@utils/marked'
export default {
  name: 'markdown',
  data() {
    return {
      input: '```javascript\n' + "let a='this is a test';\n" + 'console.info(`${a} console`);\n' + '```',
      value: template,
    }
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.value, { sanitize: true })
    },
  },
}
</script>

<style scoped></style>
