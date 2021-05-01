import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';


export default function Boutton(props) {

    return (
      <TouchableOpacity  style={styles.container} 
              onPress={()=>props.navigation.navigate(props.link,{titre:props.nom? props.nom:[],image:props.image,data:props.data, description:props.description? props.description:[]})}>
          <Image source={props.logo} style={{width:50,height:50 }}/>
          <Text style={{color:"white", textAlignVertical:"center", marginLeft:5}}>{props.nom}</Text>
      </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    backgroundColor:"grey",
    flexDirection:"row", 
    margin:1,
    padding:13,
  },

  titre:{
    color:"white",
    fontSize:18,
    textAlign:"center",
    justifyContent:"center",
    textAlignVertical:"center",
  }

});