declare module 'actbase-native-kakaosdk' {
    export type LinkObject = {
        webURL?: string;
        mobileWebURL?: string;
        androidExecutionParams?: string;
        iosExecutionParams?: string;
    }

    export type SocialObject = {
        likeCount?: number;
        commentCount?: number;
        sharedCount?: number;
        viewCount?: number;
        subscriberCount?: number;
    }

    export type CommerceDetailObject = {
        regularPrice: number;
        discountPrice?: number;
        discountRate?: number;
        fixedDiscountPrice?: number;
    }

    export type ButtonObject = {
        title: string;
        webURL?: string;
        mobileWebURL?: string;
        androidExecutionParams?: string;
        iosExecutionParams?: string;
    }

    export type ContentObject = {
        title: string;
        link: LinkObject;
        imageURL: string;
        desc?: string;
        imageWidth?: number;
        imageHeight?: number;
    }

    export type FeedObject = {
        content: ContentObject;
        social?: SocialObject;
        buttons?: ButtonObject[];
    }

    export type ListObject = {
        headerTitle: string;
        headerLink: LinkObject;
        contents?: ContentObject[];
        buttons?: ButtonObject[];
    }

    export type LocationObject = {
        content: ContentObject;
        address: string;
        addressTitle?: string;
        buttons?: ButtonObject[];
    }

    export type CommerceObject = {
        content: ContentObject;
        commerce: CommerceDetailObject;
        buttons?: ButtonObject[];
    }

    export type TextObject = {
        text: string;
        link: LinkObject;
        buttonTitle?: string;
        buttons?: ButtonObject[];
    }

    export class ANKakaoLink {
        sendFeed(data: FeedObject): Promise<any>;

        sendList(data: ListObject): Promise<any>;

        sendLocation(data: LocationObject): Promise<any>;

        sendCommerce(data: CommerceObject): Promise<any>;

        sendText(data: TextObject): Promise<any>;

        sendURL(data: string): Promise<any>;
    }

    export class ANKakaoLogin {
    }

    export class KakaoSDK {
        link: ANKakaoLink;
        login: ANKakaoLogin;
    }

    export default KakaoSDK;
}