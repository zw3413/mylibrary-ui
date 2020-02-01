<template>
  <div class="app-container" >
    <el-button @click="clickOpen">点击打开</el-button>
  </div>
</template>

<script>
export default {
  name: 'Operation',
  methods: {
    clickOpen: function() {
      alert('clicked open !')
    }
  }
}
</script>

<style scoped>

</style>
