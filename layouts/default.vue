<template>
  <div id="main-container">
    <h1 id="main-header">
      <a href="" @click.prevent="showMenu = true">
        <i class="el-icon-s-unfold"></i>
      </a>
      <nuxt-link class="header-text" to="/">
        <icon class="home-icon" icon="el-icon-s-home"></icon>
        COVID-19 Board
      </nuxt-link>
      <nuxt-link to="/about"><i class="el-icon-chat-line-round"></i></nuxt-link>
    </h1>
    <nuxt id="main-content" />
    <Disclaimer
      v-if="!termsAccepted"
      @accept="setAcceptTerms(true)"
    ></Disclaimer>
    <el-dialog fullscreen :visible.sync="showMenu" title="Menu">
      <NavMenu :items="menuItems" @close="showMenu = false"></NavMenu>
    </el-dialog>
    <div class="copy">
      Copyright &copy; {{ now }}
      <span class="copy-separator">|</span>
      <nuxt-link to="/disclaimer">Disclaimer</nuxt-link>
    </div>
    <FirebaseAnalytics />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

const Disclaimer = () =>
  import(
    /* webpackChunkName: 'components-disclaimer' */ '../components/Disclaimer'
  )

const NavMenu = () =>
  import(/* webpackChunkName: 'components-nav-menu' */ '../components/NavMenu')
const FirebaseAnalytics = () =>
  import(
    /* webpackChunkName: 'components-firebase-analytics' */ '../components/FirebaseAnalytics'
  )

export default {
  components: {
    Disclaimer,
    NavMenu,
    FirebaseAnalytics,
  },
  data() {
    return {
      now: new Date().getFullYear(),
      showMenu: false,
      menuItems: [
        {
          text: 'Dashboard',
          faIcon: ['fas', 'th-large'],
          path: '/',
        },
        {
          text: 'Cases',
          faIcon: ['fas', 'th-list'],
          path: '/cases',
        },
        {
          text: 'About',
          faIcon: ['fas', 'question-circle'],
          path: '/about',
        },
      ],
    }
  },
  computed: {
    ...mapState('Dashboard', ['termsAccepted']),
  },
  methods: {
    ...mapMutations('Dashboard', ['setAcceptTerms']),
  },
}
</script>

<style lang="scss">
html,
body,
#__nuxt,
#__layout,
#main-container {
  font-family: 'Titillium Web', sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-y: scroll;
  color: $foregroundColor;
  background: $backgroundColor;
  height: 100%;
  overflow: auto;

  .copy {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    font-weight: 700;
    color: $primaryColor;
    padding: 3px 0 7px 0;
    background: $backgroundColor;

    .copy-separator {
      color: $palette2;
    }
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.25rem;
    margin: 10px 0;
  }

  .custom-notification {
    .el-notification__content {
      text-align: initial;
    }

    &.centre {
      left: 10px;
      right: 10px;
      top: 5px !important;
      width: calc(100% - 20px);
    }
  }

  .el-dialog {
    background: $backgroundColor;
    color: $foregroundColor;
    .el-dialog__header {
      text-align: center;

      .el-dialog__close,
      .el-dialog__title {
        font-weight: 700;
        color: $primaryColor;
        font-size: 1.5rem;
      }
    }
  }

  @media only screen and (max-width: $breakpoint-xs) {
    font-size: 16px;
  }

  #main-container {
    a {
      color: $primaryColor;
    }

    #main-header {
      height: $headerHeight;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.5rem;
      a {
        text-decoration: none;
        .home-icon {
          font-size: 1.25em;
          margin-right: 5px;
        }
      }
    }

    #main-content {
      max-width: $contentWidth;
      padding: 0 20px 35px 20px;
      margin: 0 auto;
      @media only screen and (max-width: $breakpoint-md) {
        padding: 0 10px 35px 10px;
      }
    }
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
