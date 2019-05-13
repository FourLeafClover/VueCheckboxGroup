<template>
  <label
    class="v-checkbox-item"
    :class="{
      'v-checkbox-item-checked':value,
      'disabled':disabled
    }"
  >
    <span class="v-checkbox" @click="toggleCheck">
      <span class="v-checkbox-inner"></span>
    </span>
    <span class="v-checkbox-label">
      <slot></slot>
    </span>
  </label>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    toggleCheck() {
      if (!this.disabled) {
        this.$emit('update:input', !this.value)
        this.$emit('onChange', !this.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-checkbox-item {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.5;
  display: inline-block;
  line-height: unset;
  cursor: pointer;
  margin-right: 10px;
  &:last-of-type {
    margin-right: 0px;
  }
  .v-checkbox {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 1.5;
    position: relative;
    top: -0.09em;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    cursor: pointer;
    .v-checkbox-inner {
      position: relative;
      top: 0;
      left: 0;
      display: block;
      width: 16px;
      height: 16px;
      background-color: #fff;
      border: 2px solid #1890ff;
      border-radius: 2px;
      border-collapse: separate;
      transition: all 0.3s;
    }
  }
  .v-checkbox-label {
    padding-left: 5px;
  }
  &.v-checkbox-item-checked {
    .v-checkbox-inner:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: " ";
      background-color: #1890ff;
      background-image: url("./assets/input-checked.png");
      background-size: cover;
    }
  }
  &.disabled {
    cursor: no-drop;
    color: #aaa;;
    .v-checkbox {
      cursor: no-drop;
      .v-checkbox-inner{
        border-color:#aaa;
        &:after{
          background-color: #aaa;
        }
      }
    }
  }
}
</style>
