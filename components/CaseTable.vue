<template>
  <div class="case-table">
    <CaseItem v-for="item in data" :key="item.caseNo" :record="item"></CaseItem>
  </div>
</template>

<script>
const CaseItem = () =>
  import(/* webpackChunkName: 'components-case-item' */ './CaseItem')

export default {
  components: {
    CaseItem,
  },
  props: {
    records: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    data() {
      return this.records
    },
  },
}
</script>
