<template>
  <div class="container">
    <!-- <h2>Confirmed Cases</h2> -->
    <CaseTable :records="confirmed"></CaseTable>
    <!-- <h2>Probable Cases</h2>
    <CaseTable :records="probable"></CaseTable> -->
  </div>
</template>

<script>
const CaseTable = () =>
  import(
    /* webpackChunkName: 'components-case-table' */ '../components/CaseTable'
  )

export default {
  components: {
    CaseTable,
  },
  asyncData: async ({ store }) => {
    await store.dispatch('Cases/fetchRecords')
  },
  computed: {
    confirmed() {
      return this.$store.state.Cases.records.confirmed
    },
    probable() {
      return this.$store.state.Cases.records.probable
    },
  },
}
</script>

<style scoped lang="scss"></style>
