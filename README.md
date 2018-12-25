
# KakaoSDK for React Native

![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS-brightgreen.svg?style=flat-square&colorB=191A17)
[![npm](https://img.shields.io/npm/v/react-native-ccs-kakaosdk.svg?style=flat-square)](https://www.npmjs.com/package/react-native-ccs-kakaosdk)
[![npm](https://img.shields.io/npm/dm/react-native-ccs-kakaosdk.svg?style=flat-square&colorB=007ec6)](https://www.npmjs.com/package/react-native-ccs-kakaosdk)
[![github issues](https://img.shields.io/github/issues/creamcookie/react-native-kakaosdk.svg?style=flat-square)](https://github.com/creamcookie/react-native-kakaosdk/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/creamcookie/react-native-kakaosdk.svg?style=flat-square&colorB=44cc11)](https://github.com/creamcookie/react-native-kakaosdk/issues?q=is%3Aissue+is%3Aclosed)
[![Issue Stats](https://img.shields.io/issuestats/i/github/creamcookie/react-native-kakaosdk.svg?style=flat-square&colorB=44cc11)](http://github.com/creamcookie/react-native-kakaosdk/issues)


## Getting started

`$ npm install react-native-ccs-kakaosdk --save`

### Mostly automatic installation

`$ react-native link react-native-ccs-kakaosdk`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-ccs-kakaosdk` and add `RNCcsKakaosdk.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCcsKakaosdk.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNCcsKakaosdkPackage;` to the imports at the top of the file
  - Add `new RNCcsKakaosdkPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-ccs-kakaosdk'
  	project(':react-native-ccs-kakaosdk').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-ccs-kakaosdk/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-ccs-kakaosdk')
  	```


### Initalizing project


#### iOS


#### Android



## Usage
```javascript
import KakaoSDK from 'react-native-ccs-kakaosdk';

// TODO: What to do with the module?
KakaoSDK.login().then().catch();
```
  
