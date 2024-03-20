<script setup>
const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
console.log(path)
</script>

<template>
  <main>
    <ContentDoc class="prose"></ContentDoc>
  </main>
</template>
