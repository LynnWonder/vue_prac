// vue.config.js
const svgoConfig = require('./svgo-config.json')
function getPublicPath() {
  //todo
  return '/'
}

module.exports = {
  // transpileDependencies: ['vue-echarts', 'resize-detector'],
  runtimeCompiler: true,
  publicPath: getPublicPath(),
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: require('./aliases.config').webpack,
      // alias: ,
    },
    performance: {
      // Only enable performance hints for production builds,
      // outside of tests.
      hints: process.env.NODE_ENV === 'production' && !process.env.VUE_APP_TEST && 'warning',
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
      .options(svgoConfig)
    config.module
      .rule('modernizr')
      .test(/\.modernizrrc\.js$/)
      .use('webpack-modernizr-loader?useConfigFile')
      .loader('webpack-modernizr-loader')
    // https://cli.vuejs.org/guide/troubleshooting.html#symbolic-links-in-node-modules
    config.resolve.symlinks(false)
    // https://cli.vuejs.org/migrating-from-v3/#vue-cli-service
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      return [...args]
    })
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true,
    loaderOptions: {
      // pass options to sass-loader
      // pass Less.js Options to less-loader
      less: {
        javascriptEnabled: true,
      },
    },
  },
  pluginOptions: {
    svgSprite: {
      dir: 'src/assets/icons',
      loaderOptions: {
        extract: false,
      },
    },
  },
  devServer: {
    host: '127.0.0.1',
    port: 8081,
    proxy: {
      // 在不设置 VUE_APP_HOST 且服务端未添加跨域配置的时候添加：如下配置内容可以实现跨域
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
}
