import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { connect } from 'react-redux';
import Bar from './Bar';
import CartePanier from './CartePanier';

class ProduitItems extends React.Component {
  constructor(props){
    super(props);
    this.state={
      liste:[]
    }
  }
  componentDidMount(){
  }

  render() {

    console.log(this.props.products)
    return (
      <View>
        <Bar navigation={this.props.navigation}></Bar>
          <ImageBackground source={require("../assets/backgroundim.png")}style={{width:"100%",height:"100%"}}>
            <View style={styles.container}>
              <Text>Panier</Text>
              {this.props.products.map((v,k)=>
                  <TouchableOpacity style={styles.boutton} key={k}>
                    <Text style={{color:"white"}}>
                    {v.name}
                      </Text>
                    </TouchableOpacity>
              )}
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
    boutton: {
      borderWidth:1,
      backgroundColor:"grey",
      flexDirection:"row", 
      margin:1,
      padding:13,
    },
    titre:{
      marginTop : 50,
      flex :1,
      fontSize: 30,
      fontStyle: "italic",
      textAlign :'center',
    },
    containerButton :{
      flexDirection:"row",
    },
});

const mapStateToProps = state => {
    return {
        products: state.cart.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addProduct: data => {dispatch(addProduct(data));},
        removeProduct: data => {dispatch(removeProduct(data));},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProduitItems);


