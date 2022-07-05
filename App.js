import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigations/MainStack';


export default function App() {
    return (
      <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
    )
};


