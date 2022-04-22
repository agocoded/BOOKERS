import React, { Component } from 'react';
import { Text, View,} from 'react-native';

class Footer extends Component {
  render() {
    return (

        <View style={{flex:1, alignItems:'center', justifyContent:'center', }}> 
            <Text style={{fontSize: 20}}> {this.props.mode} </Text>
            <Text  style={{fontSize: 20}}> {this.props.count} </Text>
        </View>

    );
  }
}

  

export default Footer;