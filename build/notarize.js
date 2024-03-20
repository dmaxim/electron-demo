const {notarize} = require("electron-notarize");

exports.default = async function (context) {
  if (process.platform !== "darwin") {
    return;
  }
  let appName = context.packager.appInfo.productFilename;
  let appDir = context.appOutDir;
  return await notarize({
    appBundleId: "com.mxinformatics.readit",
    appPath: `${appDir}/${appName}.app`,
    appleId: process.env.appleId,
    appleIdPassword: process.env.appleIdPassword,
  });
};
