<template>
  <el-card class="case-item">
    <el-row>
      <el-col :md="2" class="number">
        <i class="el-icon-copy-document"></i>
        {{ item.caseNo }}
      </el-col>
      <el-col :md="5" class="location">
        <i class="el-icon-map-location"></i>
        <a href="#">{{ item.location }}</a>
      </el-col>
      <el-col :md="3" class="age-group">
        <i class="el-icon-user"></i>
        <a href="#">{{ item.age }}</a>
        <a href="#">
          <i v-if="item.gender === 'M'" class="el-icon-male"></i>
          <i v-else class="el-icon-female"></i>
        </a>
      </el-col>
      <el-col :md="14" class="details">
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
