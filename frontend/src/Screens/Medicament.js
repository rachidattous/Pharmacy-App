import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScaledSheet } from 'react-native-size-matters';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderHome from './HeaderHome';
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';


class Medicament extends React.Component {
  constructor(props){
    super(props)
    this.state={
      id : this.props.route.params.id,
      data: [],
      loading: false,
      test: 0
    }
  }

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
  
  render() {

  return (
    <View style={styles.container}>
      <HeaderHome title={'Medicament'} onPress1={() => this.props.navigation.openDrawer()} onPress2={() => this.props.navigation.navigate("Panier")}/>
      <View>
        <View style={styles.imageContainer}>
          <Image 
            source={require("../Images/doliprane.jpeg")}
            style={styles.image}
          />
        </View>
        <View style={styles.view}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.props.route.params.name}</Text>
          </View>
          <View style={styles.catContainer}>
            <Text style={styles.catText1}>Categorie:</Text>
            <Text style={styles.catText2}>{this.props.route.params.categorie}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.informations}>Informations :</Text>
            <Text style={styles.infoText}>{this.props.route.params.description}</Text>
          </View>
          <View style={styles.prixContainer}>
            <Text style={styles.prixText1}>Prix: </Text>
            <Text style={styles.prixText2}>{this.props.route.params.price} MAD</Text>
          </View>
          <View style={styles.disContainer}>
            <Text style={styles.disText1}>Disponibilité: </Text>
            <Text style={styles.disText2}>Oui</Text>
          </View>
          <View style={styles.buttons}>
          <TouchableOpacity onPress={() => this.AddToCart(this.props.route.params.data)}>
            <LinearGradient colors={['rgb(50,205,50)', 'green']} style={styles.medContainer}>
              <Text style={styles.medText1}>Ajouter au panier</Text>
              <AntDesign name='pluscircle' size={22} color={'white'} style={{paddingLeft: 5}}/>
            </LinearGradient>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
  }
}


export default Medicament;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    backgroundColor: "#fff",
    height: hp("40%"),
    justifyContent: 'center',
    alignItems: 'center',
  },

  image:{
    width: wp("70%"),
    height: hp("25%"),
    marginTop: hp("-6%"),
    borderRadius: 20
  },

  view:{
    backgroundColor: "#eee",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: hp("-6%"),
    width: "100%"
  },

  titleContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp("2%")
  },

  title:{
    fontSize: '30@s',
    fontFamily: 'Gill Sans',
  },

  catContainer:{
    flexDirection: 'row',
    padding: 12
  },

  catText1:{
    fontSize: '18@s',
    fontFamily: 'Gill Sans',
    color: 'green'
  },

  catText2:{
    fontSize: '18@s',
    paddingLeft: 9,
    fontFamily: 'Gill Sans',
  },

  infoContainer:{
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: hp("2%"),
    paddingTop: 0,
    padding: 12
  },

  informations:{
    fontSize: '18@s',
    marginBottom: 5,
    fontFamily: 'Gill Sans',
    color: 'green'
  },

  infoText:{
    fontSize: '16@s',
    color: 'black',
    fontFamily: 'Gill Sans',
  },

  prixContainer:{
    flexDirection: 'row',
    padding: 12
  },

  prixText1:{
    fontSize: '18@s',
    fontFamily: 'Gill Sans',
    color: 'green'
  },

  prixText2:{
    fontSize: '18@s',
    fontFamily: 'Gill Sans',
  },

  disContainer:{
    flexDirection: 'row',
    padding: 12
  },

  disText1:{
    fontSize: '18@s',
    fontFamily: 'Gill Sans',
    color: 'green'
  },

  disText2:{
    fontSize: '18@s',
    fontFamily: 'Gill Sans',
  },

  buttons:{
    // marginTop: 20,
    // marginBottom: 40,
    // marginLeft: 30
    // margin
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  medContainer:{
    width: wp("40%"),
    height: hp("7%"),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 13,
    flexDirection: 'row'
  },

  medText1:{
    fontSize: '18@s',
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
});
