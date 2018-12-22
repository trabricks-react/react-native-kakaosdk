
package cc.creamcookie.rn.kakaosdk;

import android.content.Context;
import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.kakao.auth.ApprovalType;
import com.kakao.auth.AuthType;
import com.kakao.auth.IApplicationConfig;
import com.kakao.auth.ISessionCallback;
import com.kakao.auth.ISessionConfig;
import com.kakao.auth.KakaoAdapter;
import com.kakao.auth.KakaoSDK;
import com.kakao.auth.Session;
import com.kakao.util.exception.KakaoException;

public class RNCKakaoSDKModule extends ReactContextBaseJavaModule {

    private final String LOG_TAG = this.getName();

    private final ReactApplicationContext reactContext;
    private SessionCallback sessionCallback;

    public RNCKakaoSDKModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
    return "RNCKakaoSDK";
    }

    @ReactMethod
    public void login(Promise promise) {

        try {
            KakaoSDK.init(new KakaoSDKAdapter(reactContext));
        }
        catch(Exception ex) { }

        this.sessionCallback = new SessionCallback(promise);
        Session.getCurrentSession().addCallback(sessionCallback);
        Session.getCurrentSession().open(AuthType.KAKAO_LOGIN_ALL, reactContext.getCurrentActivity());
    }


    @ReactMethod
    public void logout(Promise promise) {

    }

    @ReactMethod
    public void getAccessToken(Promise promise) {


        promise.resolve(null);

    }

    private static class KakaoSDKAdapter extends KakaoAdapter {
        private Context context;
        public KakaoSDKAdapter(ReactApplicationContext context) {
            this.context = context.getApplicationContext();
        }

        /**
         * Session Config에 대해서는 default값들이 존재한다.
         * 필요한 상황에서만 override해서 사용하면 됨.
         * @return Session의 설정값.
         */

        @Override
        public ISessionConfig getSessionConfig() {
            return new ISessionConfig() {
                @Override
                public AuthType[] getAuthTypes() {
                    return new AuthType[] {AuthType.KAKAO_LOGIN_ALL};
                }

                @Override
                public boolean isUsingWebviewTimer() {
                    return false;
                }

                @Override
                public boolean isSecureMode() {
                  return false;
                }

                @Override
                public ApprovalType getApprovalType() {
                    return ApprovalType.INDIVIDUAL;
                }

                @Override
                public boolean isSaveFormData() {
                    return true;
                }
            };
        }

        @Override
        public IApplicationConfig getApplicationConfig() {
            return new IApplicationConfig() {
                @Override
                public Context getApplicationContext() {
                    return KakaoSDKAdapter.this.context;
                }
            };
        }
    }


  private class SessionCallback implements ISessionCallback {
    private final Promise promise;

    public SessionCallback(Promise promise) {
      this.promise = promise;
    }

//        private CallbackContext callbackContext;
//
//        public SessionCallback(final CallbackContext callbackContext) {
//            this.callbackContext = callbackContext;
//        }

    @Override
    public void onSessionOpened() {
      Log.v(LOG_TAG, "kakao : SessionCallback.onSessionOpened");
//      requestMe(new MeResponseCallback() {
//        @Override
//        public void onFailure(ErrorResult errorResult) {
//          removeCallback();
//          promise.reject("onFaileure", "로그인 실패");
////                    callbackContext.error("kakao : SessionCallback.onSessionOpened.requestMe.onFailure - " + errorResult);
//        }
//
//        @Override
//        public void onSessionClosed(ErrorResult errorResult) {
//          Log.v(LOG_TAG, "kakao : SessionCallback.onSessionOpened.requestMe.onSessionClosed - " + errorResult);
//          Session.getCurrentSession().checkAndImplicitOpen();
//        }
//
//        @Override
//        public void onSuccess(UserProfile userProfile) {
//          removeCallback();
//          WritableMap userMap = convertMapUserProfile(userProfile);
////                    Log.d("userMap::::", userMap.toString());
//          promise.resolve(userMap);
//        }
//
//
//
//        @Override
//        public void onNotSignedUp() {
//          removeCallback();
//          promise.reject("onNotSignedUp", "로그인 취소");
////                    callbackContext.error("this user is not signed up");
//        }
//        private void removeCallback(){
//          Session.getCurrentSession().removeCallback(sessionCallback);
//        }
//      });
    }

    @Override
    public void onSessionOpenFailed(KakaoException exception) {
        this.promise.reject(exception);
//      if (exception != null) {
//        Log.v(LOG_TAG, "kakao : onSessionOpenFailed" + exception.toString());
//      }
    }
  }

}