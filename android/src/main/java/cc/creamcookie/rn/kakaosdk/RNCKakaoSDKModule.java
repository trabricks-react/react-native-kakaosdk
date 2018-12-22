
package cc.creamcookie.rn.kakaosdk;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.kakao.auth.AuthType;
import com.kakao.auth.ISessionCallback;
import com.kakao.auth.KakaoSDK;
import com.kakao.auth.Session;
import com.kakao.auth.authorization.accesstoken.AccessToken;
import com.kakao.util.exception.KakaoException;

import org.json.JSONObject;

import cc.creamcookie.rn.kakaosdk.impl.KakaoSDKAdapter;

public class RNCKakaoSDKModule extends ReactContextBaseJavaModule implements ActivityEventListener {

    private ReactApplicationContext reactContext;
    private KakaoSDKAdapter kakaoSDKAdapter;

    public RNCKakaoSDKModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
    return "RNCKakaoSDK";
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        if (Session.getCurrentSession().handleActivityResult(requestCode, resultCode, data)) {
            return;
        }
    }

    @Override
    public void onNewIntent(Intent intent) {

    }

    public void initKakaoSDK() {
        if (kakaoSDKAdapter == null) {
            kakaoSDKAdapter = new KakaoSDKAdapter(reactContext, AuthType.KAKAO_LOGIN_ALL);
            try {
                KakaoSDK.init(kakaoSDKAdapter);
            }
            catch(Exception ex) { }
        }
    }

    @ReactMethod
    public void login(Promise promise) {

        try {
            this.initKakaoSDK();

            Session.getCurrentSession().close();

            AuthType authType = AuthType.KAKAO_LOGIN_ALL;
            kakaoSDKAdapter.setAuthType(authType);

            Session.getCurrentSession().clearCallbacks();
            Session.getCurrentSession().addCallback(new SessionCallback(promise));
            Session.getCurrentSession().open(authType, reactContext.getCurrentActivity());
        }
        catch (Exception ex) {
            promise.reject(ex);
        }
    }


    @ReactMethod
    public void logout(Promise promise) {

        try {
            this.initKakaoSDK();
            Session.getCurrentSession().close();
            promise.resolve("SUCCESS");
        }
        catch (Exception ex) {
            promise.reject(ex);
        }
    }

    @ReactMethod
    public void getAccessToken(Promise promise) {

        try {
            this.initKakaoSDK();
            AccessToken token = Session.getCurrentSession().getTokenInfo();

            if (token.getAccessToken() == null) throw new Exception("Required login..");

            JSONObject o = new JSONObject();
            o.put("accessToken", token.getAccessToken());
            o.put("remainingExpireTime", token.getRemainingExpireTime());

            promise.resolve(o.toString());
        }
        catch (Exception ex) {
            promise.reject(ex);
        }

    }

    private class SessionCallback implements ISessionCallback {
        private Promise promise;

        public SessionCallback(Promise promise) {
            this.promise = promise;
        }

        @Override
        public void onSessionOpened() {
            if (this.promise != null) {
                getAccessToken(this.promise);
                Session.getCurrentSession().removeCallback(this);
                this.promise = null;
            }
        }

        @Override
        public void onSessionOpenFailed(KakaoException exception) {
            if (this.promise != null) {
                this.promise.reject(exception);
                Session.getCurrentSession().removeCallback(this);
                this.promise = null;
            }
        }

    }

}