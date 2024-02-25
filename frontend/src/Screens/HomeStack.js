import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from "@react-navigation/stack";
import Accueil from "./Accueil";
import Pharmacie from "./Pharmacie";
import Medicaments from "./Medicaments";
import Medicament from "./Medicament";
import Panier from "./Panier";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator  
      initialRouteName="Accueil" 
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen 
        name="Accueil" 
        component={Accueil}  
      />
      <Stack.Screen 
        name="Pharmacie" 
        component={Pharmacie} 
      />
      <Stack.Screen 
        name="Medicaments" 
        component={Medicaments} 
      />
      <Stack.Screen 
        name="Panier" 
        component={Panier} 
      />
      <Stack.Screen 
        name="Medicament" 
        component={Medicament} 
      />
    </Stack.Navigator>
  );
}

export default HomeStack;