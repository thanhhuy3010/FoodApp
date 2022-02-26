import React, { useRef } from "react";
import {StyleSheet, View, Text, TextInput, useWindowDimensions, TouchableOpacity, Dimensions, FlatList} from 'react-native'
import { parameters, colors } from '@globals';
import { Icon, Button, SocialIcon } from "react-native-elements";
import { TextCommon } from "@globals";
import { getData, IResult } from '@services';
import { data } from "@common";
import { TicketDetail, TicketList } from "@components";
interface IProps {
  text: string
}

const SignInWelcomeScreen = React.memo(() => {
    Dimensions.get('window');
    const arr: IResult[] = []; 
    const [ticketList , setTicketList] = React.useState(arr);
    React.useEffect(() => {
      const list = data;
      const {Result} = list;
      setTicketList(Result);
    }, []);

    return (
      <View style = {styles.container}>
        <View style = {styles.titleContainer}>


        </View>
        {/* <TicketList 
            ticketList = {ticketList}
          /> */}
        <TicketDetail />
      </View>
    )
});

export default SignInWelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    alignItems: 'center'
  },
  titleText: {
    color: colors.grey3,
    fontSize: 16,
    width: Dimensions.get('window').width, 
    textAlign:'center'
  },
  text1: {
    color: colors.grey3,
    fontSize: 16
  },
})
