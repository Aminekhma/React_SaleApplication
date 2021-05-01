import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { addProduct, removeProduct } from '../Store/action/cartAction';
import Bar from './Bar';

class ProduitItems extends React.Component {
  constructor(props){
    super(props);
    this.state={
      liste:[]
    }
  }
  componentDidMount(){
    this.setState({liste:this.props.route.params.data})
  }

  isInList(id){
    let resultat = this.props.products.filter(value=> value.id==id)
    return resultat.length>0;
  }

  render() {
      
    return (
      <View>
        <Bar navigation={this.props.navigation}></Bar>
          <ImageBackground source={require("../assets/backgroundim.png")}style={{width:"100%",height:"100%"}}>
            <View style={styles.container}>
              
              {this.state.liste.map((s,k)=><TouchableOpacity key={k} style={styles.boutton} onPress={()=>{
                if(!this.isInList(s.id)){
                  this.props.addProduct(s);
                  console.log(s.id)
                } else{
                  this.props.removeProduct(s)
                  console.log(s.id)
                }
              }}>
                <Image source={require("../assets/logo/ancre.png")} style={{width:50,height:50 }}/>
                <View style={styles.containerButton}>
                  <Text style={{color:"white"}}>{s.name}</Text>
                  <Text style={{color:"white"}}>{s.price}€</Text>
                  <Text>{this.isInList(s.id)&& "\tAjouté\t"}</Text>
                </View>
              </TouchableOpacity>)}
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