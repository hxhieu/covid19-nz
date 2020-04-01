<template>
  <div></div>
</template>
<script>
import { mapMutations } from 'vuex'
let referrer
export default {
  created() {
    this.setAcceptTerms(false)
    this.$nextTick(() => {
      this.$router.push(referrer || '/')
    })
  },
  methods: {
    ...mapMutations('Dashboard', ['setAcceptTerms']),
  },
  beforeRouteEnter(to, from, next) {
    referrer = { ...from }
    next()
  },
}
</script>
