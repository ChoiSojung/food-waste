import React, { Component } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, ListView, Image, Text, ImageBackground } from 'react-native';
//import data from './foods.json';
const heartIcon = require('./assets/heart.png');
const playIcon = require('./assets/play.png');
const volumeIcon = require('./assets/sound.png');
const hdIcon = require('./assets/hd-sign.png');
const fullScreenIcon = require('./assets/full-screen.png');
const flower = require('./assets/flower.jpg');
const remoteImage = { uri: `https://farm5.staticflickr.com/4702/24825836327_bb2e0fc39b_b.jpg` };

export default class App extends React.Component {
  constructor(props){
    super(props);
    const data = [
      {
        "id": "1",
        "name": "Abruzzese Sausage",
        "category": "Meat & Poultry",
        "isCooked": "No",
        "bestByDate": "May 15, 2016",
        "location": "Refrigerator",
        "isOpen": "No"
      },
      {
        "id": "2",
        "name": "Beef Burgers",
        "category": "Meat & Poultry",
        "isCooked": "Yes",
        "bestByDate": "January 17, 2019",
        "location": "Refrigerator",
        "isOpen": "Yes"
      }
    ];

    const Item = ({ name }) => (
      <View style={styles.item}>
        <Text style={styles.name}>{title}</Text>
      </View>
    );
  }

  renderItem = ({ item }) => (
    <Item name={item.name}/>
  );


  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Food Items</Text>
        <FlatList data = {this.data} renderItem = {this.renderItem} keyExtractor={item =>item.id}/>
      </SafeAreaView>
    );
  }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
      backgroundColor: '#0f1b29',
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      padding: 10,
      paddingTop: 40,
      textAlign: 'center',
    },
    row: {
      borderColor: '#f1f1f1',
      borderBottomWidth: 1,
      flexDirection: 'row',
      marginLeft: 10,
      marginRight: 10,
      paddingTop: 20,
      paddingBottom: 20,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16
    },
    iconContainer: {
      alignItems: 'center',
      backgroundColor: '#feb401',
      borderColor: '#feaf12',
      borderRadius: 25,
      borderWidth: 1,
      justifyContent: 'center',
      height: 50,
      width: 50,
    },
    icon: {
      tintColor: '#fff',
      height: 22,
      width: 22,
    },
    info: {
      flex: 1,
      paddingLeft: 25,
      paddingRight: 25,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 5,
    },
    category: {
      color: '#ccc',
      fontSize: 14,
    },
    total: {
      width: 80,
    },
    bestByDate: {
      fontSize: 12,
      marginBottom: 5,
    },
    location: {
      color: '#1cad61',
      fontSize: 25,
      fontWeight: 'bold',
    }
  });
