
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Boutton from "./Boutton"


export default class Home extends React.Component {

  render() {
    return (
      
      <View style={styles.container}>
        <ImageBackground source={require("../assets/backgroundim.png")}style={{width:"100%",height:"100%"}}>
        <StatusBar style="auto" />
        <Text style={styles.titre}>Le bateau de Thibault</Text>
        <View style={styles.contenu}>
          <Text style={{textAlign:"center"}}>Vente en direct de notre bateau{"\n"}Produit selon la saison, Livraison sur Paris</Text>
          <Text style={{textAlign:"center", fontStyle:"italic"}}>06.63.99.99.78{"\n"}lebateaudethibault@gmail.com{"\n"}www.facebook.com/lebateaudethibault</Text>
        </View>
        <View style={styles.listBoutton}>
          <Boutton style={styles.boutton1} navigation={this.props.navigation} logo ={require("../assets/logo/poisson.png")} link="Produit" nom="Produit et promotion"></Boutton>
          
          <View style={styles.boutton2}>
            <View style={{flexDirection:"row"}}>
              <View style={styles.bouton}>
                <Boutton navigation={this.props.navigation} link="Liste" logo ={require("../assets/logo/ancre.png")} nom="Bateaux"></Boutton>
              </View>
              <View style={styles.bouton}>
                <Boutton navigation={this.props.navigation} link="Liste" logo ={require("../assets/logo/restaurant.png")} nom="Restaurants"></Boutton>
              </View>
            </View>
            <View style={{flexDirection:"row"}}>
              <View style={styles.bouton}>
                <Boutton navigation={this.props.navigation} link="Liste" logo ={require("../assets/logo/recette.png")} nom="Recettes"></Boutton>
              </View>
              <View style={styles.bouton}>
              <Boutton navigation={this.props.navigation} link="Liste" logo ={require("../assets/logo/tourteau.png")} nom="Contact"></Boutton>
              </View>
            </View>
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
    flex:3,
  },

  bouton2:{
    flex: 1,
  },

  bouton:{
    flex: 1,
  }

});
