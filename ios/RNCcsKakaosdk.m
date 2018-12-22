
#import "RNCcsKakaosdk.h"
//#import <KakaoOpenSDK/KakaoOpenSDK.h>

@implementation RNCcsKakaosdk

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()


RCT_REMAP_METHOD(login,
                 loginWithResolver: (RCTPromiseResolveBlock)resolve
                 rejecter: (RCTPromiseRejectBlock)reject) {

    //
//
//    [[KOSession sharedSession] close];
//    [[KOSession sharedSession] openWithCompletionHandler:^(NSError *error) {
//
//        NSLog(@"%@", error);
//
//    }];
    
}

@end
  
