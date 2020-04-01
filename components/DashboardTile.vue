<template>
  <div class="dashboard-tile">
    <el-card :body-style="cardTileCss">
      <i v-if="loading" class="loading el-icon-loading"></i>
      <div v-else class="content">
        <div v-if="tileDetails" class="details">
          <icon
            class="delete"
            icon="el-icon-close"
            @click.native="deleteTile"
          ></icon>
          {{ tileDetails.count }}
        </div>
        <nuxt-link v-else :to="navLink" class="empty">
          <span class="bg" :style="{ background: bg }"></span>
          <i :class="emptyIcon"></i>
        </nuxt-link>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    tile: {
      type: Object,
      default() {
        return null
      },
    },
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
    tileDetails() {
      return this.tile
    },
  },
  methods: {
    deleteTile() {
      this.$emit('delete')
    },
  },
}
</script>

<style lang="scss" scoped>
.dashboard-tile {
  height: 50%;
  width: 50%;
  padding: 5px;
  position: relative;

  .loading {
    font-size: 4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -2rem;
    margin-left: -2rem;
    color: $primaryColor;
  }

  .el-card {
    height: 100%;
    .content {
      height: 100%;
      .details {
        position: relative;

        .delete {
          cursor: pointer;
          position: absolute;
          color: $primaryColor;
          font-size: 2rem;
          right: 0.15rem;
          top: 0.15rem;
          opacity: 0.5;
          &:hover {
            opacity: 1;
          }
        }
      }
      .empty {
        text-decoration: none;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
        i {
          font-size: 6rem;
          color: $primaryColor;
          opacity: 0;
        }
        .bg {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          opacity: 0.2;
        }

        &:hover {
          border: 6px solid $primaryColor;
          i {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
