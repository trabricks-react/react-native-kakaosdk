import { NativeModules } from "react-native";

module.exports = {
  get Login() {
    if (!NativeModules.ARNKakaoLogin) {
      console.warn(
        "Install to Kakao Login - $ npm i @actbase/react-native-kakao-login"
      );
      return null;
    }
    return NativeModules.ARNKakaoLogin;
  },
  get Link() {
    if (!NativeModules.ARNKakaoLink) {
      console.warn(
        "Install to Kakao Link - $ npm i @actbase/react-native-kakao-link"
      );
      return null;
    }
    return NativeModules.ARNKakaoLink;
  },
  get Channel() {
    if (!NativeModules.ARNKakaoChannel) {
      console.warn(
        "Install to Kakao Channel - $ npm i @actbase/react-native-kakao-channel"
      );
      return null;
    }
    return NativeModules.ARNKakaoChannel;
  },
  get Navi() {
    if (!NativeModules.ARNKakaoNavi) {
      console.warn(
        "Install to Kakao Navi - $ npm i @actbase/react-native-kakao-navi"
      );
      return null;
    }
    return NativeModules.ARNKakaoNavi;
  }
};
