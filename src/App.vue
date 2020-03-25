<template>
  <div>
    <h1>Hello Vue 3</h1>
  </div>
</template>

<script>
// import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    store.dispatch('fetchRecords')
    return {}
  },
}
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
