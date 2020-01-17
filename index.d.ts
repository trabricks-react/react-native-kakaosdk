import { NativeSyntheticEvent } from "react-native";
declare module "actbase-native-kakaosdk" {
  export interface LinkObject {
    webURL?: string;
    mobileWebURL?: string;
    androidExecutionParams?: string;
    iosExecutionParams?: string;
  }

  export interface SocialObject {
    likeCount?: number;
    commentCount?: number;
    sharedCount?: number;
    viewCount?: number;
    subscriberCount?: number;
  }

  export interface CommerceDetailObject {
    regularPrice: number;
    discountPrice?: number;
    discountRate?: number;
    fixedDiscountPrice?: number;
  }

  export interface ButtonObject {
    title: string;
    webURL?: string;
    mobileWebURL?: string;
    androidExecutionParams?: string;
    iosExecutionParams?: string;
  }

  export interface ContentObject {
    title: string;
    link: LinkObject;
    imageURL: string;
    desc?: string;
    imageWidth?: number;
    imageHeight?: number;
  }

  export interface SendFeedParams {
    content: ContentObject;
    social?: SocialObject;
    buttons?: ButtonObject[];
  }

  export interface SendListParams {
    headerTitle: string;
    headerLink: LinkObject;
    contents?: ContentObject[];
    buttons?: ButtonObject[];
  }

  export interface SendLocationParams {
    content: ContentObject;
    address: string;
    addressTitle?: string;
    buttons?: ButtonObject[];
  }

  export interface SendCommerceParams {
    content: ContentObject;
    commerce: CommerceDetailObject;
    buttons?: ButtonObject[];
  }

  export interface SendTextParams {
    text: string;
    link: LinkObject;
    buttonTitle?: string;
    buttons?: ButtonObject[];
  }

  export interface AccessTokenType {
    accessToken: string;
    remainingExpireTime: number;
    scopes: string[];
  }

  export interface ARNKakaoLinkResponseType {
    key: string;
    value: string;
  }

  export interface ARNKakaoLink {
    sendFeed: (data: SendFeedParams) => Promise<ARNKakaoLinkResponseType>;

    sendList: (data: SendListParams) => Promise<ARNKakaoLinkResponseType>;

    sendLocation: (
      data: SendLocationParams
    ) => Promise<ARNKakaoLinkResponseType>;

    sendCommerce: (
      data: SendCommerceParams
    ) => Promise<ARNKakaoLinkResponseType>;

    sendText: (data: SendTextParams) => Promise<ARNKakaoLinkResponseType>;

    sendURL: (url: string) => Promise<ARNKakaoLinkResponseType>;
  }

  export interface ARNKakaoLogin {
    getAccessToken: () => Promise<null | AccessTokenType>;
    login: () => Promise<null | AccessTokenType>;
    logout: () => Promise<"SUCCESS">;
  }

  export interface ARNKakaoChannel {
    addFriend: (id: string) => Promise<"SUCCESS">;
    chat: (id: string) => Promise<"SUCCESS">;
  }

  export interface KakaoSDK {
    link: ARNKakaoLink;
    login: ARNKakaoLogin;
    channel: ARNKakaoChannel;
  }

  export default KakaoSDK;
}
