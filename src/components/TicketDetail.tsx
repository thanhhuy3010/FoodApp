import React from "react";
import {View, Text, StyleSheet,} from 'react-native';

const TicketDetail = () => {
  return (
    <View style = {{ borderRadius:6, borderWidth:1, borderColor:'gray', margin: 10,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width:1 ,height:1},
    shadowColor: '#333',
    shadowOpacity: 0.3}}>

      <View style={styles.row}>
        <View style={styles.item}>
          <Text>Dia Diem</Text>
        </View>
        <View style={[styles.item, {alignItems:'flex-end'}]}>
          <Text style= {{...styles.text}} numberOfLines= {1}>TP. HO CHI MINH</Text>
        </View>
      </View>

    </View>
  )
}

export default TicketDetail;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: 10
  },
  item: {
    // flex:1,
    // width: 100,
    margin: 10,
    // backgroundColor:'blue'
  },
  text: {
  }
})