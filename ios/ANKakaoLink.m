//
//  ANKakaoLink.m
//  RNCKakaoSDK
//
//  Created by Suhan Moon on 2019/11/03.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "ANKakaoLink.h"
#import <KakaoLink/KakaoLink.h>
#import <KakaoMessageTemplate/KakaoMessageTemplate.h>

@implementation ANKakaoLink

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE(ANKakaoLink)


- (void) sendWithTemplate: (KMTTemplate *)template resolver: (RCTPromiseResolveBlock)resolve rejecter: (RCTPromiseRejectBlock)reject
{
    [[KLKTalkLinkCenter sharedCenter] sendDefaultWithTemplate:template success:^(NSDictionary<NSString *,NSString *> * _Nullable warningMsg, NSDictionary<NSString *,NSString *> * _Nullable argumentMsg) {

        resolve(argumentMsg);

    } failure:^(NSError * _Nonnull error) {
        reject(error);
    }];
}


RCT_REMAP_METHOD(login,
                 loginWithResolver: (RCTPromiseResolveBlock)resolve rejecter: (RCTPromiseRejectBlock)reject) {
    
    [[KOSession sharedSession] close];
    [[KOSession sharedSession] openWithCompletionHandler:^(NSError *error) {
        if (![[KOSession sharedSession] isOpen]) {
            reject(@"RNCKakaoSDK", error.userInfo.description, nil);
        }
        else {
            resolve([self getAccessToken]);
        }
     }];
    
}


@end
