<template>
  <div id='app'>
    <demo1></demo1>
    <demo2></demo2>
    <demo3></demo3>
    <demo4></demo4>
    <demo5></demo5>
  </div>
</template>

<script>
import demo1 from './demo1'
import demo2 from './demo2'
import demo3 from './demo3'
import demo4 from './demo4'
import demo5 from './demo5'
export default {
  name: 'app',
  components: {
    demo1,
    demo2,
    demo3,
    demo4,
    demo5
  }
}
</script>
