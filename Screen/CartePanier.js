import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Bar from './Bar';

export default class CartePanier extends React.Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  componentDidMount(){
  }

  render() {
    console.log(this.props.item)
      
    return (
      <View>
          <ImageBackground source={require("../assets/backgroundim.png")}style={{width:"100%",height:"100%"}}>
            <TouchableOpacity>
              <Text>test</Text>
            </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
}