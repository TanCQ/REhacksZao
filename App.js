/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import DetailCard from './components/DetailCard';
import CreateNewTrip from './components/CreateNewTrip';
import ListMyZao from './components/ListMyZao';



  // render() {
  //   return (<View>
  //     <DetailCard  dropOffPoint = 'Sengkang' pickUpPoint = 'Binjai Hall' pickUpTime = '1130' numberOfPeople = {2} />
  //     <DetailCard  dropOffPoint= 'Tampines' pickUpPoint= 'Northspine' pickUpTime = '1830' numberOfPeople = {3} />
  //     <DetailCard  dropOffPoint= 'Bishan' pickUpPoint = 'Nanyang Auditorium' pickUpTime='1430' numberOfPeople ={1} />

  //     </View>
  //   );
  


  class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Details!</Text>
        </View>
      );
    }
  }
  
  class MyZao extends React.Component {
    render() {
      return (
        <View style= {styles.container}>
          <ImageBackground 
        source={require('./assets/header.png')}
        style={styles.top}>
          </ImageBackground>
         <ListMyZao navigation= {this.props.navigation}/>
        <View style={styles.bottom}>
        <Button
            title="Zao Together?"
            onPress={() => this.props.navigation.navigate('ExistingZao')}
          />
          </View>
        </View>
      );
    }
  }
  
  class ExistingZao extends React.Component {
    render() {
      return (
        <View style= {styles.container}>
        <ImageBackground 
          source={require('./assets/header3.png')}
          style={styles.top}>
        </ImageBackground>
       
        <DetailCard  navigation= {this.props.navigation} dropOffPoint = 'Sengkang' pickUpPoint = 'Binjai Hall' pickUpTime = '1130' numberOfPeople = {2} />
        <DetailCard  navigation= {this.props.navigation} dropOffPoint= 'Tampines' pickUpPoint= 'Northspine' pickUpTime = '1830' numberOfPeople = {3} />
        <DetailCard  navigation= {this.props.navigation} dropOffPoint= 'Bishan' pickUpPoint = 'Nanyang Auditorium' pickUpTime='1430' numberOfPeople ={1} /> 
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('MyZao')}
          />
        </View>
      );
    }
  }
  
  class AddNewZao extends React.Component {
    render() {
      return (
        <View style= {styles.container}>
        <ImageBackground 
      source={require('./assets/header2.png')}
      style={styles.top}>
        </ImageBackground>
      <CreateNewTrip navigation = {this.props.navigation}/>
       
      {/* <View style={styles.bottom}>
      <Button
          title="Confirm?"
          onPress={() => this.props.navigation.navigate('ExistingZao')}
        />
        </View> */}
      </View>
    );
  }
}
  
  const ExistingStack = createStackNavigator({
    ExistingScreen: ExistingZao,
    Details: DetailsScreen,
  });
  
  const AppNavigator = createMaterialBottomTabNavigator({
    MyZao: {screen: MyZao,
      navigationOptions:{
        tabBarLabel:'My Zao',
        tabBarIcon:({tintColor}) =>( 
         <Icon name='ios-time' color={tintColor} size={24} />
          )
      }
    },
    ExistingZao: { screen: ExistingZao,
      navigationOptions:{
      tabBarLabel:'Existing Zaos',
      tabBarIcon:({tintColor}) =>( 
       <Icon name='ios-car' color={tintColor} size={24} />
        )
    }
      
    },
    AddNewZao: { screen: AddNewZao,
      navigationOptions:{
        tabBarLabel:'Create Zaos',
        tabBarIcon:({tintColor}) =>( 
         <Icon name='ios-add-circle-outline' color={tintColor} size={24} />
          )
      }
     },
  },
   {
    initialRouteName: 'ExistingZao',
    activeColor: '#F8F8F8',
    inactiveColor: '#009999',
    barStyle: { backgroundColor: '#1a8080' },
    shifting: true,
  }
  );
  
  const AppContainer = createAppContainer(AppNavigator);
  
  export default class App extends React.Component {

    render() {

      return <AppContainer />
    }
  };



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#009999',
    width: '100%',
    height: '100%',
    alignContent: "flex-start",
    // marginTop: "2%",
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: "#009999",
  },
  top: {
    height:"35%",
    width:"100%",
  },
  bottom: {
    bottom: "0%",
    marginBottom: "10%",
    alignContent: "flex-end",
  },
  nomore: {
    color: "#fff",
    fontSize: 22,
    borderColor: "#fff",
    borderWidth: 2,
    padding: 20,
    backgroundColor: 'rgba(255,255,255, .1)',
    justifyContent: "center",
    textAlign: "center",
  }
});