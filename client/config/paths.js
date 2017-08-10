'use strict';

const path = require('path');
const fs = require('fs');
const url = require('url');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appBuild: resolveApp('../app/public'),
  appIndexJs: resolveApp('src/index.js'),
  appSrc: resolveApp('src'),
  appNodeModules: resolveApp('node_modules'),
};
