const {autoUpdater} = require("electron-updater");

// Congfigure log debugging
autoUpdater.logger = require("electron-log");
autoUpdater.logger.transports.file.level = "info";

module.exports = () => {
  autoUpdater.checkForUpdates();
};
