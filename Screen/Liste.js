import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Boutton from './Boutton';

import recetteParser from './recetteParser'
import bateauParser from './bateauParser'
import restaurantParser from './restaurantParser'



export default class Liste extends React.Component {
  constructor(props){
    super(props);
    this.state={
      L:[],
      titre:""
    }
    
  }

  
  componentDidMount(){

    this.recupererListe();
  }
  recupererListe(){
    
    if(this.props.route.params.titre ==="Restaurants"){
      this.setState({L:restaurantParser})
      this.setState({titre:"Restaurants partenaires"})
    }   
    if(this.props.route.params.titre ==="Bateaux"){
      this.setState({L:bateauParser})
      this.setState({titre:"Nos bateaux partenaires"})
    }
    if(this.props.route.params.titre ==="Recettes"){
      this.setState({L:recetteParser})
      this.setState({titre:"Nos recettes"})

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/backgroundim.png")}style={{width:"100%",height:"100%"}}>
        <StatusBar style="auto" />
          
        <Text style={styles.titre}>{this.state.titre}</Text>
          <Text>{this.state.phrase}</Text>
             <Text style={{textAlign:"center", fontStyle:"italic", flex:1}}>06.63.99.99.78{"\n"}lebateaudethibault@gmail.com{"\n"}www.facebook.com/lebateaudethibault</Text>
          <View style={styles.listBoutton}>
            <View style={{flexDirection:"row"}}>
              {this.state.L.map((s,k)=>{
                 if(k<2)return <View key={k} style={styles.bouton}><Boutton key={k} description={s.description} navigation={this.props.navigation} link="Profil" nom={s.titre} logo={s.logo} image={s.image}></Boutton></View>
              })}
              </View>
              <View style={{flexDirection:"row"}}>
              {this.state.L.map((s,k)=>{
                 if(k>=2 && k<4)return <View key={k} style={styles.bouton}><Boutton key={k} description={s.description} navigation={this.props.navigation} link="Profil" nom={s.titre} logo={s.logo} image={s.image}></Boutton></View>
              })}
              </View>
              <View style={{flexDirection:"row"}}>
              {this.state.L.map((s,k)=>{
                 if(k>=4)return <View key={k} style={styles.bouton}><Boutton key={k} description={s.description} navigation={this.props.navigation} link="Profil" nom={s.titre} logo={s.logo} image={s.image}></Boutton></View>
              })}
              </View>
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
    flex :1,
    fontSize: 30,
    fontStyle: "italic",
    textAlign :'center',
  },
  contenu:{
    flex:2,
    textAlign:"center",
  },
  listBoutton:{
    flex:2,
  },

  bouton:{
    flex:1,
  },
});