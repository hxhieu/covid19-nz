<template>
  <div class="dashboard">
    <!-- <div class="summary"><el-card></el-card></div> -->
    <div class="favs">
      <DashboardTile
        :nav-link="navLink"
        bg-img="img/nz-11.png"
        bg-position="bottom right"
        :tile="tile11"
        :busy="fetchBusy"
        @delete="clearTile(0)"
      ></DashboardTile>
      <DashboardTile
        :nav-link="navLink"
        bg-img="img/nz-12.png"
        bg-position="bottom left"
        :tile="tile12"
        :busy="fetchBusy"
        @delete="clearTile(1)"
      ></DashboardTile>
      <DashboardTile
        :nav-link="navLink"
        bg-img="img/nz-21.png"
        bg-position="top right"
        :tile="tile21"
        :busy="fetchBusy"
        @delete="clearTile(2)"
      ></DashboardTile>
      <DashboardTile
        :nav-link="navLink"
        bg-img="img/nz-22.png"
        bg-position="top left"
        :tile="tile22"
        :busy="fetchBusy"
        @delete="clearTile(3)"
      ></DashboardTile>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import fetchCasesPageMixin from '@/mixins/fetch-cases-page'

const DashboardTile = () =>
  import(
    /* webpackChunkName: 'components-dashboard-tile' */ '../components/DashboardTile'
  )

export default {
  components: {
    DashboardTile,
  },
  mixins: [fetchCasesPageMixin],
  data() {
    return {
      emptyIcon: 'el-icon-plus',
      navLink: '/cases',
    }
  },
  computed: {
    ...mapGetters('Cases', ['filteredCases']),
    ...mapGetters('Dashboard', ['getTile']),
    tile11() {
      return this.tileDetails(0)
    },
    tile12() {
      return this.tileDetails(1)
    },
    tile21() {
      return this.tileDetails(2)
    },
    tile22() {
      return this.tileDetails(3)
    },
  },
  created() {
    this.fetchCases()
    this.tileDetails = index => {
      const filters = this.getTile(index)
      if (!filters) return null
      const data = this.filteredCases(filters)
      return {
        ...filters,
        count: data.length,
      }
    }
  },
  methods: {
    ...mapActions('Cases', ['fetchCases']),
    ...mapActions('Dashboard', ['clearTile']),
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  height: calc(100% - #{$headerHeight});
  .summary {
    padding: 5px;
    height: 100px;
    .el-card {
      height: 100%;
    }
  }
  .favs {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
