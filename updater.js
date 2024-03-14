const {dialog} = require("electron");
const {autoUpdater} = require("electron-updater");

// Congfigure log debugging
autoUpdater.logger = require("electron-log");
autoUpdater.logger.transports.file.level = "info";
autoUpdater.autoDownload = false;

module.exports = () => {
  autoUpdater.checkForUpdates();

  autoUpdater.on("update-available", () => {
    dialog
      .showMessageBox({
        type: "info",
        title: "Update available",
        message:
          "A new version of the app is available. Do you want to update now?",
        buttons: ["Update", "No"],
      })
      .then((result) => {
        let buttonIndex = result.response;
        if (buttonIndex === 0) autoUpdater.downloadUpdate();
      });
  });
};
