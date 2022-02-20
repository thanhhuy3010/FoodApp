import React, { FC } from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native'
import { parameters, colors } from '../globals/styles';
import { Icon } from 'react-native-elements';

interface IProps {
  placeHolder?: string
  isPasswordInput?: boolean
  onFocus?: () => void
  onBlur?: () => void
}
const Input: FC<IProps> = React.memo(
  (props) => {
    return(
        <TextInput 
          secureTextEntry = {props.isPasswordInput}
          style = { styles.TextInput1} 
          // ref = {props.ref}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          placeholder={ props.placeHolder != '' ? props.placeHolder : ''} />
    )
  
  }) 
const styles = StyleSheet.create({
  TextInput1: {
    borderColor: '#86939e',
    borderWidth:1,
    marginBottom: 20,
    height:45,
    borderRadius:12,
    marginHorizontal:20,
    fontSize: 15,
    paddingStart: 10
  },
  // TextInput2: {
  //   borderColor: '#86939e',
  //   borderWidth:1,
  //   borderRadius:12,
  //   marginHorizontal:20,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignContent: 'center',
  //   alignItems: 'center'

  // }
})

export default Input;