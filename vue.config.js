module.exports = {
  // publicPath:"static/",
  //规定@的目录
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            // 以设计稿750为例， 750 / 10 = 75
            remUnit: 75
          }),
        ]
      },
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        // lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'text-color': '#111',
            // 'border-color': '#eee',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            // hack: `true; @import "F:/Sublime Text 3/code/jybs/xd/src/assets/picker.less";`,
          },
        // },
      },
    }
  },
};