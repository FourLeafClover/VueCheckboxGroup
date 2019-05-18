<template>
  <div>
    <h3>复选</h3>
    <checkboxGroup ref="group" :options="options" v-model="selected" @onOptionChange="onOptionChange"></checkboxGroup>
    <div>
      <Button @click="selectAll">全选</Button>
      <Button @click="unSelectAll">取消所有</Button>
      <Button @click="reverse">反选</Button>
    </div>
    <div>选中值:{{selected}}</div>
    <div>点击checkbox变化:{{changes}}</div>
  </div>
</template>
<script>
import checkboxGroup from '../packages/checkboxGroup.vue'
export default {
  components: {
    checkboxGroup
  },
  data() {
    return {
      options: ['IPhone', 'Makbook', 'GooglePlex'],
      selected: [],
      changes: null
    }
  },
  methods: {
    onOptionChange(event, item, checked) {
      console.log(item)
      console.log(event)
      console.log(checked)
      this.changes = {
        '点击值': item,
        '状态': event ? '选中' : '未选中',
        '已选中值': checked
      }
    },
    selectAll() {
      this.$refs.group.checkedAll()
    },
    unSelectAll() {
      this.$refs.group.unCheckedAll()
    },
    reverse() {
      this.$refs.group.reverse()
    }
  }
}
</script>
