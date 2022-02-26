import React, { useRef } from "react";
import {StyleSheet, View, Text, TextInput, useWindowDimensions, TouchableOpacity} from 'react-native'
import { parameters, colors } from '../globals/styles';
import { Icon, Button, SocialIcon } from "react-native-elements";
import { TextCommon } from "@globals";
import { Header, Input } from "@components";


const SignInScreen = React.memo( () => {
  const title = "MY ACCOUNT";
  const [passFocus, setPassFocused] = React.useState(false);
  // const [textInput1, setTextInput1] = React.useState(1);
  // const [textInput2, setTextInput2] = React.useState(2);

  const pressLogin = () => {
    console.log('press login');
  }
  // React.useEffect(()=> { 
  
  // },[])

  return (
    <View style = {style.container}>
      <Header title = {title} type="arrow-left"/>
      <View>
        <Text style = {{marginStart: 20, marginTop: 10, color: colors.orange, fontWeight: '900', fontSize: 20}}>Sign-In</Text>
      </View>

      <View style= {{alignItems:'center'}}>
        <Text style={{...style.text1,width: useWindowDimensions().width - 150, textAlign:'center'}}>{TextCommon.descriptionLogin}</Text>
      </View>

      <View style = {{marginTop: 20}} >
        <View>
          <Input
            // ref={textInput1}
            placeHolder="Email"/>
        </View>
        <View>
          <Input 
            placeHolder="Password" 
            // ref={textInput2}
            onFocus={() => setPassFocused(false) }
            onBlur={ () => setPassFocused(true) }
            isPasswordInput />
        </View>
      </View>
      
      <View style = {{marginHorizontal: 20, marginVertical: 5}}>
        <Button title="Sign-In"
          onPress={pressLogin}
          buttonStyle = {parameters.styledButton}
          titleStyle = {parameters.buttonTitle} /> 
      </View>

      <View style = {style.forgotPassword}>
        <Text style = {{...style.text1, textDecorationLine: 'underline', marginTop: 5 }}>{TextCommon.forgotPassword}</Text>
      </View>

      <View style = {{alignItems: 'center', marginTop: 15, marginBottom: 10}}>
        <Text style = {{fontWeight: 'bold'}}>OR</Text>
      </View>

      <View style = {{marginHorizontal: 20, marginVertical: 5}}>
        <SocialIcon 
          title = 'Sign-in with Facebook'
          button
          type='facebook'
          style= {style.socialIcon}
          onPress = {() => {}} />
      </View>

      <View style = {{marginHorizontal: 20}}>
        <SocialIcon 
          title="Sign-In with Google"
          button
          type='google'
          style= {style.socialIcon}
          onPress = {() => {}} />
      </View>

      <View style = {{alignItems:'flex-end', marginHorizontal: 25, marginTop: 10}}>
        <Button
          title={TextCommon.createAccount}
          buttonStyle = {style.createButton}
          titleStyle = {style.createButtonTitle} />
      </View>
    </View>

  )
});

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  text1: {
    color: colors.grey3,
    fontSize: 16
  },
  forgotPassword: {
    alignItems: 'center',
  },
  socialIcon: {
    borderRadius: 12,
    height: 50
  },
  createButtonTitle: {
    color: colors.orange,
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent:'center',

  },
  createButton: {
    backgroundColor: colors.white,
    
    alignContent: 'center',
    justifyContent:'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.orange,
    height: 40,
    paddingHorizontal: 20,
  }
  
})

export default SignInScreen;