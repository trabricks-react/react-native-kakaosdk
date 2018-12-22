
#import "RNCKakaoSDK.h"
#import <KakaoOpenSDK/KakaoOpenSDK.h>

@implementation RNCKakaoSDK

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

- (BOOL)isLogin
{
    return [[KOSession sharedSession] isOpen];
}

- (NSDictionary *)getAccessToken
{
    if ([self isLogin]) {
        KOToken * token = [KOSession sharedSession].token;
        NSDictionary * result = @{ @"accessToken": token.accessToken,
                                   @"remainingExpireTime" : token.remainingExpireTime,
                                   @"scopes" : token.scopes
                                   };
        
        return result;
    }
    else {
        return nil;
    }
}

RCT_REMAP_METHOD(getAccessToken,
                 accessTokenWithResolver: (RCTPromiseResolveBlock)resolve rejecter: (RCTPromiseRejectBlock)reject) {
    @try {
        resolve([self getAccessToken]);
    }
    @catch(NSException * e) {
        NSLog(@"%@", e);
        NSLog(@"ERRORR....");
        reject(@"RNCKakaoSDK", e.userInfo.description, nil);
    }
}

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

RCT_REMAP_METHOD(logout,
                 logoutWithResolver: (RCTPromiseResolveBlock)resolve rejecter: (RCTPromiseRejectBlock)reject) {
    
    [[KOSession sharedSession] close];
    [[KOSession sharedSession] logoutAndCloseWithCompletionHandler:^(BOOL success, NSError *error) {
        if (!success) {
            reject(@"RNCKakaoSDK", error.userInfo.description, nil);
        }
        else {
            resolve(@"SUCCESS");
        }
    }];
    
}

@end
  
