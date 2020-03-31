<template>
  <el-row>
    <el-col :sx="24" :sm="8">
      <a href="" class="action-btn save">
        <i class="el-icon-star-off"></i>
        Save the result
      </a>
    </el-col>
    <el-col :xs="12" :sm="8">
      <a
        target="_blank"
        :href="`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`"
        class="action-btn facebook"
      >
        <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon>
        Share on Facebook
      </a>
    </el-col>
    <el-col :xs="12" :sm="8">
      <a
        target="_blank"
        :href="`https://www.twitter.com/share?url=${shareUrl}`"
        class="action-btn twitter"
      >
        <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
        Share on Twitter
      </a>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      shareUrl: document.location.href,
    }
  },
}
</script>

<style lang="scss" scoped></style>
