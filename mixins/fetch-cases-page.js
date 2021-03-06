import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('Cases', {
      fetchBusy: 'busy',
    }),
  },
  watch: {
    fetchBusy(val) {
      if (val) this.$nuxt.$loading.start()
      else this.$nuxt.$loading.finish()
    },
  },
}
