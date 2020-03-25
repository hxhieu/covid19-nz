<template>
  <div id="main-container">
    <h1 class="header">
      <nuxt-link to="/"><i class="el-icon-s-home"></i></nuxt-link>
      <nuxt-link class="header-text" to="/">COVID-19 NZ Update</nuxt-link>
      <nuxt-link to="/about"><i class="el-icon-info"></i></nuxt-link>
    </h1>
    <nuxt id="content" />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 20px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: $primaryColor;
  overflow-y: scroll;

  @media only screen and (max-width: 570px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 320px) {
    font-size: 10px;
  }

  #main-container {
    padding: 20px;

    @media only screen and (max-width: 570px) {
      padding: 10px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        color: $primaryColor;
        text-decoration: none;
        i {
          font-size: 1.5em;
        }
      }
    }

    #content {
      padding: 20px 0;
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
