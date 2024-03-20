const {notarize} = require("electron-notarize");

console.log("Notarizing app...");

exports.default = async function (context) {
  if (process.platform !== "darwin") {
    return;
  }

  let appName = context.package.appInfo.productFileName;
  let appDir = context.appOutDir;

  return await notarize({
    appBundleId: "com.mxinformatics.readit",
    appPath: `${appDir}/${appName}.app`,
    appleId: process.env.appleId,
    appleIdPassword: process.env.appleIdPassword,
  });
};
