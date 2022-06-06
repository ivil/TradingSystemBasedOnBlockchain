const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 9097,
    https: false,
    proxy: {
      '/': {
        target: 'http://localhost:9091',
        changeOrigin: true,
        pathRewrite: { '^/': '' },  //不重写路径
        ws: false,
      }
    }
  },
  configureWebpack: {
    resolve: {
      fallback: {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        assert: require.resolve("assert"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify"),
        url: require.resolve("url"),
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      }),
    ],
  }
})
