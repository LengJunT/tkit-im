const CracoLessPlugin = require('craco-less');
const { loaderByName } = require('@craco/craco');

module.exports = function (webpackEnv) {
  const lessModuleRegex = /\.module\.less$/;
  return {
    devServer: {
      proxy: {
        '/api': {
          target: `http://localhost:3001/`,
          // changeOrigin: true,
          pathRewrite: { '^/api': '' },
        }
      }
    },
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          // less loader option
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: {
                '@primary-color': '#2378ff'
              },
              javascriptEnabled: true,
            },
          },
          modifyLessRule(lessRule) {
            lessRule.exclude = lessModuleRegex;
            return lessRule;
            },
          modifyLessModuleRule(lessModuleRule) {
            // configure the file suffix
            lessModuleRule.test = lessModuleRegex;
            // configure the generated local ident name
            const cssLoader = lessModuleRule.use.find(loaderByName('css-loader'));
            cssLoader.options.modules = {
            /*
                注意这里的命名规则：
                - CRA脚手架创建的项目是可以直接使用css modules的，css文件的命名规则默认是[local]_[hash:base64:5]
                - 这里使用css modules的命名规则
            */

             localIdentName: '[local]_[hash:base64:5]',
            };
            return lessModuleRule;
            },
        },
      },
    ],
  };
};
