package com.rnbtn.button;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class Button extends ReactContextBaseJavaModule {

    @Override
    public String getName() {
        return "Button";
    }

    public Button(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void setUserIdentifier(final String userId){
        com.usebutton.sdk.Button.getButton(getReactApplicationContext()).setUserIdentifier(userId);
    }

    @ReactMethod
    public void logout(){
        com.usebutton.sdk.Button.getButton(getReactApplicationContext()).logout();
    }


    @ReactMethod
    public void getButtonRef(final Promise callback){
        try{
            String ref = com.usebutton.sdk.Button.getButton(getReactApplicationContext()).getReferrerToken();
            if(ref != null && !ref.isEmpty()){
                callback.resolve(ref);
            }else{
                callback.reject("getButtonRefError", "button ref is null or empty");
            }

        }catch (Exception e){
            callback.reject("getButtonRefError", e.getMessage());
        }
    }

}