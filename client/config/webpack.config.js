'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.BABEL_ENV = process.env.NODE_ENV;

const path = require('path');
const webpack = require('webpack');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const paths = require('./paths');

module.exports = {
  devtool: 'source-map',
  entry: [require.resolve('./polyfills'), paths.appIndexJs],
  output: {
    path: paths.appBuild,
    filename: 'javascripts/client.bundle.js',
    pathinfo: true,
    devtoolModuleFilenameTemplate: '[resource-path]'
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat(),
    extensions: ['.js', '.json', '.jsx'],
    plugins: [
      new ModuleScopePlugin(paths.appSrc)
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter
            },
            loader: require.resolve('eslint-loader')
          }
        ],
        include: paths.appSrc
      },
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader')
      }
    ]
  }
};
