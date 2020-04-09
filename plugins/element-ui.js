import Vue from 'vue'

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)

export default () => {
  /* Common */
  Vue.component('icon', () =>
    import(/* webpackChunkName: 'components-icon' */ '../components/Icon')
  )

  /* Element UI */
  Vue.component('el-button', () =>
    import(/* webpackChunkName: 'element-ui-button' */ 'element-ui/lib/button')
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
  Vue.component('el-radio', () =>
    import(/* webpackChunkName: 'element-ui-radio' */ 'element-ui/lib/radio')
  )
  Vue.component('el-dialog', () =>
    import(/* webpackChunkName: 'element-ui-dialog' */ 'element-ui/lib/dialog')
  )
}

const styles = [
  './node_modules/element-ui/packages/theme-chalk/src/base.scss',
  './node_modules/element-ui/packages/theme-chalk/src/display.scss',
  './node_modules/element-ui/packages/theme-chalk/src/button.scss',
  './node_modules/element-ui/packages/theme-chalk/src/col.scss',
  './node_modules/element-ui/packages/theme-chalk/src/row.scss',
  './node_modules/element-ui/packages/theme-chalk/src/card.scss',
  './node_modules/element-ui/packages/theme-chalk/src/tooltip.scss',
  './node_modules/element-ui/packages/theme-chalk/src/radio-group.scss',
  './node_modules/element-ui/packages/theme-chalk/src/radio.scss',
  './node_modules/element-ui/packages/theme-chalk/src/dialog.scss',
  './node_modules/element-ui/packages/theme-chalk/src/notification.scss',
]

export { styles }
