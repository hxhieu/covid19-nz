<template>
  <div id="disclaimer">
    <h2 class="header">
      <icon :fa-icon="['fas', 'exclamation-triangle']"></icon>
      Disclaimer
    </h2>
    <p>
      The data is provided and copyrighted by the
      <a
        target="_blank"
        href="https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-situation/covid-19-current-cases/covid-19-current-cases-details"
      >
        NZ Ministry of Health
        <icon :fa-icon="['fas', 'external-link-alt']"></icon>
      </a>
    </p>
    <p>
      The COVID-19 Board just provides another view on top of the original data.
    </p>
    <p>
      The COVID-19 Board will try to be up-to-date with latest data from the
      ministry but there might be a delay.
    </p>
    <p>
      The cool NZ outline map is from
      <a
        target="_blank"
        href="https://www.worldatlas.com/webimage/countrys/oceania/outline/nzout.htm"
      >
        worldatlas.com
        <icon :fa-icon="['fas', 'external-link-alt']"></icon>
      </a>
    </p>
    <div class="button">
      <el-button type="primary" @click="$emit('accept')">
        I Understand
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#disclaimer {
  padding: 0.5rem 2rem 0 2rem;
  background: $backgroundDarker;
  color: $foregroundColor;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border: 2px dashed orange;
  z-index: 1000;

  .header {
    svg {
      margin-right: 5px;
      color: orange;
    }
  }

  .button {
    text-align: center;
    margin: 1.5rem;
    .el-button {
      font-weight: 700;
      color: $backgroundColor;
      font-size: 1.25rem;
      padding: 1rem 2rem;
    }
  }
}
</style>
