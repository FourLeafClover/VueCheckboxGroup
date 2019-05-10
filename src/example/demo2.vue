<template>
  <div>
    <h3>单选</h3>
    <checkboxGroup :options="options" v-model="selected" :isMutiple="false"></checkboxGroup>
    <div>选中值:{{selected}}</div>
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
      selected: null
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
