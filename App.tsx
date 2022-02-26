import React from "react";

import { View ,StyleSheet, Text, StatusBar} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "./src/globals/styles";
import {RootNavigator} from "@navigation";
import { SignInWelcomeScreen } from "@screens";


type Response = {
  userId: number,
  id:  number,
  title: string,
  body: string
} 
const App = () => {
  /**
   * search and filter
   */
  const [filterData, setFilterData] = React.useState([]);
  const [masterData, setMasterData] = React.useState([]);
  const [search, setSearch] = React.useState('')
  const unmounted = React.useRef(false);

  React.useEffect(() => {
    unmounted.current = true;
    if (unmounted) {
      fetchPost();
    }
    return () => {
      unmounted.current = false;
    }
  }, [])
  const fetchPost = () => {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(apiURL)
      .then((response) => response.json())
      .then( responseJson => {
        // console.log("This is response: ",responseJson);
        setFilterData(responseJson);
        setMasterData(responseJson);
        
      }).catch( err => {
        console.log(err);
      })
  }

  const getData = async () => {
    
  }

  const callAPI = () => {
    return new Promise((resolve, reject) => {
      
    })
  }

  const searchFilter = (text: string) => {
    if (text) {
      const newData = masterData.filter((item: Response) => {
        const itemData = item.title 
                                  ? item.title.toUpperCase() 
                                  : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1
      })
      setFilterData(newData)
      setSearch(text);
    } else {
      setFilterData(masterData)
      setSearch(text);
    }

  }

  const ItemView = ({item}: {item: Response}): JSX.Element => {
    return (
      <Text style = {styles.itemStyle}>
        {item.id}{'. '}{item.title.toUpperCase()} 
      </Text>
    )
  }

  const ItemSeparatorView = (): JSX.Element => {
    return (
      <View style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}} ></View>
    )
  }
   
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor = {colors.statusBar}
      />
      {/* <RootNavigator /> */}

      <SignInWelcomeScreen />

    </View>
    
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  },
  itemStyle: {
    padding: 10
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',

  }
})

export default App;