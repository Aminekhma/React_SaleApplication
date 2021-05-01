import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Bar extends React.Component {

  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity style={styles.bouttonHome} onPress={()=>this.props.navigation.navigate("Home")}>
        <Image source={require("../assets/homeLogo.png")} style={{width:45,height:45}}/>
        </TouchableOpacity>
          
          <Text style={{color:"white"}}>Le bateau de Thibault</Text>
          <TouchableOpacity style={styles.bouttonCart} onPress={()=>this.props.navigation.navigate("Panier")}>
            
              <Image source={require("../assets/cartLogo.png")} style={{width:45,height:45}}/>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"black",
    alignItems: "center",
    height:"10%"
  },
  bouttonHome:{
    marginLeft: "10%",
  },
  bouttonCart:{
    marginRight: "10%",
  },
  im:{
    height:"100px",
    width:"100px",
  }
});


