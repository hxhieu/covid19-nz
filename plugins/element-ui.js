import Vue from 'vue'

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)

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
  Vue.component('el-radio-group', () =>
    import(
      /* webpackChunkName: 'element-ui-radio-group' */ 'element-ui/lib/radio-group'
    )
  )
  Vue.component('el-radio-button', () =>
    import(
      /* webpackChunkName: 'element-ui-radio-button' */ 'element-ui/lib/radio-button'
    )
  )
  Vue.component('el-radio', () =>
    import(/* webpackChunkName: 'element-ui-radio' */ 'element-ui/lib/radio')
  )
  Vue.component('el-select', () =>
    import(/* webpackChunkName: 'element-ui-select' */ 'element-ui/lib/select')
  )
  Vue.component('el-option', () =>
    import(/* webpackChunkName: 'element-ui-option' */ 'element-ui/lib/option')
  )
}

const styles = [
  './node_modules/element-ui/packages/theme-chalk/src/base.scss',
  './node_modules/element-ui/packages/theme-chalk/src/display.scss',
  './node_modules/element-ui/packages/theme-chalk/src/button.scss',
  './node_modules/element-ui/packages/theme-chalk/src/table.scss',
  './node_modules/element-ui/packages/theme-chalk/src/col.scss',
  './node_modules/element-ui/packages/theme-chalk/src/row.scss',
  './node_modules/element-ui/packages/theme-chalk/src/card.scss',
  './node_modules/element-ui/packages/theme-chalk/src/tooltip.scss',
  './node_modules/element-ui/packages/theme-chalk/src/radio-group.scss',
  './node_modules/element-ui/packages/theme-chalk/src/radio-button.scss',
  './node_modules/element-ui/packages/theme-chalk/src/radio.scss',
  './node_modules/element-ui/packages/theme-chalk/src/select.scss',
  './node_modules/element-ui/packages/theme-chalk/src/option.scss',
]

export { styles }
