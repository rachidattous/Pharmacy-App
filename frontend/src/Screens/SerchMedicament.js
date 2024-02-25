import React from 'react';
import { 
  Text,
  View, 
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {LinearGradient} from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
class SerchMedicament extends React.Component { 
  constructor(props) {
    super(props);  
  }

  render() {
    return (
    <View  style={styles.container}> 
      <TouchableOpacity onPress={this.props.onPress1}>
        <View>
            <Text style={styles.titleText}>{this.props.name}</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image source={require("../Images/doliprane.jpeg")}  style={styles.image}/>
        </View>
        <View style={styles.prixContainer}>
          <Text style={styles.prixText1}>Prix:</Text>
          <Text style={styles.prixText2}>{this.props.price} MAD</Text>
        </View>
        <View style={styles.disContainer}>
          <Text style={styles.disText1}>Disponibilité:</Text>
          <Text style={styles.disText2}>{this.props.dis}</Text>
        </View>
      </TouchableOpacity>
        <View style={styles.buttons}> 
          <TouchableOpacity onPress={this.props.onPress}>
            <LinearGradient colors={['rgb(50,205,50)', 'green']} style={styles.medContainer}>
              <Text style={styles.medText2}>Ajouter au Panier</Text>
              <AntDesign name='pluscircle' size={14} color={'white'} style={{padding: 4}}/>
            </LinearGradient>
          </TouchableOpacity>
        </View>
    </View>
    );  
  }
} 

export default SerchMedicament;

  const styles = ScaledSheet.create({
  
    container: {
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

    image:{
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
      marginLeft: wp("1%"),
      alignItems: 'center',
    },

    medContainer:{
    width: wp("28%"),
    height: hp("4%"),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp("0.5%"),
    marginRight: wp("2%"),
    marginLeft: wp("1%"),
    flexDirection: 'row'
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
  
});