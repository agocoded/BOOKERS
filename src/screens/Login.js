import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback, StatusBar } from 'react-native';
import {window} from '../utils/Dimensions';
import colors from '../utils/colors';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect( () => {
    const unsubscribe = auth.onAuthStateChanged(user =>{
        if (user){
          navigation.navigate('HomeScreen', {user})
        }
        else{
          navigation.navigate('Login')
        }
    })
    
    return unsubscribe

  }, [])

  
  const login = () => {

    if(email === '' && password === ''){
      alert('Welcome, please sign-in')
    }
    else{
      setIsLoading(true);

      signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
            switch(error.code){
              case 'auth/user-not-found':
                alert('A user with that email does not exist. Please ty signing-in');
              break;
              case 'auth/invalid-email':
                alert('Please enter a valid email address')
            }
        })
      .then( (result) =>{
        // setSignedIn(true);
        setIsLoading(false);
        
      })
    }
  }; 

  return (
    <SafeAreaView style={styles.safeA}  >

      <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} 
       style={{flex:1, width: '85%', position:'absolute', bottom: window.height * 0.1,    }}>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1}} >
        <View >
          <Text style={{color:'#000', fontSize: 35, fontWeight:'800'}}>Hey,</Text>
          <Text style={{color:'#000', fontSize: 35, fontWeight:'800', marginBottom:7}}>Login Now</Text>

          <View style={{flexDirection:'row', width: '100%', height:30, marginBottom:10, alignItems:'center', }}>

            <Text style={{color: '#999999', fontSize: 15, fontWeight:'500', marginRight:5}}>New User?</Text>
          
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{color: "#FFB74D", fontSize: 15, fontWeight:'500'}}>SignUp</Text>
            </TouchableOpacity>

          </View>

        

          <TextInput
            style={[styles.input, { marginTop:40, } ]}
            placeholder="Enter Username"
            placeholderTextColor={'#ADADAD'}
            keyboardType = "default"
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor={'#ADADAD'}
            keyboardType = "default"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />


          { isLoading?
          (
            <View style={{ marginTop:10}}>
              <ActivityIndicator size="large" color="#FFB74D"/>
            </View>
          ) 
          :
          (
            <TouchableOpacity   onPress={login}          
              style={{width: '77%', height: 60, alignSelf:'center', backgroundColor:'#FFB74D', alignItems:'center', marginTop:20, justifyContent:'center', borderRadius:10,}}>
              <Text style={{fontSize:24, fontWeight:'bold',}}>Login</Text>
          </TouchableOpacity> 
          )
          }


        </View>
        </TouchableWithoutFeedback>
        
      </KeyboardAvoidingView>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    width:'100%',
    height:70,
    marginTop:30,
    borderWidth: 1,
    padding: 10,
    borderWidth:1,
    borderRadius:15,
    backgroundColor: "#ffebcc" ,
    borderColor: "#ffebcc" ,
    color:'#1a0f00',
    fontSize: 18,
    fontWeight:'500',
    
    
  },
  safeA:{
    flex:1, 
    backgroundColor: "#fff", 
    alignItems:'center' ,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
  },

  login:{
    width:'100%', 
    height:70, 
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor: colors.iconRed, 
    borderRadius:15,
    marginTop:50,
  }

})