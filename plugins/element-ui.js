import Vue from 'vue'

export default () => {
  Vue.component('el-button', () =>
    import(/* webpackChunkName: 'element-ui-button' */ 'element-ui/lib/button')
  )
}
