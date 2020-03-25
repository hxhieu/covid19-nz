<template>
  <div id="main-container">
    <h1 class="header">
      <nuxt-link to="/"><i class="el-icon-notebook-2"></i></nuxt-link>
      <nuxt-link class="header-text" to="/">COVID-19 NZ Update</nuxt-link>
      <nuxt-link to="/about"><i class="el-icon-chat-line-round"></i></nuxt-link>
    </h1>
    <nuxt id="content" />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-y: scroll;

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.25rem;
    margin: 10px 0;
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

    .header {
      padding: 20px;
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
    }

    #content {
      max-width: 1024px;
      margin: 0 auto;
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
