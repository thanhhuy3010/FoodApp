import React from 'react';
import { FlatList, StyleSheet, Text, View, } from 'react-native';
import { Card } from 'react-native-elements';
import { IResult } from 'services';

const TicketList = ({ticketList = []} : {ticketList: IResult[]}) => {
  const [data, setData] = React.useState(ticketList);
  const renderItem = ({item, index} :{item: IResult, index: number}) => {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text>{item.Name}</Text>
          </View>
        </View>

      </View>
    )
  }
  return (
    <View style = {styles.container}>
      <FlatList 
        data={data}
        renderItem = {renderItem}
      />
    </View>
  )
};
export default TicketList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width:1 ,height:1},
    shadowColor: '#333',
    shadowOpacity: 0.3
  },
  cardTitle: {

  }
})