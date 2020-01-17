import { NativeModules } from "react-native";

const { ARNKakaoLogin, ARNKakaoLink, ARNKakaoChannel } = NativeModules;

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

export default {
  link,
  login,
  channel
};
