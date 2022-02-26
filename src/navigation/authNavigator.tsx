import { createStackNavigator, TransitionPreset, TransitionPresets } from "@react-navigation/stack";
import React from "react";
import { SignInScreen, SignInWelcomeScreen } from "@screens";

const AuthStackNavigator = createStackNavigator();

const AuthStack = () => {
  const {Screen, Navigator} = AuthStackNavigator;
  return (
    <Navigator>
      <Screen 
        name="SignInWelcomeScreen"
        component={SignInWelcomeScreen}
        options= {{
          ...TransitionPresets.RevealFromBottomAndroid
        }}
      />
      <Screen 
        name="SignInScreen"
        component={SignInScreen}
      />

    </Navigator>
  )
};

export default AuthStack;