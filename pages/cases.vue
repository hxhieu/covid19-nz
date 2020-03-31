<template>
  <div class="container">
    <el-row class="filters" :gutter="10">
      <el-col :md="8">
        <Filters
          v-model="filterLoc"
          :fa-icon="['fas', 'map-marked-alt']"
          header="DHBs"
          :values="locationFilters"
          :button-width="220"
        ></Filters>
      </el-col>
      <el-col :md="4">
        <Filters
          v-model="filterAge"
          :fa-icon="['fas', 'user']"
          header="Ages"
          :values="ageFilters"
          :button-width="150"
        ></Filters>
      </el-col>
      <el-col :md="4">
        <Filters
          v-model="filterGender"
          :fa-icon="['fas', 'venus-mars']"
          header="Gender"
          :values="genderFilters"
          :button-width="140"
        ></Filters>
      </el-col>
      <el-col :md="5">
        <Filters
          v-model="filterDate"
          :fa-icon="['far', 'calendar-alt']"
          header="Dates"
          :values="dateFilters"
          :button-width="170"
        ></Filters>
      </el-col>
      <el-col :md="3">
        <span class="total">
          <label class="hidden-md-and-up">Total:&nbsp;</label>
          {{ filtered.length }}
        </span>
      </el-col>
    </el-row>
    <label v-if="!showSummary" class="no-filters-instruction">
      <i class="el-icon-warning-outline"></i>
      There is a total of
      <strong>{{ filtered.length }}</strong>
      cases across New Zealand. Use the filters above to find out more!
    </label>
    <div v-if="showSummary">
      <CaseActions @save="saveToDashboard"></CaseActions>
      <CaseTable
        v-if="showSummary"
        :records="filtered"
        class="summary"
      ></CaseTable>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import fetchCasesPageMixin from '@/mixins/fetch-cases-page'

const Filters = () =>
  import(/* webpackChunkName: 'components-filters' */ '../components/Filters')
const CaseTable = () =>
  import(
    /* webpackChunkName: 'components-case-table' */ '../components/CaseTable'
  )
const CaseActions = () =>
  import(
    /* webpackChunkName: 'components-case-actions' */ '../components/CaseActions'
  )

export default {
  components: {
    CaseTable,
    CaseActions,
    Filters,
  },
  mixins: [fetchCasesPageMixin],
  data() {
    return {
      filterLoc: null,
      filterAge: null,
      filterGender: null,
      filterDate: null,
    }
  },
  computed: {
    ...mapGetters('Cases', ['allCases', 'filteredCases']),
    filtered() {
      return this.filteredCases({
        age: this.filterAge,
        date: this.filterDate,
        gender: this.filterGender,
        location: this.filterLoc,
      })
    },
    locationFilters() {
      return this.filtered.map(x => x.location).sort()
    },
    ageFilters() {
      return this.filtered.map(x => x.age).sort()
    },
    genderFilters() {
      return this.filtered.map(x => x.gender).sort()
    },
    dateFilters() {
      return this.filtered
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
    ...mapActions('Cases', ['fetchCases']),
    ...mapMutations('Dashboard', ['setTile']),
    saveToDashboard(index) {
      this.setTile({
        index,
        filters: {
          age: this.filterAge,
          location: this.filterLoc,
          gender: this.filterGender,
          date: this.filterDate,
        },
      })
      this.$nextTick(() => {
        this.$router.push('/')
      })
    },
  },
}
</script>

<style scoped lang="scss">
.no-filters-instruction {
  display: block;
  text-align: center;
  padding: 10px;
}
.filters {
  .total {
    display: flex;
    background: $primaryColor;
    color: #fff;
    padding: 9px 0;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  }
}

.filter-wrapper {
  margin-bottom: 5px;
}
.summary {
  margin-top: 5px;
}
</style>
