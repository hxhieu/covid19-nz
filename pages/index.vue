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
      icon="el-icon-s-data"
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
  watch: {
    filterLoc(val, oldVal) {
      if (val === oldVal) return
      const valid = this.confirmed.map(x => x.location).includes(val)
      this.$router.push({
        query: {
          location: valid ? val : null,
          age: this.filterAge,
          gender: this.filterGender,
        },
      })
      this.filterLoc = valid ? val : null
    },
    filterAge(val, oldVal) {
      if (val === oldVal) return
      const valid = this.confirmed.map(x => x.age).includes(val)
      this.$router.push({
        query: {
          age: valid ? val : null,
          location: this.filterLoc,
          gender: this.filterGender,
        },
      })
      this.filterAge = valid ? val : null
    },
    filterGender(val, oldVal) {
      if (val === oldVal) return
      const valid = this.confirmed.map(x => x.gender).includes(val)
      this.$router.push({
        query: {
          gender: valid ? val : null,
          location: this.filterLoc,
          age: this.filterAge,
        },
      })
      this.filterGender = valid ? val : null
    },
  },
  created() {
    const { location, age, gender } = this.$route.query
    this.filterLoc = location
    this.filterAge = age
    this.filterGender = gender
  },
}
</script>

<style scoped lang="scss"></style>
