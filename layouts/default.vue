<template>
  <div id="main-container">
    <h1 id="main-header">
      <nuxt-link to="/cases"><i class="el-icon-s-unfold"></i></nuxt-link>
      <nuxt-link class="header-text" to="/">
        COVID-19 NZ Update
      </nuxt-link>
      <nuxt-link to="/about"><i class="el-icon-chat-line-round"></i></nuxt-link>
    </h1>
    <nuxt id="main-content" />
  </div>
</template>

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
  color: #444;
  height: 100%;
  overflow: auto;

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.25rem;
    margin: 10px 0;
  }

  .el-dialog__header {
    text-align: center;

    .el-dialog__close,
    .el-dialog__title {
      font-weight: 700;
      color: $primaryColor;
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: $breakpoint-md) {
    font-size: 12px;
  }

  @media only screen and (max-width: $breakpoint-sm) {
    font-size: 10px;
  }

  #main-container {
    @media only screen and (max-width: $breakpoint-md) {
      padding: 10px;
    }

    #main-header {
      height: $headerHeight;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        color: $primaryColor;
        text-decoration: none;
        i {
          font-size: 1.25em;
        }
      }
      @media only screen and (max-width: $breakpoint-md) {
        margin: 0;
      }
    }

    #main-content {
      max-width: $contentWidth;
      padding: 0 20px 20px 20px;
      margin: 0 auto;
      @media only screen and (max-width: $breakpoint-md) {
        padding: 5px;
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
