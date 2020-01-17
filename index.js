import { NativeModules } from "react-native";

const { ARNKakaoLogin, ARNKakaoLink, ARNKakaoChannel, ARNKakaoNavi } = NativeModules;

export const link = {
  sendFeed: object => {
    return ARNKakaoLink.sendFeed(object);
  },
  sendList: object => {
    return ARNKakaoLink.sendList(object);
  },
  sendLocation: object => {
    return ARNKakaoLink.sendLocation(object);
  },
  sendCommerce: object => {
    return ARNKakaoLink.sendCommerce(object);
  },
  sendText: object => {
    return ARNKakaoLink.sendText(object);
  },
  sendURL: object => {
    return ARNKakaoLink.sendURL(object);
  }
};

export const login = {
  getAccessToken: () => {
    return ARNKakaoLogin.getAccessToken();
  },
  login: () => {
    return ARNKakaoLogin.login();
  },
  logout: () => {
    return ARNKakaoLogin.logout();
  }
};

export const channel = {
  addFriend: id => {
    return ARNKakaoChannel.addFriend(id);
  },
  chat: id => {
    return ARNKakaoChannel.chat(id);
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
      return ARNKakaoNavi.share(location, options, viaList);
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
      return ARNKakaoNavi.navigate(location, options, viaList);
    }
  }
};

export default {
  link,
  login,
  channel,
  navi
};
