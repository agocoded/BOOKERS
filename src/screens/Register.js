import React, {useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    ActivityIndicator, 
    KeyboardAvoidingView, 
    Keyboard, 
    Platform, 
    TouchableWithoutFeedback, 
    StatusBar,
    SafeAreaView, 
    } from 'react-native';
import {window} from '../utils/Dimensions';
import colors from '../utils/colors';
import {auth} from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function Register({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const Register = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then( (result) => {
      console.log(result);
      alert('Registered Successfully');
      navigation.navigate('Login')
    })
    .catch( (error) => {
      if(error.code === 'auth/email-already-in-use' ){
        alert('Email available, please try to login.')
      }
    })
  }


  return (

    <SafeAreaView style={styles.safeA} >
      <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={{flex:1, width: '85%', position:'absolute', bottom: window.height * 0.1,}} >

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >

        <View >
          <Text style={{color:'#000', fontSize: 35, fontWeight:'800'}}>Hey,</Text>
          <Text style={{color:'#000', fontSize: 35, fontWeight:'800', marginBottom:7}}>New Here?</Text>

          <View style={{flexDirection:'row', width: '100%', height:30, marginBottom:10, alignItems:'center', }}>

            <Text style={{color: '#999999', fontSize: 15, fontWeight:'500', marginRight:5}}>already a User ?</Text>
          
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{color: "#FFB74D", fontSize: 15, fontWeight:'500'}}>Login</Text>
            </TouchableOpacity>

          </View>

        

          <TextInput
            style={[styles.input, { marginTop:50,} ]}
            placeholder="Enter Username"
            placeholderTextColor={'#ADADAD'}
            keyboardType = "default"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor={'#ADADAD'}
            keyboardType = "default"
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity   onPress={Register}          
            style={{width: '77%', height: 60, backgroundColor:'#FFB74D', alignItems:'center', marginTop:20,justifyContent:'center', borderRadius:10, alignSelf:'center'}}>
            <Text style={{fontSize:24, fontWeight:'bold',}}>Register</Text>
          </TouchableOpacity>


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