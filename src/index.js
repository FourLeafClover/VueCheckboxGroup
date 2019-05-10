// 引入组件
import checkboxGroup from './packages/checkboxGroup'

checkboxGroup.install = Vue => Vue.component(checkboxGroup.name, checkboxGroup)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(checkboxGroup)
}

export default checkboxGroup
