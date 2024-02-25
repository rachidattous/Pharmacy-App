import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {LinearGradient} from 'expo-linear-gradient';


export default class CartCard extends React.Component {
    constructor(props){
        super(props)
    }
        renderProductsCart = (products) => {
            return products.map((item,index) => {
                return(
                    <View style={styles.container} key={index}>
                        <View style={styles.card}>
                            <View style={styles.image}>

                            </View>
                            <View style={styles.titleSection}>
                                <View>
                                    <Text style={styles.titleText}>{item.fullName}</Text>
                                    <Text style={styles.subtitleText}>{item.disponibilite}</Text>
                                </View>
                                <View style={styles.actions}>
                                    <TouchableOpacity>
                                        <View style={styles.signeContainer}>
                                            <Text style={styles.signe}>-</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={styles.number}>1</Text>
                                    <TouchableOpacity>
                                        <View style={styles.signeContainer}>
                                            <Text style={styles.signe}>+</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>{item.price}</Text>
                            <TouchableOpacity onPress={() => this.props.onPress(item)}>
                                <View style={styles.delete}>
                                    <EvilIcons name='trash' size={24} color='#fffff0'/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })
        }

        renderProductsSerch  = (products) => {
            return products.map((item,index) => {
                return(
                    <View  style={styles.container1}> 
                        <TouchableOpacity onPress={this.props.medicament}>
                          <View>
                              <Text style={styles.titleText}>{item.fullName}</Text>
                          </View>
                          <View style={styles.imageContainer}>
                              <Image source={require("../Images/doliprane.jpeg")}  style={styles.image}/>
                          </View>
                          <View style={styles.prixContainer}>
                            <Text style={styles.prixText1}>Prix:</Text>
                            <Text style={styles.prixText2}>{item.price}</Text>
                          </View>
                          <View style={styles.disContainer}>
                            <Text style={styles.disText1}>Disponibilité:</Text>
                            <Text style={styles.disText2}>{item.disponibilite}</Text>
                          </View>
                          <View style={styles.buttons}> 
                            <TouchableOpacity onPress={() => alert(this.props.item)} >
                              <LinearGradient colors={['rgb(50,205,50)', 'green']} style={styles.medContainer}>
                                <Text style={styles.medText1}>Acheter</Text>
                              </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.onPress(item)}>
                              <LinearGradient colors={['rgb(50,205,50)', 'green']} style={styles.medContainer}>
                                <Text style={styles.medText2}>Ajouter</Text>
                                <Text style={styles.medText2}>au panier</Text>
                              </LinearGradient>
                            </TouchableOpacity>
                          </View>
                        </TouchableOpacity>
                    </View>
                )
            })
        }

