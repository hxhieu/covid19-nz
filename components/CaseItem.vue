<template>
  <el-card class="case-item">
    <el-row>
      <el-col :md="4" :xs="24" :sm="24" class="date">
        <icon icon="el-icon-date"></icon>
        {{ item.date }}
      </el-col>
      <el-col :md="5" :xs="14" :sm="14" class="location">
        <icon icon="el-icon-map-location"></icon>
        {{ item.location }}
      </el-col>
      <el-col :md="4" :xs="10" :sm="10" class="age-group">
        <icon icon="el-icon-user"></icon>
        {{ item.age }}
        <span v-if="item.gender === 'Male'">M</span>
        <span v-if="item.gender === 'Female'">F</span>
      </el-col>
      <el-col :md="11" class="details">
        <el-tooltip effect="dark" :content="item.details" placement="top">
          <i class="el-icon-info"></i>
        </el-tooltip>
        <span>{{ item.details }}</span>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: {
    record: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    item() {
      return this.record
    },
  },
}
</script>

<style lang="scss">
.el-tooltip__popper {
  font-size: 1rem;
}
.case-item {
  margin-bottom: 5px;
  a,
  i,
  svg {
    color: $primaryColor;
  }
  &:hover {
    background: $primaryColor;
    color: #fff;
    a,
    i,
    svg {
      color: #fff;
    }
  }
  @media only screen and (max-width: $breakpoint-md) {
    i {
      font-size: 1.5em;
    }
  }
  .el-card__body {
    padding: 8px 16px;
    .age-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
    }
    .details {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      .el-tooltip {
        cursor: help;
      }
    }
  }
}
</style>
