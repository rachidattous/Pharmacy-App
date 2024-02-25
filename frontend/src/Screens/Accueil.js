import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Animated, FlatList } from 'react-native';
import { ScaledSheet, s, vs, ms, mvs } from 'react-native-size-matters';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import HeaderHome from './HeaderHome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Pharmacie from './Pharmacie';
import Serch from './Serch';
import axios from 'axios';
import BannerSlider from './BannerSlider';
import * as Location from 'expo-location';
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


console.disableYellowBox = true;

const Accueil = (props) =>{
  
  const [ready,setReady] = useState(false);
  const [where,setWhere] = useState({lat:null, lng:null});
  const [error,setError] = useState(null);
  const animated = new Animated.Value(0);
  const [pharmacie,setPharmacie] = useState([])

  const start = () => {
    fetch(`http://192.168.43.86:3000/?lat=${encodeURIComponent(where.lat)}&lng=${encodeURIComponent(where.lng)}`,{method: "GET"})
    .then((response) => response.json())
    .then((json) => {
      // console.log(json.data.nearestPharmacies[0].pharmacy)
      const data = [];
      for(let i = 0 ; i < json.data.nearestPharmacies.length ; i++){
        data[i] = json.data.nearestPharmacies[i]
      }
      setPharmacie(data)
      console.log(data)
    })
  }

  
  useEffect(()=> {
    start();
    setInterval(() => {
      animated.setValue(0);
      Animated.timing(animated,{toValue: 1, duration: 1000,useNativeDriver: true}).start();
    }, 2000);
    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,
      maximumAge: 60 * 60 * 24
    };
    setReady(false);
    setError(null)
    Location.installWebGeolocationPolyfill()
    navigator.geolocation.getCurrentPosition( geoSuccess, geoFailure,geoOptions);
  },[])

  const geoSuccess = (position) => {
    setReady(true)
    setWhere({lat: position.coords.latitude,lng:position.coords.longitude })
  }
  const geoFailure = (err) => {
    setError(err.message)
  }

    const opacity = animated.interpolate({
      inputRange: [0,1],
      outputRange: [0,1],
    })

    const translateY = animated.interpolate({
      inputRange: [0,1],
      outputRange: [-100,1],
    })

    const transform = [{translateY}];

  return (
    <>
    <View style={styles.container}>
      <HeaderHome title={'Accueil'} onPress1={() => props.navigation.openDrawer()} onPress2={() => props.navigation.navigate("Panier")}/>
      <ScrollView >
        <View style={styles.animatedTextContainer}>
          <Animated.Text style={[styles.animatedText,{transform,opacity}]}>PHARMACIES DE GARDE</Animated.Text>
        </View>
        <BannerSlider/>
        <View style={styles.serchContainer}>
          <View style={styles.allPharmaView}>
            <Text style={styles.allPharmaText}>All Pharmacies</Text>
          </View>
            { (where.lat && where.lng) ?
              <FlatList
                data={pharmacie}
                numColumns={2}
                columnWrapperStyle={{
                  justifyContent: 'space-between',
                  marginBottom: 15
                }}
                renderItem={({item,index}) => {
                  return(
                    <View key={index} style={styles.itemView1}>
                      <TouchableOpacity 
                        onPress={() => props.navigation.navigate("Pharmacie",{
                          name: item.pharmacy.name,
                          contact: item.pharmacy.phone,
                          adresse: item.pharmacy.address,
                          id: item.pharmacy.pharmacyID,
                          distance: item.distance,
                          latPharma: item.pharmacy.lat,
                          lngPharma: item.pharmacy.lng,
                          latUser: where.lat,
                          lngUser: where.lng,
                        })}
                      >
                        <Serch
                          image={require('../Images/pharmacy1.jpeg')}
                          title={item.pharmacy.name}
                          contact={item.pharmacy.phone}
                          adresse={item.pharmacy.address}
                          status={'ouverte'}
                          distance={Math.trunc(item.distance)+' m'}
                        />
                      </TouchableOpacity>
                    </View>
                  )
                }}
              />
              : 
              <BallIndicator color='green' style={styles.indicator}/>
            }
        </View>
      </ScrollView>
      {/* <TouchableOpacity onPress={() => start()}>
          <Text style={{fontSize: 30,margin: 30}}>test</Text>  
      </TouchableOpacity> */}
    </View>
    </>
  );
} 

export default Accueil;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f0',
  },

  animatedTextContainer:{
    width: wp("100%"),
    height: hp("9%"),
    justifyContent: 'center',
    alignItems: 'center'
  },

  animatedText:{
    fontSize: '22@s',
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    color: 'red', 
    letterSpacing: 6
  },

  allPharmaView:{
    marginTop: hp("5%"),
    marginBottom: hp("1%"),
    marginLeft: wp("-62%"),
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderRadius: 8,
    padding: 3,
    borderColor: 'green'
  },
  
  allPharmaText:{
    textAlign: 'left',
    fontSize: '18@s',
    color: 'green',
    fontWeight: 'bold'
    
  },

  gardeImage:{
    width: wp("100%"),
    height: hp("24%") 
  },

  serchContainer:{
    marginTop:hp('-1%'),
    alignItems: 'center'
  },

  itemView1: {
    flexDirection: 'row',
  },

  indicator:{
    marginTop: hp("20%")
  }


});
