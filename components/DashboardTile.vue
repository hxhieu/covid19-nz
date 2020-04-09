<template>
  <div class="dashboard-tile">
    <el-card :body-style="cardTileCss" :class="{ 'is-empty': !tileDetails }">
      <i v-if="loading" class="loading el-icon-loading"></i>
      <div v-else class="content">
        <div v-if="tileDetails" class="details">
          <icon
            class="tile-action bottom left refresh"
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

  @media only screen and (max-width: $breakpoint-sm) {
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
        @media only screen and (max-width: $breakpoint-sm) and (min-width: $breakpoint-xs) {
          font-size: 14px;
          padding: 1em;
        }
        @media only screen and (max-width: $breakpoint-xs) {
          font-size: 12px;
          padding: 1em;
        }
        height: 100%;
        position: relative;
        padding: 2em;
        background: #f0f0f0;

        .tile-action {
          cursor: pointer;
          position: absolute;
          color: $palette4;
          font-size: 2em;
          opacity: 0.7;

          &:hover {
            opacity: 1;
          }

          &.top {
            top: 0.15em;
          }

          &.bottom {
            bottom: 0.15em;
          }

          &.left {
            left: 0.15em;
          }

          &.right {
            right: 0.15em;
          }
        }

        .tile-text {
          font-weight: 700;
          font-size: 1.5em;

          svg {
            width: 1em;
          }

          &.location {
            svg {
              color: $palette4;
            }
          }

          &.age {
            svg {
              color: $palette3;
            }
          }

          &.gender {
            svg {
              color: $palette2;
            }
          }

          &.date {
            svg {
              color: $palette1;
            }
          }

          &.count {
            position: absolute;
            color: $palette2;
            font-size: 5em;
            line-height: 1em;
            bottom: 0.5em;
            right: 0.3em;
            border-right: 2px solid $palette2;
            border-bottom: 2px solid $palette2;
            padding: 0.1em;
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
