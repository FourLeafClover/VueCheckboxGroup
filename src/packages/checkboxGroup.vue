<template>
  <div class="v-checkbox-group">
    <checkbox
      v-for="(item,index) in options"
      :index="index"
      :value="isChecked(item)"
      @onChange="(event)=>onOptionChange(item,event)"
      :key="index"
      :disabled="getOptionDisabled(item)"
    >{{getOptionLabel(item)}}</checkbox>
  </div>
</template>
<script>
import checkbox from './checkbox'
export default {
  name: 'vCheckboxGroup',
  model: {
    prop: 'checked',
    event: 'onChange'
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    checked: null,
    isMutiple: {
      // 是否支持多选
      type: Boolean,
      default: true
    },
    isSingleValueArray: {
      type: Boolean,
      default: false // 1是array,0是对象或者字符串
    },
    disabled: { // checkboxGroup是否禁用
      type: Boolean,
      default: false
    },
    disabledOptions: { // 禁用某些项
      type: Array,
      default: () => []
    },
    optionLabel: null,
    optionValue: null
  },
  data() {
    return {
      checkedItems: []
    }
  },
  methods: {
    getOptionDisabled(item) {
      return this.disabled || // 全局disabled
      this.disabledOptions.findIndex(x => x === item) >= 0 || // 判断Item是否在禁用里面
      this.disabledOptions.findIndex(x => this.getOptionValue(x) === this.getOptionValue(item)) >= 0
      // 这里主要是为了防止用户在设置禁用的时候对禁用对象做了一次拷贝。随意还是通过getOptionValue再判断一次
    },
    updateValue() {
      let values = null
      if (this.isMutiple || this.isSingleValueArray) {
        values = this.checkedItems.map(item => this.getOptionValue(item))
      } else {
        if (this.checkedItems.length > 0) {
          values = this.getOptionValue(this.checkedItems[0])
        } else {
          values = null
        }
      }
      this.$emit('onChange', values)
    },
    getOptionValue(item) {
      if (this.optionValue) {
        let optionValueType = typeof (this.optionValue)
        if (optionValueType === 'string') {
          return item[this.optionValue]
        } else if (optionValueType === 'function') {
          return this.optionValue(item)
        } else {
          return item
        }
      } else {
        return item
      }
    },
    getOptionLabel(item) {
      if (this.optionLabel) {
        let optionLabelType = typeof this.optionLabel
        if (optionLabelType === 'string') {
          return item[this.optionLabel]
        } else if (optionLabelType === 'function') {
          return this.optionLabel(item)
        } else {
          console.warn('optionLabel只能是string或者function')
          return ''
        }
      } else {
        return item.toString()
      }
    },
    onOptionChange(item, event) {
      if (event) {
        if (this.isMutiple) {
          this.checkedItems.push(item)
        } else {
          this.checkedItems = [item]
        }
      } else {
        let index = this.checkedItems.findIndex(x => x === item)
        this.checkedItems.splice(index, 1)
      }
      this.updateValue()
      this.$nextTick(() => {
        this.$emit('onOptionChange', event, item, this.checkedItems)
      })
    },
    isChecked(item) {
      return this.checkedItems.findIndex(x => x === item) >= 0
    },
    // 全选
    checkedAll() {
      this.checkedItems = this.options
      this.updateValue()
    },
    // 全部取消
    unCheckedAll() {
      this.$emit('onChange', null)
    },
    // 反选
    reverse() {
      this.checkedItems = this.options.filter(item => this.checkedItems.findIndex(x => x === item) < 0)
      this.updateValue()
    }
  },
  watch: {
    checked: {
      handler: function (val, oldVal) {
        if (val !== null && val !== undefined && val !== '') {
          if (Array.isArray(val)) {
            if (val.length === 0) {
              this.checkedItems.length = 0
            } else {
              this.checkedItems = this.options.filter(item => val.includes(this.getOptionValue(item)))
            }
          } else {
            this.checkedItems = this.options.filter(item => val === this.getOptionValue(item))
          }
        } else {
          this.checkedItems.length = 0
        }
      },
      deep: true,
      immediate: false
    }
  },
  components: {
    checkbox
  }
}
</script>

<style lang="scss" scoped>
.v-checkbox-group {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  -webkit-font-feature-settings: "tnum";
  font-feature-settings: "tnum";
  display: inline-block;
}
</style>
