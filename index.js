import { NativeModules } from "react-native";

const { ARNKakaoLogin, ARNKakaoLink, ARNKakaoChARNnel } = NativeModules;

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
    ARNKakaoChARNnel.addFriend(id);
  },
  chat: id => {
    ARNKakaoChARNnel.chat(id);
  }
};

export default {
  link,
  login,
  chARNnel
};
