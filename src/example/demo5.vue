<template>
  <div>
    <h3>自定义Value:Function</h3>
    <checkboxGroup
      :options="options"
      v-model="selected"
      optionLabel="name"
      :optionValue="optionValue"
    ></checkboxGroup>
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
      options: [
        {
          id: '1',
          name: 'Frank'
        },
        {
          id: '2',
          name: 'Jack'
        },
        {
          id: '3',
          name: 'Mars'
        }
      ],
      selected: []
    }
  },
  methods: {
    optionValue(item) {
      return `${item.id}-${item.name}`
    }
  }
}
</script>
