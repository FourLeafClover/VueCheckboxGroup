# v-checkbox-group

> https://github.com/FourLeafClover/VueCheckboxGroup

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

npm install v-checkbox-group -D

```
### 属性

<pre>
   model: {
    prop: 'checked',
    event: 'onChange'
  },
  props: {
    options: {  // 绑定数据源
      type: Array,
      default: () => []
    },
    checked: null, // 用于v-model
    isMutiple: {
      // 是否支持多选
      type: Boolean,
      default: true
    },
    isSingleValueArray: {
      type: Boolean,
      default: false // 单选的时候v-model是否是数组 1是array,0是对象或者字符串
    },
    disabled: { // checkboxGroup是否禁用
      type: Boolean,
      default: false
    },
    disabledOptions: { // 禁用某些项
      type: Array,
      default: () => []
    },
    optionLabel: null, // 支持为空,string和function
    optionValue: null // 支持为空,string和function
  },
</pre>

### 事件

<pre>

// event是否选中
// item当前点击item
// checked 选中的所有item
onOptionChange(event, item, checkedItems)

</pre>