<template>
  <div class="container">
    <Filters
      v-model="filterDate"
      icon="el-icon-date"
      header="Dates"
      :values="dateFilters"
      :button-width="filterButtonWidth"
    ></Filters>
    <Filters
      v-model="filterLoc"
      icon="el-icon-map-location"
      header="DHBs"
      :values="locationFilters"
      :button-width="filterButtonWidth"
    ></Filters>
    <Filters
      v-model="filterAge"
      icon="el-icon-user"
      header="Ages"
      :values="ageFilters"
      :button-width="filterButtonWidth"
    ></Filters>
    <Filters
      v-model="filterGender"
      icon="el-icon-s-data"
      header="Gender"
      :values="genderFilters"
      :button-width="filterButtonWidth"
    ></Filters>
    <CaseTable v-if="showSummary" :records="casesFiltered"></CaseTable>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
  data() {
    return {
      filterButtonWidth: 220,
      filterLoc: null,
      filterAge: null,
      filterGender: null,
      filterDate: null,
    }
  },
  computed: {
    ...mapGetters('Cases', ['allCases']),
    casesFiltered() {
      return this.allCases.filter(
        x =>
          (this.filterLoc ? x.location === this.filterLoc : true) &&
          (this.filterAge ? x.age === this.filterAge : true) &&
          (this.filterGender ? x.gender === this.filterGender : true) &&
          (this.filterDate ? x.date === this.filterDate : true)
      )
    },
    locationFilters() {
      return this.casesFiltered.map(x => x.location).sort()
    },
    ageFilters() {
      return this.casesFiltered.map(x => x.age).sort()
    },
    genderFilters() {
      return this.casesFiltered.map(x => x.gender).sort()
    },
    dateFilters() {
      return this.casesFiltered
        .map(x => x.date)
        .sort((x, y) => {
          const date1parts = x.split('-')
          const date1 = new Date(date1parts[2], date1parts[1], date1parts[0])
          const date2parts = y.split('-')
          const date2 = new Date(date2parts[2], date2parts[1], date2parts[0])
          if (date1 === date2) return 0
          return date1 < date2 ? 1 : -1
        })
    },
    showSummary() {
      return (
        this.filterLoc || this.filterAge || this.filterGender || this.filterDate
      )
    },
  },
  watch: {
    filterLoc(val, oldVal) {
      if (val === oldVal) return
      this.$router.push({
        query: {
          location: val,
          age: this.filterAge,
          gender: this.filterGender,
          date: this.filterDate,
        },
      })
    },
    filterAge(val, oldVal) {
      if (val === oldVal) return
      this.$router.push({
        query: {
          age: val,
          location: this.filterLoc,
          gender: this.filterGender,
          date: this.filterDate,
        },
      })
    },
    filterGender(val, oldVal) {
      if (val === oldVal) return
      this.$router.push({
        query: {
          gender: val,
          location: this.filterLoc,
          age: this.filterAge,
          date: this.filterDate,
        },
      })
    },
    filterDate(val, oldVal) {
      if (val === oldVal) return
      this.$router.push({
        query: {
          date: val,
          gender: this.filterGender,
          location: this.filterLoc,
          age: this.filterAge,
        },
      })
    },
  },
  created() {
    const { date, location, age, gender } = this.$route.query
    this.filterLoc = location
    this.filterAge = age
    this.filterGender = gender
    this.filterDate = date
    // Initial data
    this.fetchCases()
  },
  methods: {
    ...mapActions('Cases', {
      fetchCases: 'fetchRecords',
    }),
  },
}
</script>

<style scoped lang="scss"></style>
