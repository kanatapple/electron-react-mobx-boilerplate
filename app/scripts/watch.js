const chokidar = require('chokidar');
const electron = require('electron-connect').server.create();

electron.start();

chokidar.watch(['./main.js']).on('change', () => {
  electron.restart();
});

chokidar.watch('public').on('all', (event) => {
  if (false
    || event === 'add'
    || event === 'addDir'
    || event === 'change'
    || event === 'unlink'
    || event === 'unlinkDir'
  ) {
    electron.reload();
  }
});