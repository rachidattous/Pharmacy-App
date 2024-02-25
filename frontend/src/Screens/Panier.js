import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import HeaderHome from './HeaderHome';
import {connect} from 'react-redux';
import CartCard from './CartCard';
import SerchMedicament from './SerchMedicament';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
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
import Formulaire from './Formulaire'

class Panier extends React.Component{
  constructor(props){
    super(props)
    this.state={
      dataCart: [],
      ready: false,
      total: 0
    }
  }

  componentDidMount(){
    AsyncStorage.getItem("cart2").then((cart) => {
      if(cart !== null){
        const dataCart = JSON.parse(cart)
        this.setState({dataCart: dataCart})
      } else {
        const dataCart = []
        this.setState({dataCart: dataCart})
      }
    })
  }

  onChangeQuat(i,type){
    this.setState({ready: false})
    const datacart = this.state.dataCart
    let count = datacart[i].qty
    if(type){
      count = count + 1
      datacart[i].qty = count
      this.setState({dataCart: datacart})
    } else if(type == false && count >= 2){
      count = count - 1
      datacart[i].qty = count
      this.setState({dataCart: datacart})
    } else if(type == false && count == 1){
      datacart.splice(i,1)
      AsyncStorage.setItem("cart2",JSON.stringify(datacart))
      this.setState({datacart: datacart})
    }
  }

  onDelete(i){
    this.setState({ready: false})
    const datacart = this.state.dataCart
      datacart.splice(i,1)
        AsyncStorage.setItem("cart2",JSON.stringify(datacart))
        this.setState({datacart: datacart})
  }

  onLoadTotal = () =>{
    if(!this.state.dataCart.length == 0){
      this.setState({ready: true})
      var total = 0;
      const cart = this.state.dataCart

      for(var i = 0; i < cart.length; i++ ){
        total = total + (cart[i].price*cart[i].qty)
      }
      this.setState({total: total})
    } else {
      alert("Ajoutez quelques medicaments au panier")
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <HeaderHome title='Panier' onPress1={() => this.props.navigation.openDrawer()} />
        <ScrollView style={styles.content}>
          { (this.state.dataCart.length !== 0) ?
          this.state.dataCart.map((item,index) => {
            return(
              <View style={styles.container2} >
                <View style={styles.card}>
                    <View style={styles.image}>

                    </View>
                    <View style={styles.titleSection}>
                        <View>
                            <Text style={styles.titleText}>{item.name}</Text> 
                        </View>
                        <View style={styles.actions}>
                            <TouchableOpacity onPress={() => this.onChangeQuat(index,false)}>
                                <View style={styles.signeContainer}>
                                    <Text style={styles.signe}>-</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.number}>{item.qty}</Text>
                            <TouchableOpacity onPress={()=> this.onChangeQuat(index,true)}>
                                <View style={styles.signeContainer}>
                                    <Text style={styles.signe}>+</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price2}>{item.price*item.qty} MAD</Text>
                    <TouchableOpacity onPress={() => this.onDelete(index)}>
                        <View style={styles.delete}>
                            <EvilIcons name='trash' size={24} color='#fffff0'/>
                        </View>
                    </TouchableOpacity>
                </View>
              </View>
            )
          })
          :
          <View style={{flex:1,justifyContent: 'center', alignItems: 'center', marginTop: 300}}>
            <Text style={{justifyContent: 'center', alignItems: 'center',fontSize: 22,fontFamily: 'Gill Sans', color: '#555'}}>Aucun Medicament dans le panier</Text>
          </View>
        }
        {/* <View style={styles.totalSection}>
          <Text style={styles.title}>Totals</Text>
          <View style={styles.subTitles}>
            <Text style={styles.subtitlesText}>Sub Total</Text>
            <View style={styles.divider}/>
            <Text style={styles.price}>{this.onLoadTotal} MAD</Text>
          </View>
          <View style={styles.subTitles}>
            <Text style={styles.subtitlesText}>Livraison</Text>
            <View style={styles.divider}/>
            <Text style={styles.gratuite}>Gratuite</Text>
          </View>
        </View> */}
        { !this.state.ready && this.state.dataCart.length !== 0 ?
        <TouchableOpacity onPress={this.onLoadTotal} >
          <LinearGradient colors={['rgb(50,205,50)', 'green']} style={styles.button}>
            <Text style={styles.buttonText}>Finaliser La Commande</Text>
          </LinearGradient>
        </TouchableOpacity>
        :
        null
        }
        { this.state.ready && this.state.dataCart.length !== 0?
          <Formulaire data={this.state.dataCart} total={this.state.total}/>
          :
          null
        }
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeItem: (product) => dispatch({type: 'REMOVE_FROM_CART',payload:product})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Panier);

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },

  content:{
    marginHorizontal: 29,
    paddingBottom: 32
  },

  totalSection:{
    marginTop: 32
  },

  title:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 31,
    marginVertical: 12
  },

  divider:{
    height: 1,
    borderColor: '#dddddd',
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
    marginHorizontal: 16,
    marginTop: 5
  },

  subTitles:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16
  },

  subtitlesText:{
    fontSize: 16,
    color: '#333333'
  },

  price:{
    fontSize: 16,
    fontWeight: 'bold'
  },

  gratuite:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green'
  },

  button: {
    width: wp("48%"),
    height: hp("6%"),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp("5%"),
  },

  buttonText:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16@s',
    color: '#fff'
  },

  container2:{
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: hp("4%")
    },

    card:{
        flexDirection: 'row',
    },

    image:{
        width: wp("20%"),
        height: hp("11%"),
        borderRadius: 20,
        backgroundColor: '#808080'
    },

    titleSection:{
        marginLeft: wp("5%"),
        marginTop: wp("1%"),
        justifyContent: 'space-around'
    },

    titleText:{
        fontSize: '12@s',
        color: 'black',
        fontFamily: 'Gill Sans',
        fontWeight: 'bold',
        width: wp("50%")
    },

    subtitleText:{
        fontSize: '13@s',
        color: 'gray'
    },

    actions:{
        alignItems: 'center',
        flexDirection: 'row',
        width: wp("17%"),
        height: hp('3%'),
        backgroundColor: 'rgba(0,0,0,0.06)',
        borderRadius: 20,
        justifyContent: 'space-between'
    },

    signeContainer:{
    },

    signe:{
        fontSize: '16@s',
        backgroundColor: 'black',
        color: 'white',
        backgroundColor: 'green',
        width: wp("5%"),
        height: hp('3%'), 
        borderRadius: 3,
        paddingHorizontal: 5
    },
    
    number:{
        fontSize: '15@s'
    },

    priceContainer:{
        justifyContent: 'center',
        marginLeft: wp("-12%")
    },

    price2:{
        fontSize: '14@s',
        color: 'tomato',
        marginTop: hp("6%"),
        marginLeft: wp("-2%"),

    },

    delete:{
        justifyContent: 'center',
        alignItems: 'center',
        width: wp("10%"),
        height: hp("6%"),
        borderRadius: 16,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#ff3d00'
    },


});
