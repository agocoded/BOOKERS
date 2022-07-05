import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Register from '../screens/Register';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();


const screenOptionstyle = {
    headerShown: false,
};


export default function MainStack() {
  return (
      
    <Stack.Navigator screenOptions={screenOptionstyle}  > 
        
        <Stack.Screen name="Welcome" component={Welcome}  options={{headerShown: false} }/>
        <Stack.Screen name="Login" component={Login}  options={{headerShown: false} }/>
        <Stack.Screen name="Register" component={Register}  options={{headerShown: false} }/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{headerShown: false} }/>
        
    </Stack.Navigator>
  );
}
