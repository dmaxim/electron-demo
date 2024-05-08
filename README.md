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

## Notarization

Dealing with MacOS Gatekeeper

### Need Gatekeeper command line tools

Check gatekeeper status

```
sudo spctl --status
```

Enable if necessary

```
sudo spctl --master-enable
```

Disable

```
sudo spctl --master-disable
```

Test The app

```
sudo spctl --assess dist/mac-arm64/ReadIt.app
```

## Build App With Notarization

Using electron-notarize

```
npm i -D electron-notarize
```

### Requirements for notarization

- Xcode installed
- Apple Developer account
- App specific password for your ADC account's apple id
- App may ned to be signed with hardened runtime

Create App Specific Password via Apple ID Account
https://appleid.apple.com

App Specific Passwords - Generate Password

Update package.json (AfterSign)

Build using notarization

```
appleId=<your apple id> appleIdPassword=<your app specific password> npm run build
```

Error: xcrun: error: unable to find utility "altool", not a developer tool or in PATH

Fix

```
sudo xcode-select -r
```

Troubeshooting error authenticating with Apple

- altool is deprecated
  xcrun altool --notarization-history 0 -u <your apple id> -p <your app specific password> --verbose --output-format xml

xcrun notarytool history --apple-id <email address> --password <password> --output-format json --team-id <need this>

```
rm -rf dist
appleId='dan.maxim@fortrobotics.com' appleIdPassword='rxdf-ypqs-mtrj-pphj' npm run build
```

xcrun altool --notarization-history 0 -u 'dan.maxim@fortrobotics.com' -p 'rxdf-ypqs-mtrj-pphj' --debug --output-format xml
