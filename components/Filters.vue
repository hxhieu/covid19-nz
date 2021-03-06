<template>
  <div class="filter-wrapper">
    <span
      class="filter-badge"
      :class="{ 'has-filter': filter !== allKey }"
      @click="setFilter"
    >
      <icon :fa-icon="faIcon" :icon="icon"></icon>
      <span class="value">
        {{ filter === allKey ? `${allKey} ${header}` : filter }}
      </span>
      <i v-if="filter !== allKey" class="el-icon-close"></i>
      <i v-else class="el-icon-plus"></i>
    </span>
    <el-dialog
      class="filters-container"
      :visible.sync="showDialog"
      fullscreen
      :title="header"
    >
      <el-radio-group v-model="filter" class="filters">
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
    </el-dialog>
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
    faIcon: {
      type: Array,
      default() {
        return null
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
      showDialog: false,
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
    selectionWidth() {
      return this.buttonWidth
    },
  },
  watch: {
    filter(val, oldVal) {
      this.$emit('input', this.filter === this.allKey ? null : this.filter)
      this.showDialog = false
    },
    value: {
      handler(val) {
        this.filter = val || this.allKey
      },
      immediate: true,
    },
  },
  methods: {
    setFilter() {
      if (this.filter === this.allKey) {
        this.showDialog = true
      } else {
        this.filter = this.allKey
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin count-badge {
  display: inline-block;
  background: $primaryColor;
  border-radius: 4px;
  color: $backgroundColor;
  text-align: center;
  font-weight: 700;
}

.filter-wrapper {
  .filter-badge {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    color: $primaryColor;
    border: 1px solid $primaryColor;
    padding: 8px 15px;
    cursor: pointer;

    &:hover {
      background: $primaryColor;
      color: $backgroundColor;
    }

    &.has-filter {
      font-weight: 700;
      background: $primaryColor;
      color: $backgroundColor;
    }
  }

  .filters-container {
    text-align: center;

    .filters {
      max-width: $contentWidth;
      margin: -20px auto 0 auto;
      [role='radio'] {
        text-align: initial;
        margin: 0 0 5px 5px !important;
        border-color: $backgroundDarker;
        color: $foregroundColor !important;
        background: lighten($backgroundColor, 5);
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

        @media only screen and (max-width: $breakpoint-md) {
          margin: 0 0 5px 0 !important;
          width: 100% !important;
        }
      }
    }
  }
}
</style>
