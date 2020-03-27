<template>
  <div class="container">
    <Filters
      v-model="filterLoc"
      icon="el-icon-map-location"
      header="By Location"
      :values="locationFilters"
      :button-width="filterButtonWidth"
    ></Filters>
    <Filters
      v-model="filterAge"
      icon="el-icon-user"
      header="By Age"
      :values="ageFilters"
      :button-width="filterButtonWidth"
    ></Filters>
    <Filters
      v-model="filterGender"
      icon="el-icon-male"
      header="By Gender"
      :values="genderFilters"
      :button-width="filterButtonWidth"
    ></Filters>
    <CaseTable :records="confirmedFiltered"></CaseTable>
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
  data() {
    return {
      filterButtonWidth: 220,
      filterLoc: null,
      filterAge: null,
      filterGender: null,
    }
  },
  computed: {
    confirmed() {
      return this.$store.state.Cases.records.confirmed
    },
    probable() {
      return this.$store.state.Cases.records.probable
    },
    confirmedFiltered() {
      return this.confirmed.filter(
        x =>
          (this.filterLoc ? x.location === this.filterLoc : true) &&
          (this.filterAge ? x.age === this.filterAge : true) &&
          (this.filterGender ? x.gender === this.filterGender : true)
      )
    },
    allLocations() {
      return this.confirmed.map(x => x.location)
    },
    locationFilters() {
      return this.confirmedFiltered.map(x => x.location)
    },
    ageFilters() {
      return this.confirmedFiltered.map(x => x.age)
    },
    genderFilters() {
      return this.confirmedFiltered.map(x => x.gender)
    },
  },
}
</script>

<style scoped lang="scss"></style>
