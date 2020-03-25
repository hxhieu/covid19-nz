import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })

export default () => {
  Vue.component('el-button', () =>
    import(/* webpackChunkName: 'element-ui-button' */ 'element-ui/lib/button')
  )
  Vue.component('el-table', () =>
    import(/* webpackChunkName: 'element-ui-table' */ 'element-ui/lib/table')
  )
  Vue.component('el-table-column', () =>
    import(
      /* webpackChunkName: 'element-ui-table' */ 'element-ui/lib/table-column'
    )
  )
  Vue.component('el-col', () =>
    import(/* webpackChunkName: 'element-ui-col' */ 'element-ui/lib/col')
  )
  Vue.component('el-row', () =>
    import(/* webpackChunkName: 'element-ui-row' */ 'element-ui/lib/row')
  )
  Vue.component('el-card', () =>
    import(/* webpackChunkName: 'element-ui-card' */ 'element-ui/lib/card')
  )
  Vue.component('el-tooltip', () =>
    import(
      /* webpackChunkName: 'element-ui-tooltip' */ 'element-ui/lib/tooltip'
    )
  )
}

const styles = [
  './node_modules/element-ui/packages/theme-chalk/src/base.scss',
  './node_modules/element-ui/packages/theme-chalk/src/button.scss',
  './node_modules/element-ui/packages/theme-chalk/src/table.scss',
  './node_modules/element-ui/packages/theme-chalk/src/col.scss',
  './node_modules/element-ui/packages/theme-chalk/src/row.scss',
  './node_modules/element-ui/packages/theme-chalk/src/card.scss',
  './node_modules/element-ui/packages/theme-chalk/src/tooltip.scss',
]

export { styles }
