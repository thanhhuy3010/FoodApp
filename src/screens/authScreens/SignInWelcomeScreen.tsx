import React, { useRef } from "react";
import {StyleSheet, View, Text, TextInput, useWindowDimensions, TouchableOpacity} from 'react-native'
import { parameters, colors } from '../../globals/styles';
// import Header from "../../components/Header";
import { Icon, Button, SocialIcon } from "react-native-elements";
import { TextCommon } from "../../globals/constant";
// import { Input } from "components";
// import Input from "components/Input";
interface IProps {
  text: string
}
const SignInWelcomeScreen = React.memo(() => {
    
    return (
      <View style = {styles.container}>
        <View style = {styles.titleContainer}>
          {/* <Input /> */}
          <Text style={{...styles.text1,width: useWindowDimensions().width - 150, textAlign:'center'}}>{TextCommon.descriptionLogin}</Text>
        </View>
      </View>
    )
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    alignItems: 'center'
  },
  titleText: {

  },
  text1: {
    color: colors.grey3,
    fontSize: 16
  },
})
export default SignInWelcomeScreen;