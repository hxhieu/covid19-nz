<template>
  <div class="dashboard">
    <!-- <div class="summary"><el-card></el-card></div> -->
    <div class="favs">
      <DashboardTile
        :nav-link="navLink"
        bg-img="img/nz-11.png"
        bg-position="bottom right"
      ></DashboardTile>
      <DashboardTile
        :nav-link="navLink"
        bg-img="img/nz-12.png"
        bg-position="bottom left"
      ></DashboardTile>
      <DashboardTile
        :nav-link="navLink"
        bg-img="img/nz-21.png"
        bg-position="top right"
      ></DashboardTile>
      <DashboardTile
        :nav-link="navLink"
        bg-img="img/nz-22.png"
        bg-position="top left"
      ></DashboardTile>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

const DashboardTile = () =>
  import(
    /* webpackChunkName: 'components-dashboard-tile' */ '../components/DashboardTile'
  )

export default {
  components: {
    DashboardTile,
  },
  data() {
    return {
      emptyIcon: 'el-icon-plus',
      navLink: '/cases',
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  },
  created() {
    this.fetchCases()
  },
  methods: {
    ...mapActions('Cases', ['fetchCases']),
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
