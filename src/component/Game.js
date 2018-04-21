import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import RandomNumber from './RandomNumber'
export default class Game extends React.Component {
    static propTypes={
        randomNumberCount:PropTypes.string.isRequired,
    };
randomNumbers=Array.from({length:this.props.randomNumberCount})
.map(()=>1+Math.floor(10*Math.random()));
target=this.randomNumbers.slice(0,this.props.randomNumberCount-2)
.reduce((acc, curr)=>acc+curr,0);
//TODO:Shuffle the random numbers
  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.target}>{this.target}</Text>
            <View style={styles.randomContainer}>
                {this.randomNumbers.map((randomNumber,index)=>
               <RandomNumber key={index} number={randomNumber}/>
            //    <Text style={styles.random} key={index}>{randomNumber}</Text>
                )}
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    flex:1,
    paddingTop:30,
  },
  target:{
      fontSize:40,
      backgroundColor:'#aaa',
      marginHorizontal:50,
      textAlign:'center',
      color:'#000',
  },
  randomContainer:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around'
  },
 
});
