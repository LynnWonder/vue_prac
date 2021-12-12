<template>
  <div>
    <picture>
      <source srcset="../assets/webp/background.webp" type="image/webp" />
      <source srcset="../assets/background.jpeg" type="image/jpeg" />
      <img src="../assets/background.jpeg" alt="background" />
    </picture>
    <p class="img-background">
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Webp',
}
</script>

<style scoped>
.no-webp .img-background {
  color: red;
  background: url('../assets/background.jpeg');
}
.webp .img-background {
  color: green;
  background: url('../assets/webp/background.webp');
}
</style>
