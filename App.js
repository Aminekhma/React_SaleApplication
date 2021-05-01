import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Provider} from "react-redux";

import store from './Store/configStore';

import React from 'react';
import Panier from './Screen/Panier';
import Produit from './Screen/Produit';
import Home from './Screen/Home';
import Liste from './Screen/Liste';
import ProduitItems from './Screen/ProduitItems';
import Profil from './Screen/Profil';
const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Liste" component={Liste}></Stack.Screen>
          <Stack.Screen name="Profil" component={Profil}></Stack.Screen>
          <Stack.Screen name="Produit" component={Produit}></Stack.Screen>
          <Stack.Screen name="ProduitItems" component={ProduitItems}></Stack.Screen>
          <Stack.Screen name="Panier" component={Panier}></Stack.Screen>
        </Stack.Navigator>  
      </NavigationContainer>

      </Provider>
    )
  }
}

