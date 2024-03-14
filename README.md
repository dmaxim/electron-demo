## Deployments

## Electron Builder

Install Electron Builder Tools

Globally

```
npm install -g electron-builder
```

Locally for project

```
npm install -D electron-builder
```

## Package.json

```
 "build": "electron-builder --mac zip",
```

Can build for Windows, Linux, and Mac on a Mac
Cannot build for Mac on Windows

## Apple Signing

- Add a developer account to Xcode - and add a certificate
- Accounts - Manage Certificates

If the build still fails to find the certificate - check the status of the certificate in key chain under "My Certificates"

It was necessary to download the certificate from the Apple Developer site and install it in the keychain https://www.apple.com/certificateauthority/AppleWWDRCAG3.cer

## Windows Code Signing

## Publishing releases

- Electron auto-updater - requires a server to host the updates
- Apple app store
- Can host on GitHub, Amazon S3, Digital Ocean - Spaces, Bintray

### GitHub releases

- Part of GitHub code repo
- Update repository in package.json to point at the GitHub repo
- Create a draft release in GitHub
- Setup personal access token to allow Electron Builder to access the GitHub repo
- Store the token in an environment variable GH_TOKEN
- Update the package.json to add a release script and the GitHub publish provider
- Create release locally

```
GH_TOKEN=<your token> npm run release
```

### AutoUpdater

```
npm i electron-updater
```

- Add the code for enabling the auto-updater
- Enable logging for debugging
- Mac log location ~/Library/Logs/ReadIt/main.log
