import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Bar from './Bar'
import Boutton from './Boutton';
import produits from '../assets/jsonfiles/database.json';
import { Value } from 'react-native-reanimated';
import {connect} from 'react-redux'
import {addProduct, removeProduct} from '../Store/action/cartAction';

export default class Produit extends React.Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  componentDidMount(){
    
  }

  render() {

      
    return (
        <View>
          <Bar navigation={this.props.navigation}></Bar>
          <ImageBackground source={require("../assets/backgroundim.png")}style={{width:"100%",height:"100%"}}>
            
            <View style={styles.container}>
                <Text>Choisissez vos produits</Text>
                <Boutton navigation={this.props.navigation} link={"ProduitItems"} name={"Poisson"} nom={"Poisson"} data={produits.filter(value=>value.category==0)}></Boutton>
                <Boutton navigation={this.props.navigation} link={"ProduitItems"} name={"Coquillage"}  nom={"Coquillage"} data={produits.filter(value=>value.category==1)}></Boutton>
                <Boutton navigation={this.props.navigation} link={"ProduitItems"} name={"Crustacés"} nom={"Crustacés"} data={produits.filter(value=>value.category==2)}></Boutton>
                <Boutton navigation={this.props.navigation} link={"ProduitItems"} name={"Promotion"}  nom={"Promotion"} data={produits.filter(value=>value.category==0)}></Boutton>       
            </View>
          </ImageBackground>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      marginTop:30,
      justifyContent: 'center',
    },  
});
