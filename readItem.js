const {BrowserWindow, ipcMain} = require("electron");

let offscreenWindow;

module.exports = (url, callback) => {
  offscreenWindow = new BrowserWindow({
    width: 500,
    height: 500,
    show: false,
    webPreferences: {
      offscreen: true,
      nodeIntegration: false,
    },
  });
  offscreenWindow.loadURL(url);

  // Wait for content to finish loading
  offscreenWindow.webContents.on(
    "did-finish-load",
    (e) => {
      // Get page title
      let title = offscreenWindow.getTitle();

      // Get screenshot (thumbnail)
      offscreenWindow.webContents.capturePage().then((image) => {
        let screenshot = image.toDataURL();

        // Execute callback with new item object
        callback({title, screenshot, url});

        // Clean up
        offscreenWindow.close();
        offscreenWindow = null;
      });
    },
    1000
  );
};
