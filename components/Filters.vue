<template>
  <div class="filters-container">
    <h3 class="header" @click="showFilters = !showFilters">
      <span>
        <i :class="allIcon"></i>
        <span class="filter-info">
          {{ filter }}
          <span class="filter-count">
            {{ filters[filter] }}
          </span>
        </span>
      </span>
      <i
        :class="showFilters ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"
      ></i>
    </h3>
    <transition name="filter-list">
      <el-radio-group v-if="showFilters" v-model="filter" class="filters">
        <el-radio
          v-for="(val, key) in filters"
          :key="key"
          :label="key"
          border
          :style="{ width: `${selectionWidth}px` }"
        >
          <span>{{ key }}</span>
          <span v-if="key !== allKey" class="count">{{ val }}</span>
        </el-radio>
      </el-radio-group>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    buttonWidth: {
      type: Number,
      default() {
        return 180
      },
    },
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
    const allKey = 'All'
    return {
      allKey,
      filter: allKey,
      showFilters: false,
    }
  },
  computed: {
    filters() {
      const result = {
        All: this.values.length,
      }
      const sorted = [...this.values].sort()

      sorted.forEach(val => {
        result[val] = (result[val] || 0) + 1
      })
      return result
    },
    allIcon() {
      return this.icon
    },
    selectionWidth() {
      return this.buttonWidth
    },
  },
  watch: {
    filter(val) {
      this.$emit('input', this.filter)
    },
    value: {
      handler(val) {
        this.filter = val || this.allKey
      },
      immediate: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin count-badge {
  display: inline-block;
  background: $primaryColor;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-weight: 700;
}

.filter-list-enter,
.filter-list-leave-to {
  visibility: hidden;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
}

.filter-list-enter-active {
  transition: all 1s;
}

.filters-container {
  border: 1px solid #eee;
  margin-bottom: 10px;
  border-radius: 4px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: 300;
    padding: 10px 20px;
    i {
      color: $primaryColor;
    }

    .filter-info {
      .filter-count {
        @include count-badge;
        padding: 0 10px;
        font-size: 0.8em;
        margin-left: 6px;
      }
    }
  }

  .filters {
    padding: 0 20px 10px 20px;
  }

  [role='radio'] {
    margin: 0 0 5px 5px !important;
    .el-radio__label {
      display: inline-block;
      position: relative;
      .count {
        @include count-badge;
        padding: 2px 6px;
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }

    &.is-active {
      .count {
        background: #fff;
        color: $primaryColor;
      }
    }

    .item-text {
      display: inline-block;
      & > div {
        padding-right: 10px;
        display: flex;
        justify-content: space-between;
      }
    }

    @media only screen and (max-width: $breakpoint-md) {
      margin: 0 0 5px 0 !important;
      width: 100% !important;
    }
  }
}
</style>
