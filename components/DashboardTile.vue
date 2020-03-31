<template>
  <div v-loading="loading" class="dashboard-tile">
    <el-card :body-style="cardTileCss">
      <nuxt-link :to="navLink" class="empty">
        <span class="bg" :style="{ background: bg }"></span>
        <i :class="emptyIcon"></i>
      </nuxt-link>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    emptyIcon: {
      type: String,
      default() {
        return 'el-icon-plus'
      },
    },
    navLink: {
      type: String,
      default() {
        return '/'
      },
    },
    bgImg: {
      type: String,
      default() {
        return ''
      },
    },
    bgPosition: {
      type: String,
      default() {
        return ''
      },
    },
    busy: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      cardTileCss: { height: '100%', padding: 0 },
    }
  },
  computed: {
    loading() {
      return this.busy
    },
    bg() {
      return `url("${this.bgImg}") no-repeat ${this.bgPosition}`
    },
  },
}
</script>

<style lang="scss" scoped>
.dashboard-tile {
  height: 50%;
  width: 50%;
  padding: 5px;

  .el-card {
    height: 100%;
    a {
      text-decoration: none;
    }
    .empty {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
      position: relative;
      i {
        font-size: 6rem;
        color: $primaryColor;
        opacity: 0.5;
      }
      .bg {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0.2;
      }
    }

    &:hover {
      border: 6px solid $primaryColor;
      .empty {
        i {
          opacity: 1;
        }
      }
    }
  }
}
</style>
