<template>
  <div>
    <h3>部分禁用</h3>
    <checkboxGroup
      :options="options"
      v-model="selected"
      optionLabel="name"
      :optionValue="optionValue"
      :disabledOptions="[this.options[0],this.options[2]]"
    ></checkboxGroup>
    <br/>
    <checkboxGroup
      :options="options"
      v-model="selected"
      optionLabel="name"
      optionValue="id"
      :disabledOptions="[1,3]"
    ></checkboxGroup>
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
          id: 1,
          name: 'Frank'
        },
        {
          id: 2,
          name: 'Jack'
        },
        {
          id: 3,
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
