//const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  css: {
    loaderOptions: {
        sass: {
            additionalData: `@import "@/assets/styles/variables.scss";`
        },
        scss: {
            additionalData: `@import "@/assets/styles/variables.scss";`
          },
    },
}
}
