export default {
  register(vm) {
    this.vm = vm
  },
  query(key) {
    return this.search(this.vm, key) || this.domSearch(key)
  },
  domSearch(key) {
    console.info('======>',document.querySelector(`[guide-key="${key}"]`))
    return document.querySelector(`[guide-key="${key}"]`)
  },
  search(node, key) {
    if (!node || !node.$attrs || !node.$children) {
      return null
    }
    if (node.$attrs['guide-key'] === key) {
      return node
    }
    for (const child of node.$children) {
      const n = this.search(child, key)
      if (n) {
        return n
      }
    }
    return null
  },
}
