<template>
  <el-card class="case-item">
    <el-row>
      <el-col :md="4" :xs="8" :sm="8" class="date">
        <i class="el-icon-date"></i>
        {{ item.date }}
      </el-col>
      <el-col :md="5" :xs="8" :sm="8" class="location">
        <i class="el-icon-map-location"></i>
        {{ item.location }}
      </el-col>
      <el-col :md="4" :xs="8" :sm="8" class="age-group">
        <i class="el-icon-user"></i>
        {{ item.age }}
        <i v-if="item.gender === 'Male'" class="el-icon-male"></i>
        <i v-if="item.gender === 'Female'" class="el-icon-female"></i>
        <i v-if="item.gender === 'Unknown'" class="el-icon-question"></i>
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
  i {
    color: $primaryColor;
  }
  &:hover {
    background: $primaryColor;
    color: #fff;
    a,
    i {
      color: #fff;
    }
  }
  @media only screen and (max-width: $breakpoint-md) {
    i {
      font-size: 1.5em;
    }
  }
  .el-card__body {
    padding: 10px 20px;
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
