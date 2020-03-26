<template>
  <div class="filters">
    <h3 class="header">{{ header }}</h3>
    <el-radio-group
      v-model="filter"
      class="hidden-sm-and-down filters"
      size="small"
    >
      <el-radio label="all" border>
        <i :class="allIcon"></i>
        All
      </el-radio>
      <el-radio v-for="(val, key) in filters" :key="key" :label="key" border>
        <div class="item-text">
          <div>
            <span>{{ key }}</span>
            <span class="count">{{ val }}</span>
          </div>
        </div>
      </el-radio>
    </el-radio-group>
    <!-- <el-select v-model="filter" filterable>
    <el-option key="ALL" label="<ALL>" value="all"></el-option>
    <el-option
      v-for="val in filters"
      :key="val"
      :label="val"
      :value="val"
    ></el-option>
  </el-select> -->
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default() {
        return 'el-icon-s-grid'
      },
    },
    header: {
      type: String,
      default() {
        return 'Filter By'
      },
    },
    value: {
      type: String,
      default() {
        return null
      },
    },
    values: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      filter: 'all',
    }
  },
  computed: {
    filters() {
      const result = {}
      this.values.forEach(val => {
        result[val] = (result[val] || 0) + 1
      })
      return result
    },
    allIcon() {
      return this.icon
    },
  },
}
</script>

<style lang="scss" scoped>
.filters {
  .header {
    margin: 0;
  }
  [role='radio'] {
    margin: 0 0 5px 5px !important;
    width: 150px;
    .count {
      background: $primaryColor;
      padding: 1px 7px;
      border-radius: 5px;
      color: #fff;
    }

    &.is-active {
      .count {
        background: #fff;
        color: $primaryColor;
      }
    }

    .item-text {
      display: inline-block;
      width: 110px;
      & > div {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