        render() {
            return (
                <View style={styles.container2}>
                    { !this.props.medicament  ?
                        this.props.products.data["Douleurs / fièvre / migraine"].map((item,index) => {
                            return(
                                <View style={styles.container} key={index}>
                                    <View style={styles.card}>
                                        <View style={styles.image}>
            
                                        </View>
                                        <View style={styles.titleSection}>
                                            <View>
                                                <Text style={styles.titleText}>{item.name}</Text>
                                                <Text style={styles.subtitleText}>{item.qty}</Text>
                                            </View>
                                            <View style={styles.actions}>
                                                <TouchableOpacity>
                                                    <View style={styles.signeContainer}>
                                                        <Text style={styles.signe}>-</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <Text style={styles.number}>1</Text>
                                                <TouchableOpacity>
                                                    <View style={styles.signeContainer}>
                                                        <Text style={styles.signe}>+</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.priceContainer}>
                                        <Text style={styles.price}>{item.price}</Text>
                                        <TouchableOpacity onPress={() => this.props.onPress(item)}>
                                            <View style={styles.delete}>
                                                <EvilIcons name='trash' size={24} color='#fffff0'/>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })
                        :
                        <FlatList
                            data={this.props.products.data["Douleurs / fièvre / migraine"]}
                            numColumns={2}
                            columnWrapperStyle={{
                              justifyContent: 'space-between',
                              marginBottom: 15
                            }}
                            keyExtractor={({item,index}) => index}
                            renderItem={({item,index}) => {
                                return(
                                    <View  style={styles.container1}> 
                                        <TouchableOpacity onPress={this.props.medicament}>
                                          <View>
                                              <Text style={styles.titleText}>{item.name}</Text>
                                          </View>
                                          <View style={styles.imageContainer}>
                                              <Image source={require("../Images/doliprane.jpeg")}  style={styles.image2}/>
                                          </View>
                                          <View style={styles.prixContainer}>
                                            <Text style={styles.prixText1}>Prix:</Text>
                                            <Text style={styles.prixText2}>{item.price} MAD</Text>
                                          </View>
                                          <View style={styles.disContainer}>
                                            <Text style={styles.disText1}>Disponibilité:</Text>
                                            <Text style={styles.disText2}>{item.qty}</Text>
                                          </View>
                                          <View style={styles.buttons}> 
                                            <TouchableOpacity onPress={() => alert(this.props.item)} >
                                              <LinearGradient colors={['rgb(50,205,50)', 'green']} style={styles.medContainer}>
                                                <Text style={styles.medText1}>Acheter</Text>
                                              </LinearGradient>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => this.props.onPress(item)}>
                                              <LinearGradient colors={['rgb(50,205,50)', 'green']} style={styles.medContainer}>
                                                <Text style={styles.medText2}>Ajouter</Text>
                                                <Text style={styles.medText2}>au panier</Text>
                                              </LinearGradient>
                                            </TouchableOpacity>
                                          </View>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />
                    }
                </View>
            );
        }
}


const styles = ScaledSheet.create({
    container:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: hp("4%")
    },

    card:{
        flexDirection: 'row',
    },

    image:{
        width: wp("30%"),
        height: hp("16%"),
        borderRadius: 20,
        backgroundColor: '#808080'
    },

    titleSection:{
        marginLeft: wp("5%"),
        justifyContent: 'space-between'
    },

    titleText:{
        fontSize: '16@s',
        color: 'green'
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
        justifyContent: 'space-between'
    },

    price:{
        fontSize: '14@s',
        color: 'tomato',
        marginTop: hp("1.5%")
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

    container2:{
        flexDirection: 'column'
    },

    container1: {
        width: wp("45%"),
        height: hp("34%") ,
        margin: '10@s',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 16,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        borderRadius: 8,
        elevation: 24,
        backgroundColor: 'white',
        borderWidth: 0,
        borderColor: 'green'
    },

    nomEtInfo:{
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: wp("1%"),
    },

    image2:{
        justifyContent: 'center',
        width: wp("40%"),
        height: hp("14%"),
        borderBottomEndRadius: 18,
        borderTopLeftRadius: 18
    },

    titleText:{
        textAlign: 'center',
        marginTop: wp("3%"),
        marginLeft: wp("2%"),
        fontSize: '14.02@s',
        fontWeight:"bold",  
    },

    prixContainer:{
        flexDirection: 'row',
        marginTop: wp("2%"),
        marginLeft: wp("5%")
    },

    prixText1:{
      fontSize: "13@s",
      color: 'red',
      marginRight: wp("1%"),
      fontWeight: 'bold'
    },

    prixText2:{
      fontSize: "13@s",
      color: 'red',
    },

    disContainer:{
        flexDirection: 'row',
        marginTop: wp("0.5%"),
        marginLeft: wp("5%")
    },

    disText1:{
      fontSize: "13@s",
      color: 'black',
      marginRight: wp("1%"),
      fontWeight: 'bold'
    },

    disText2:{
      fontSize: "13@s",
      color: 'green',
      fontWeight: 'bold'
    },

    buttons:{
      flexDirection: 'row',
      marginLeft: wp("1%")
    },

    medContainer:{
    width: wp("18%"),
    height: hp("4%"),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp("0.5%"),
    marginRight: wp("2%"),
    marginLeft: wp("1%"),
    flexDirection: 'column'
  },

  medText1:{
    fontSize: '13@s',
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },

  medText2:{
    fontSize: '12@s',
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },

    

})