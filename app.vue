<template>
  <Button @click="toggle">Click me!</Button>

  <Dialog header="Header" v-model:visible="display" >
    Content
  </Dialog>
</template>

<script>
module.exports = {
  data: function() {
    return {
      display: false
    }
  },

  methods: {
    toggle() {
      this.display = !this.display
    }
  }
}
</script>

<style scoped>
</style>
