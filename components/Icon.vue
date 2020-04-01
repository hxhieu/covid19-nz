<template>
  <font-awesome-icon v-if="fontAwesome" :icon="fontAwesome"></font-awesome-icon>
  <i v-else :class="elementUi"></i>
</template>

<script>
export default {
  props: {
    faIcon: {
      type: Array,
      default() {
        return null
      },
    },
    icon: {
      type: String,
      default() {
        return 'el-icon-question'
      },
    },
  },
  computed: {
    elementUi() {
      return this.icon
    },
    fontAwesome() {
      return this.faIcon
    },
  },
}
</script>
