import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect}from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Medicament from './Medicament';
import axios from 'axios';
import Header from './Header';
import Panier from './Panier';
import SerchMedicament from './SerchMedicament';
import CartCard from './CartCard';
import {connect} from 'react-redux';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Medicaments extends React.Component {
  constructor(props){
    super(props)
    this.state={
      id : this.props.route.params.id,
      data: [],
      loading: false,
      test: 0
    }
  }


  componentDidMount(){
    fetch(`http://192.168.43.86:3000/medicines/pharmacy/${encodeURIComponent(this.state.id)}`,{method: "GET"})
    .then((response) => response.json())
    .then((json) => {
      // console.log(json.data)
      // const data = [];
      // for(let i = 0 ; i < json.data ; i++){
      //   data[i] = json.data.nearestPharmacies[i];
      // }
      this.setState({data: json, loading: true})
      console.log(this.state.data[0])
    })
  }

  // start = () => {
  //   fetch(`http://192.168.1.110:3000/medicines/pharmacy/${encodeURIComponent(this.state.id)}`,{method: "GET"})
  //   .then((response) => response.json())
  //   .then((json) => {
  //     // console.log(json.data)
  //     // const data = [];
  //     // for(let i = 0 ; i < json.data ; i++){
  //     //   data[i] = json.data.nearestPharmacies[i];
  //     // }
  //     this.setState({data: json, loading: false})
  //     console.log(this.state.data.data["Douleurs / fièvre / migraine"])
  //   })
  // }

  AddToCart(data){
    const itemcart = {
      id: this.props.route.params.id,
      data: data,
      price: data.price,
      qty: 1,
      name: data.name
    }
    AsyncStorage.getItem("cart2").then((datacart) => {
      if( datacart !== null ){
        this.setState({test:0})
        const cart = JSON.parse(datacart)
        cart.forEach(element => {
          if(element.name === itemcart.name){
            element.qty ++;
            this.setState({test:1});
          }
        });
        if(this.state.test == 0){
          cart.push(itemcart)
        }
        AsyncStorage.setItem("cart2",JSON.stringify(cart))
      } else { 
        const cart = []
        cart.push(itemcart)
        AsyncStorage.setItem("cart2",JSON.stringify(cart))
      }
      alert("Add Successful")
    }).catch((error)=>{
      alert(error)
    })
  }
  
  render(){
    // onPress3={() => this.props.navigation.navigate("Medicament",{
    //   name: this.state.data[0].name,
    //   categorie: this.state.data[0].category_name,
    //   description: this.state.data[0].description,
    //   price: this.state.data.price[0],
    //   Disponibilite: this.state.data[0].qty,
    //   id: this.props.route.params.id,
    //   data: this.state.data[0]
    // })}
    
  return (
    <View style={styles.container}>
      <Header title={'Medicaments'} onPress1={() => this.props.navigation.openDrawer()} onPress2={() => this.props.navigation.navigate("Panier")} data={ this.state.data } />
      <ScrollView >
        { this.state.loading ? 
          <FlatList
            data={this.state.data}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginBottom: 15
            }}
            renderItem={({item,index}) => {
              return(
                // <TouchableOpacity onPress={() => this.props.navigation.navigate("Medicament",{
                //   name: item.name,
                //   categorie: item.category_name,
                //   description: item.description,
                //   price: item.price,
                //   Disponibilite: item.qty,
                //   id: this.props.route.params.id,
                //   data: item
                // })}>
                  <SerchMedicament 
                    name={item.name}
                    price={item.price}
                    dis={item.qty}
                    description={item.description}
                    Disponibilite={item.qty}
                    categorie={item.category_name}
                    id={this.props.route.params.id}
                    data={item}
                    onPress={() => this.AddToCart(item)} 
                    onPress1={() => this.props.navigation.navigate("Medicament",{
                      name: item.name,
                      categorie: item.category_name,
                      description: item.description,
                      price: item.price,
                      Disponibilite: item.qty,
                      id: this.props.route.params.id,
                      data: item
                    })}
                  />
                // </TouchableOpacity>
              )}
            }
          />
        :
        <BallIndicator color='green' style={styles.indicator}/>

        }
      </ScrollView>
    </View>
  );
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => {
      dispatch({type:'ADD_TO_CART', payload: product})
    }
  }
}

export default connect(null,mapDispatchToProps)(Medicaments);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  row:{
    flexDirection: 'row'
  },

  indicator:{
    marginTop: "75%"
  }
});
