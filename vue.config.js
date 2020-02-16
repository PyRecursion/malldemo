//别名配置
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "assets": '@/assets',
        "components":"@/components",
        "api":"@/api"
      }
    }
  }
}
