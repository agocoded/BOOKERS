import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import {window} from '../utils/Dimensions';

const Welcome = ({navigation}) => {
    return (
      
      <SafeAreaView style={{ flex:1 ,}} >
        <View style={{ flex:1 , backgroundColor:'#fff'}}>

          <View style={{flex:3,}}>
            <Image 
            style={{ flex:1 ,borderBottomRightRadius:window.width, borderBottomLeftRadius:window.width, width: window.width*2,
                marginLeft: -(window.width/2),   }}
            source = {require ('../assets/images/mainImg.jpg')}
            />
          </View > 

          <View style={{flex:1.7,  marginHorizontal: '4%',
               alignItems:'center',}}>

            <Text style={{fontSize:35, fontWeight:'bold', margin:20}}>Read Everytime </Text>

            <View style={{ flex:1,  alignItems:'center' }}>
              <Text style={{fontSize:20, fontWeight:'400', margin:5 }} >Buy and read your favorite</Text>
              <Text style={{fontSize:20, fontWeight:'400', lineHeight:20}} >book with best price</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}
              style={{width: '77%', height: 60, position:'absolute', bottom:20, backgroundColor:'#FFB74D', alignItems:'center',
               justifyContent:'center', borderRadius:10,}}>
              <Text style={{fontSize:24, fontWeight:'bold',}}> Get Started</Text>
            </TouchableOpacity>

          </View>

        </View>
      </SafeAreaView>
    );
}



export default Welcome;


