import { NativeModules } from "react-native";

const { ARNKakaoLogin, ARNKakaoLink, ARNKakaoChannel, ARNKakaoNavi } = NativeModules;

export const link = {
  sendFeed: object => {
    ARNKakaoLink.sendFeed(object);
  },
  sendList: object => {
    ARNKakaoLink.sendList(object);
  },
  sendLocation: object => {
    ARNKakaoLink.sendLocation(object);
  },
  sendCommerce: object => {
    ARNKakaoLink.sendCommerce(object);
  },
  sendText: object => {
    ARNKakaoLink.sendText(object);
  },
  sendURL: object => {
    ARNKakaoLink.sendURL(object);
  }
};

export const login = {
  getAccessToken: () => {
    ARNKakaoLogin.getAccessToken();
  },
  login: () => {
    ARNKakaoLogin.login();
  },
  logout: () => {
    ARNKakaoLogin.logout();
  }
};

export const channel = {
  addFriend: id => {
    ARNKakaoChannel.addFriend(id);
  },
  chat: id => {
    ARNKakaoChannel.chat(id);
  }
};

export const navi = {
  share: (location, options = {}, viaList = []) => {
    if (!location) {
      console.error(
        "Cannot call the ANKakaoNavi.share with " + location + " location"
      );
    } else if (viaList.length > 3) {
      console.error("viaList must be <=3");
    } else {
      ARNKakaoNavi.share(location, options, viaList);
    }
  },
  navigate: (location, options = {}, viaList = []) => {
    if (!location) {
      console.error(
        "Cannot call the ANKakaoNavi.navigate with " + location + " location"
      );
    } else if (viaList.length > 3) {
      console.error("viaList must be <=3");
    } else {
      ARNKakaoNavi.navigate(location, options, viaList);
    }
  }
};

export default {
  link,
  login,
  channel,
  navi
};
