<template>
  <div class="dashboard-tile">
    <el-card :body-style="cardTileCss" :class="{ 'is-empty': !tileDetails }">
      <i v-if="loading" class="loading el-icon-loading"></i>
      <div v-else class="content">
        <div v-if="tileDetails" class="details">
          <icon
            class="tile-action top left refresh"
            icon="el-icon-refresh-right"
            @click.native="refreshTile"
          ></icon>
          <icon
            class="tile-action top right delete"
            icon="el-icon-close"
            @click.native="deleteTile"
          ></icon>
          <icon
            class="tile-action bottom right goto"
            icon="el-icon-right"
            @click.native="gotoListing"
          ></icon>
          <div class="tile-info">
            <div v-if="tileDetails.location" class="tile-text location">
              <icon :fa-icon="['fas', 'map-marked-alt']"></icon>
              {{ tileDetails.location }}
            </div>
            <div v-if="tileDetails.age" class="tile-text age">
              <icon :fa-icon="['fas', 'user']"></icon>
              {{ tileDetails.age }}
            </div>
            <div v-if="tileDetails.gender" class="tile-text gender">
              <icon :fa-icon="['fas', 'venus-mars']"></icon>
              {{ tileDetails.gender }}
            </div>
            <div v-if="tileDetails.date" class="tile-text date">
              <icon :fa-icon="['fas', 'calendar-alt']"></icon>
              {{ tileDetails.date }}
            </div>
            <div class="tile-text count">
              {{ tileDetails.count }}
            </div>
          </div>
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
      return this.tileDetails && this.busy
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
    refreshTile() {
      this.$emit('refresh')
    },
    gotoListing() {
      this.$emit('goto')
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

  @media only screen and (max-width: $breakpoint-md) {
    padding: 2px;
  }

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
    &.is-empty {
      opacity: 0.4;
    }
    &:hover {
      opacity: 1;
    }
    .content {
      height: 100%;
      .details {
        height: 100%;
        position: relative;
        padding: 2rem 1rem;

        .tile-action {
          cursor: pointer;
          position: absolute;
          color: $primaryColor;
          font-size: 2rem;
          opacity: 0.7;

          &:hover {
            opacity: 1;
          }

          &.top {
            top: 0.15rem;
          }

          &.bottom {
            bottom: 0.15rem;
          }

          &.left {
            left: 0.15rem;
          }

          &.right {
            right: 0.15rem;
          }
        }

        .tile-text {
          font-weight: 700;
          font-size: 1.5rem;

          svg {
            width: 2rem;
          }

          &.location {
            svg {
              color: green;
            }
          }

          &.age {
            svg {
              color: purple;
            }
          }

          &.gender {
            svg {
              color: pink;
            }
          }

          &.date {
            svg {
              color: gray;
            }
          }

          &.count {
            position: absolute;
            color: salmon;
            font-size: 4rem;
            line-height: 4rem;
            bottom: 2rem;
            right: 2rem;
            border-right: 2px solid salmon;
            border-bottom: 2px solid salmon;
            padding: 1rem;
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
