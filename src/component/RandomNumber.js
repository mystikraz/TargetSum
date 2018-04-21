import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
export default class RandomNumber extends React.Component {
    
handlePress=()=>{
    console.log(this.props.number);
}

  render() {
    return (
    <TouchableOpacity onPress={this.handlePress}>
        <Text style={styles.random}>{this.props.number}</Text>
    </TouchableOpacity>
   );
  }
}

const styles = StyleSheet.create({
    random:{
        backgroundColor:'#999',
        width:100,
        marginHorizontal:15,
        marginVertical:25,
        fontSize:25,
        textAlign:'center',
    }
  
});