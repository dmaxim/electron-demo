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

Yesterday

- Started working through the process of deploying an Electron application with code signing
- Worked with Ronaldo to fix a TLS / certificate issue with fm gateway ingress in production (It looks like the develop branch of the fort-frotend has the correct ingress configuration - this should be merged to master at some point)

Today

- Test deployments of Electron applications
- Work on highlevel architecture document for the proactive safety proof of concept

## Publishing releases

- Electron auto-updater - requires a server to host the updates
- Apple app store
- Can host on GitHub, Amazon S3, Digital Ocean - Spaces, Bintray

### GitHub releases

- Part of GitHub code repo
