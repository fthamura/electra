// Require the libraries used in the app
var app = require('app'),
    BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

// Kill the app when all windows are closed
app.on('mainWindow-all-closed', function() {

});

app.on('ready', function() {
  // Create the main window for the app
  mainWindow = new BrowserWindow({
    "min-width"         : 800,
    "min-height"        : 600,
    fullscreen          : true,
    resizable           : true,
    "use-content-size"  : true
  });

  // Load in our content
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // This is required for now due to https://github.com/atom/electron/issues/1117
  mainWindow.openDevTools();
  mainWindow.closeDevTools();

  // Ensure that garbage collection occurs when the window is closed
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
