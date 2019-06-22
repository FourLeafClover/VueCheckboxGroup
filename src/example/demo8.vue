<template>
  <div>
    <h3>设置默认值</h3>
    <checkboxGroup
      :options="options"
      v-model="selected1"
      optionLabel="name"
      :optionValue="optionValue"
    ></checkboxGroup>
    <br>
    <checkboxGroup :options="options" v-model="selected2" optionLabel="name" optionValue="id"></checkboxGroup>
  </div>
</template>
<script>
import checkboxGroup from "../packages/checkboxGroup.vue";
export default {
  components: {
    checkboxGroup
  },
  data() {
    return {
      options: [
        {
          id: 1,
          name: "Frank"
        },
        {
          id: 2,
          name: "Jack"
        },
        {
          id: 3,
          name: "Mars"
        }
      ],
      selected1: [],
      selected2: [1,3]
    };
  },
  created() {
    this.selected1 = [this.optionValue(this.options[1])];
  },
  methods: {
    optionValue(item) {
      return `${item.id}-${item.name}`;
    }
  }
};
</script>
