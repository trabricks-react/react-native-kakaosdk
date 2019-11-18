import { NativeModules } from "react-native";

const { ANKakaoLogin, ANKakaoLink } = NativeModules;

export const link = {
  sendFeed: object => {
    ANKakaoLink.sendFeed(object);
  },
  sendList: object => {
    ANKakaoLink.sendList(object);
  },
  sendLocation: object => {
    ANKakaoLink.sendLocation(object);
  },
  sendCommerce: object => {
    ANKakaoLink.sendCommerce(object);
  },
  sendText: object => {
    ANKakaoLink.sendText(object);
  },
  sendURL: object => {
    ANKakaoLink.sendURL(object);
  }
};

export const login = {
  getAccessToken: () => {
    ANKakaoLogin.getAccessToken();
  },
  login: () => {
    ANKakaoLogin.login();
  },
  logout: () => {
    ANKakaoLogin.logout();
  }
};

export default {
  link,
  login
};
