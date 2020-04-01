<template>
  <div id="nav">
    <div v-for="(item, idx) in menuItems" :key="idx" class="nav-item">
      <icon :icon="item.icon" :fa-icon="item.faIcon"></icon>
      <a href="" @click.prevent="goto(idx)">
        {{ item.text }}
      </a>
    </div>
    <div class="nav-item">
      <icon :fa-icon="['fas', 'times-circle']"></icon>
      <a href="" @click.prevent="$emit('close')">
        Close
      </a>
      &nbsp;(ESC)
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      showMenu: false,
    }
  },
  computed: {
    menuItems() {
      return this.items
    },
  },
  methods: {
    goto(index) {
      this.$emit('close')
      this.$nextTick(() => {
        this.$router.push({ path: this.menuItems[index].path })
      })
    },
  },
}
</script>

<style lang="scss">
#nav {
  max-width: 320px;
  margin: 0 auto;
  .nav-item {
    display: flex;
    align-items: center;
    color: $primaryColor;
    font-size: 1.5em;
    svg {
      font-size: 1.2em !important;
      margin-right: 10px;
    }
    a {
      padding: 0;
      margin: 0;
    }
  }
}
</style>
