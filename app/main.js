const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');
const client = require('electron-connect').client;
const installExtension = require('electron-devtools-installer').default;
const { REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

let mainWindow = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'public/index.html'),
    protocol: 'file:',
    slashes: true
  }));
  
  if (process.env.NODE_ENV !== 'production') {
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension: ${name}`))
      .catch((error) => console.log('An error occurred: ', error));
    
    mainWindow.openDevTools();
    
    mainWindow.webContents.executeJavaScript(`localStorage.setItem('debug', 'develop');`);
    mainWindow.webContents.executeJavaScript(`location.reload();`);
    
    client.create(mainWindow);
  }
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
