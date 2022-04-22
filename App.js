import 'react-native-gesture-handler';

import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import WelcomeScreen from './screens/AppSwitchNavigator/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';

import {  createSwitchNavigator, createAppContainer,  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';


const App = () => {

  return(
    
    <AppContainer/>

  );
};




const LoginStackNavigator = createStackNavigator ({
  WelcomeScreen:{
    screen: WelcomeScreen,
    navigationOptions:{
      headerShown: false,
    }
  },
  
  SignUpScreen:{
    screen: SignUpScreen,
    navigationOptions: {}
  }
});


const Drawer = createDrawerNavigator ({
  HomeScreen
});


const AppSwitchNavigator = createSwitchNavigator({
  LoginStackNavigator,
  Drawer,
});

const AppContainer = createAppContainer (AppSwitchNavigator);


export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
