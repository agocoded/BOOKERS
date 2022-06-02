import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Footer from '../component/Footer';

class HomeScreen extends Component {

  constructor(){
    
    super();
    this.state = {
      totalCount:0,
      readingCount:0,
      readCount:0,
      showvisible:false,
      textInputData: '',
      books:[],

    };
  }


  show = () => {
    this.setState({showvisible:true});
  };

  dontShow = () => {
    this.setState({showvisible:false});
  };


  addBook = (book) => {
    this.setState((state,props) => ({
      books:[...state.books, book],
      totalCount:state.totalCount+1,
      readingCount:state.readingCount+1,
    })
    // , 
    // () => {console.log(this.state.books);
    // }
    );
  };

  markAsRead = (selectedItem, index) => {
    let newList = this.state.books.filter(book => book !== selectedItem);
    this.setState(prevState => ({
      books:newList,
      readingCount: prevState.readingCount -1,
      readCount: prevState.readCount +1,
    }));
  };


  markAsRead = (selectedItem, index) => {
    let newList = this.state.books.filter(book => book !== selectedItem);

    this.setState(prevState => ({
      books:newList,
      readingCount: prevState.readingCount -1,
      readCount: prevState.readCount +1,
    }));
  };


  rendItem = (item, index) => (

    <View style={{ height:50, width:'100%', flexDirection:'row', marginTop:1}}>

      <View style={{ backgroundColor:'grey', flex:1, justifyContent:'center',
      alignItems:'center'}}>
        <Text> {item} </Text>
      </View>

      <TouchableOpacity onPress={() => this.markAsRead(item, index)}>
        <View style={{width:100, height:50, backgroundColor:'green', 
          justifyContent: 'center', alignItems:'center' }}>
          <Text>Mark As Read</Text>
        </View>
      </TouchableOpacity>
    </View>

  );

  

  render() {
    return (

      <View style={{ flex: 1 }}>

        <View  style={{ height:70, backgroundColor: 'powderblue', alignItems: 'center', justifyContent:'center'}} >
          <Text style={{fontSize:30}}> My Book Lab</Text>
        </View>
        
        <View style={{ flex: 1,}}>

            {/* controlling the showing of the TextInput */}

            { this.state.showvisible && (
          <View style={{height:50, flexDirection:'row'}}>

            <TextInput
            style={{flex:1, backgroundColor:'#ececec', paddingLeft:5 }}
            placeholder='Enter Book Name'
            placholderTextColor='grey'
            onChangeText={(text)=>this.setState({textInputData:text})}
            />
            
            <TouchableOpacity style={{width:50, backgroundColor:'green'}}
            onPress={()=>this.addBook(this.state.textInputData)}> 
             
            </TouchableOpacity>

            <TouchableOpacity style={{width:50, backgroundColor:'red'}}
            onPress= {this.dontShow}>  
            
            </TouchableOpacity>
            
          </View>
            )}

          
          <FlatList
            data={this.state.books}
            renderItem = {({item}, index) => this.rendItem(item, index)}
            keyExtractor = {(item, index) => index.toString()}
            ListEmptyComponent = {
              <View style={{marginTop:5, alignItems:'center'}}> 
                <Text>Not Reading Any Book...</Text>
              </View>
            }
          />
            

          <TouchableOpacity style={{position:'absolute', bottom:20, right:20,
          }}  onPress={this.show}>

            <View style={{borderRadius:25, height:50, width:50,backgroundColor:"black", justifyContent:'center', alignItems:'center',  }}>
              <Text style={{fontSize:30, color: 'white',}}>+</Text>
            </View>

          </TouchableOpacity>
          
        </View>

        <View style={{ height:70, backgroundColor: 'steelblue', flexDirection:'row' }} >

          <Footer count ={this.state.totalCount}  mode="Total"/>
          <Footer count ={this.state.readingCount}  mode="Reading"/>
          <Footer count ={this.state.readCount}  mode="Read"/>


          
        </View>
        
        

      </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
  

export default HomeScreen;