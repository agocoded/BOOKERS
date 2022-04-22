
import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

class WelcomeScreen extends Component {
  render() {
    return (
      
        <View style={{ flex:1 , alignItems:'center', backgroundColor:'yellow'}}>

            <View style={{flex:1, justifyContent:'center' }}>
              <MaterialCommunityIcons name="book-open-variant" size={140} color="black" />
              <Text style={{fontSize:70, fontWeight:'400'}}>Book Lab</Text>
            </View>

            <View style={{flex:1, }}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('HomeScreen')}>
              <TextInput placeholder='Login' style={{ margin:5, borderColor:'green', borderWidth:0.5, width:200, padding: 10}}
              />
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignUpScreen')}>
              <TextInput placeholder='Sign Up' style={{margin:5, borderColor:'red', borderWidth:0.5, width:200, padding: 10}}
              />
              </TouchableOpacity>

              
            </View>

        </View>
    );
  }
}




export default WelcomeScreen;


