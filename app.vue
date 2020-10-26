<template>
  <Button @click="nightTheme = !nightTheme">Change theme</Button>

  <Dialog header="Theme Toggle" v-model:visible="showDialog">
    Current theme is {{nightTheme ? "night theme" : "light theme"}}.
  </Dialog>

  <div class="p-grid">
      <div class="p-col">1</div>
      <div class="p-col">2</div>
      <div class="p-col">3</div>
  </div>

    <Card>
		<template v-slot:content>
		Content
		</template>
    </Card>
</template>

<script>
module.exports = {
  mounted: function() {
    this.attachDefaultTheme()
  },

  watch: {
    nightTheme: function (becomeNightTheme, _) {
      if (becomeNightTheme) {
        this.changeTheme('night.css')
      } else {
        this.changeTheme('light.css')
      }
      this.showDialog = true
    }
  },

  data: function() {
    return {
      nightTheme: false,
      showDialog: false
    }
  },

  methods: {
    changeTheme(cssFile) {
      let theme = document.getElementById("theme")
      theme.href = cssFile
    },

    attachDefaultTheme() {
      const theme = document.createElement('link')
      theme.type = "text/css"
      theme.rel = "stylesheet"
      theme.id = "theme"
      theme.href = 'light.css' /* default */
      document.head.appendChild(theme)
    }
  }
}
</script>

<style scoped>
</style>
