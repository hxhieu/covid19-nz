<template>
  <div class="container">
    <Filters
      icon="el-icon-map-location"
      header="By Location"
      :values="locationFilters"
    ></Filters>
    <Filters icon="el-icon-user" header="By Age" :values="ageFilters"></Filters>
    <CaseTable :records="confirmed"></CaseTable>
  </div>
</template>

<script>
const Filters = () =>
  import(/* webpackChunkName: 'components-filters' */ '../components/Filters')
const CaseTable = () =>
  import(
    /* webpackChunkName: 'components-case-table' */ '../components/CaseTable'
  )

export default {
  components: {
    CaseTable,
    Filters,
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
    locationFilters() {
      return this.confirmed.map(x => x.location)
    },
    ageFilters() {
      return this.confirmed.map(x => x.age)
    },
  },
}
</script>

<style scoped lang="scss"></style>
