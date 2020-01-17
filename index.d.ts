declare module "@actbase/react-native-kakaosdk" {
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

  export enum CoordType {
    KATEC = 1,
    WGS84 = 2
  }

  export enum RpOption {
    Fast = 1,
    Free = 2,
    Shortest = 3,
    NoAuto = 4,
    Wide = 5,
    Highway = 6,
    Normal = 8
  }

  export enum VehicleType {
    First = 1,
    Second = 2,
    Third = 3,
    Fourth = 4,
    Fifth = 5,
    Sixth = 6,
    TwoWheel = 7
  }

  export interface ARNKakaoNaviLocation {
    name: string;
    x: number;
    y: number;
  }

  export interface ARNKakaoNaviOptions {
    coordType?: CoordType;
    vehicleType?: VehicleType;
    rpoption?: RpOption;
    routeInfo?: boolean;
    startX?: number;
    startY?: number;
    startAngle?: number;
    userId?: string;
    returnUri?: string;
  }

  export type ARNKakaoNaviViaList = ARNKakaoNaviLocation[];

  export interface ARNKakaoNavi {
    share: (
      location: ARNKakaoNaviLocation,
      options?: ARNKakaoNaviOptions,
      viaList?: ARNKakaoNaviViaList
    ) => Promise<"SUCCESS">;
    navigate: (
      location: ARNKakaoNaviLocation,
      options?: ARNKakaoNaviOptions,
      viaList?: ARNKakaoNaviViaList
    ) => Promise<"SUCCESS">;
  }

  export interface KakaoSDK {
    link: ARNKakaoLink;
    login: ARNKakaoLogin;
    Channel: ARNKakaoChannel;
    Navi: ARNKakaoNavi;
  }

  export default KakaoSDK;
}
