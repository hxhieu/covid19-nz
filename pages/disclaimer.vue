<template>
  <div></div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  created() {
    this.setAcceptTerms(false)
    this.$nextTick(() => {
      this.$router.push('/')
    })
  },
  methods: {
    ...mapMutations('Dashboard', ['setAcceptTerms']),
  },
}
</script>
