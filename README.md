# Welcome to the react native demo of Nabto WebRTC Signaling

Intro:

This showcases a react native demo for android and ios.

## Get started
Prerequisites:
* Install bun from [bun.sh]()


### Install dependencies and generate development build

```
bun install
bunx expo prebuild
```

### Start android app

```
bun run android
```

### Start ios

```
bun run ios
```

### Build an android release apk:

```
bunx expo eject
cd android && ./gradlew assembleRelease
```

### Speed up native iOS build time

The native iOS build is very slow (Android might be as well). [This guide](https://reactnative.dev/docs/build-speed) describes how to speed it up using `ccache`. In practice, build time reduction from several minutes to a few seconds is observed. The procedure boils down to the following:

Install `ccache`:

```
brew install ccache
```

Enable `ccache` support in the build - either edit `ios/Podfile.properties.json` or add a local version, `ios/Podfile.properties.local.json`:

```
{
  "apple.ccacheEnabled": "true"
}
```

Then do a clean build and observe faster subsequent builds.
