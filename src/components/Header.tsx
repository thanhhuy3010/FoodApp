import React, { FC } from 'react';
import {StyleSheet, View, Text} from 'react-native'
import { parameters, colors } from '../globals/styles';
import { Icon } from 'react-native-elements';

interface IProps {
  title: string
  type: string
}
const Header: FC<IProps> = (props) => {
  const {title, type} = props
  return(
    <View style = {styles.header}>
      <View style = {{marginStart: 20, justifyContent:'center'}}>
        <Icon 
          type = "material-community"
          name = {type}
          color = {colors.headerText}
          tvParallaxProperties
          size = {28}
          onPress = { () => {}} />

      </View>
      <View style = {{justifyContent: 'center'}}>
        <Text style = {styles.headerText}>{title}</Text>
      </View>
    </View>
  )

}
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.buttons,
    flexDirection: 'row',
    height: parameters.headerHeight,

  },
   headerText: {
     color: colors.headerText,
     marginStart: 14,
     alignSelf: 'center',
     fontSize: 20,
     fontWeight: "bold",
   }
})

export default Header;