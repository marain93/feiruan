const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  // publicPath:"static/",
  pages: {
    index: {
      entry: './pages/index/main.js',
      template: 'public/index.html',
      filename: 'login.html',
      title: 'login'
    },
    my: {
      entry: './pages/my/main.js',
      template: 'public/index.html',
      filename: 'my.html',
      title: 'my'
    }
  },
  // 规定@的目录
  chainWebpack: config => {
    config.resolve.alias.set('@discover', resolve('pages/discover'))
    config.resolve.alias.set('@task', resolve('pages/task'))
    config.resolve.alias.set('@login', resolve('pages/login'))
    config.resolve.alias.set('@api', resolve('api'))
    config.resolve.alias.set('@components', resolve('components'))
    config.resolve.alias.set('@assets', resolve('assets'))
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            // 以设计稿750为例， 750 / 10 = 75
            remUnit: 75
          })
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
        }
        // },
      }
    }
  }
}
