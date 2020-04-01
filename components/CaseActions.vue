<template>
  <div>
    <el-row class="action-buttons">
      <el-col :md="8"></el-col>
      <el-col :md="8">
        <a href="" class="action-btn save" @click.prevent="showDialog = true">
          <i class="el-icon-star-off"></i>
          Save to Dashboard
        </a>
      </el-col>
      <el-col :md="8">
        <el-row>
          <el-col :span="12">
            <a
              target="_blank"
              :href="`https://www.twitter.com/share?url=${shareUrl}`"
              class="action-btn twitter"
            >
              <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
              Twitter
            </a>
          </el-col>
          <el-col :span="12">
            <a
              target="_blank"
              :href="`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`"
              class="action-btn facebook"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook']"
              ></font-awesome-icon>
              Facebook
            </a>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog
      :visible.sync="showDialog"
      fullscreen
      title="Save to Dashboard"
      class="save-dialog"
    >
      <div class="wrapper">
        <div class="tile" @click="$emit('save', 0)">
          <el-card :body-style="cardTileCss">
            <span class="index">1</span>
          </el-card>
        </div>
        <div class="tile" @click="$emit('save', 1)">
          <el-card :body-style="cardTileCss">
            <span class="index">2</span>
          </el-card>
        </div>
        <div class="tile" @click="$emit('save', 2)">
          <el-card :body-style="cardTileCss">
            <span class="index">3</span>
          </el-card>
        </div>
        <div class="tile" @click="$emit('save', 3)">
          <el-card :body-style="cardTileCss">
            <span class="index">4</span>
          </el-card>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shareUrl: document.location.href,
      showDialog: false,
      cardTileCss: { height: '100%' },
    }
  },
}
</script>

<style lang="scss" scoped>
.action-buttons {
  .el-col {
    text-align: center;
    padding: 5px;
    .action-btn {
      color: $primaryColor;
      text-align: center;
      width: 100%;
    }
  }
}

.save-dialog {
  .wrapper {
    height: 80vh;
    display: flex;
    flex-wrap: wrap;
    margin: -20px auto 0 auto;
    max-width: $contentWidth;

    .tile {
      width: 50%;
      height: 50%;
      padding: 5px;
      opacity: 0.4;
      &:hover {
        border: 4px solid $primaryColor;
        opacity: 1;
      }

      .el-card {
        height: 100%;
        font-size: 6rem;
        color: $primaryColor;
        cursor: pointer;

        .index {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>
