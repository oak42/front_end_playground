/*
Webpack 在执⾏构建时默认会从项⽬根⽬录下的 webpack.config.js ⽂件读取配置，所以你还需要新建它：
 */

const path = require('path');

module.exports = {
  // JavaScript执行入口文件
  entry: './js/helloworld.js',
  output: {
    // 把所有依赖的模块合并输出到⼀个 bundle.js ⽂件
    filename: 'bundled.js',
    // 输出⽂件都放到 dist ⽬录下
    path: path.resolve(__dirname, './dist'),
  },
};
