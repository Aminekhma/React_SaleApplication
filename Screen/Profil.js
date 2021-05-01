import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

export default class Profil extends React.Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  componentDidMount(){

  }

  render() {
      const titre = this.props.route.params.titre
      
    return (
        <View style={styles.container}>
          <ImageBackground source={require("../assets/backgroundim.png")}style={{width:"100%",height:"100%"}}>
            <StatusBar style="auto" />
            <Text style={styles.titre}>{titre}</Text>
            <Image style={styles.image} source={this.props.route.params.image}></Image>
            <View style={styles.paragraphe}>
              {this.props.route.params.description.map((s,k)=><Text style={styles.texte} key={k}>{s}</Text>)}
            </View>
          </ImageBackground>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex:1,
    justifyContent: 'center',
  },  
  titre:{
    marginTop : 50,
    fontSize: 30,
    fontStyle: "italic",
    textAlign :'center',
  },

  image:{
    alignSelf:"center",
    width:250,
    height:250,
  },

  paragraphe:{
    marginTop:40,
    flex:2,
  },

  texte:{
    textAlign:"center",
    fontSize:11,
  }
});
