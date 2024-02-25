import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Medicaments from './Medicaments';
import HeaderHome from './HeaderHome';
import Panier from './Panier';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {LinearGradient} from 'expo-linear-gradient';
import Foundation from 'react-native-vector-icons/Foundation'
import MapViewDirections from 'react-native-maps-directions';
import MapView from 'react-native-maps';

function CustomMarker1() {
  return (
      <Image
        source={require("../Images/emoji.png")}
        style={styles1.emoji}
      />
  );
}

const styles1 = StyleSheet.create({
  emoji:{
    width: 40,
    height: 40
  }
});

function CustomMarker2() {
  return (
    <View style={styles2.marker}>
      <Image
        source={require("../Images/emojiP.jpg")}
        style={styles2.emojiP}
      />
    </View>
  );
}
//styles for our custom marker.
const styles2 = StyleSheet.create({
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "green",
    borderColor: "#eee",
    borderRadius: 5,
    elevation: 10,
  },
  emojiP:{
    width: 28,
    height: 28
  }
});
const Pharmacie = ({navigation,route}) =>{ 

  const [region,setRegion] = useState({
    latitude: route.params.latUser, 
    longitude: route.params.lngUser, 
    latitudeDelta: 0.05, 
    longitudeDelta: 0.05
  }) 

    const [coordinates,setCoordinates] = useState([
      {
        latitude: route.params.latUser, 
        longitude: route.params.lngUser
      },
      {
        latitude: route.params.latPharma, 
        longitude: route.params.lngPharma,
        latitudeDelta: 0.05, 
        longitudeDelta: 0.05
      }
    ]);
    const GOOGLE_MAPS_APIKEY = 'AIzaSyBCBH3GCpkRXHaPu1OUqxwytzMUYePVHZ4';

    const handleCallPress =() => {
      Linking.openURL(`tel:${route.params.contact}`);
    }

    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${route.params.latUser},${route.params.lngUser}`;
    const label = '';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });

    const handleMapPress =() => {
      Linking.openURL(url);
    }

    const [time,setTime] = useState()

    const onChangeValue = (region) => (
      setRegion(region)
    )

    // const fetching = async() => {
    //   const start = `${route.params.latUser},${route.params.lngUser}`
    //   const end = `${route.params.latPharma},${route.params.lngPharma}`

    //   const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}`)

    //   const respJson = await resp.json()

    //   let points = polyline.decode(respJson.routes[0].overview_polyline.points)

    //   let coords = points.map((point,index) => ({latitude: point[0], longitude: point[1]}) )

    //   setCoordinates({coords})
    // }
 
  return (
    <View style={styles.container}>
      <HeaderHome title={'Pharmacie'} onPress1={() => navigation.openDrawer()} onPress2={() => navigation.navigate("Panier")}/> 
      <View style={styles.view}>
        <ScrollView style={{backgroundColor: 'transparent'}}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{route.params.name}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../Images/pharmacy1.jpeg")}
              style={styles.image}
            />
          </View>
          <MapView 
            initialRegion={region} 
            style={styles.map}
            // showsUserLocation={true} 
            onRegionChangeComplete={onChangeValue}
          >
            <MapView.Marker coordinate={coordinates[0]}>
              <CustomMarker1/>
            </MapView.Marker>
            <MapView.Marker coordinate={coordinates[1]}>
              <CustomMarker2/>
            </MapView.Marker>
            <MapView.Polyline
              coordinates={coordinates}
              strokeWidth={3}
              strokeColor="red"
              lineCap={'butt'}
              lineJoin={'butt'}
            />
            {/* <MapViewDirections
              origin={coordinates[0]}
              destination={coordinates[1]}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="red"
              optimizeWaypoints={true}
              onReady={result => {
                MapData.distance = result.distance
                MapData.duration = result.duration
                console.log(`Distance: ${MapData.distance} km`)
                console.log(`Duration: ${MapData.duration} min.`)
                this.forceUpdate()
              }}
            /> */}
          </MapView>
          {/* <TouchableOpacity onPress={handleMapPress} >
            <LinearGradient colors={['rgb(50,205,50)', 'green']} style={styles.mapContainer}>
              <Text style={styles.mapText}>Go to Maps...</Text>
            </LinearGradient>
          </TouchableOpacity> */}
          <View style={styles.mapContainer} >
            <Text style={styles.text1}>Distance:  {Math.trunc(route.params.distance)} m</Text>
            <Text style={styles.text2}>Time:  {time} min</Text>
          </View>
          <View style={styles.adresseContainer}>
            <MaterialCommunityIcons name="google-maps" size={40} color='green' style={styles.mapIcon}/>
            <Text style={styles.adresseText}>{route.params.adresse}</Text>
          </View>
          <TouchableOpacity onPress={handleCallPress}>
            <View style={styles.telContainer}>
              <Foundation name="telephone" size={40} color='green' style={styles.telIcon}/>
              <Text style={styles.telText}>{'+212'+route.params.contact}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Medicaments",{ id: route.params.id })} >
            <LinearGradient colors={['rgb(50,205,50)', 'green']} style={styles.medContainer}>
              <Text style={styles.medText}>Allez aux medicaments...</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <StatusBar style="auto" /> 
    </View>
  );
}

export default Pharmacie;


const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  view:{
    marginTop: hp("3%"),
    width: wp("95%"),
    height: hp("85%"),
    backgroundColor: '#e4ebe6',
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 20,
  },

   map: {
    width: '90%',
    height: '30%',
    borderRadius: 10,
    marginRight: '4%',
    marginLeft: '5%',
  },

  imageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp("3%"),
    marginBottom: hp("1%"),
    shadowColor: "#000",
    shadowOffset: {
      width: '18@s',
      height: '17@vs',
    },
    shadowOpacity: 0.48,
    shadowRadius: 16.00,
    elevation: 24,
  },

  image:{
    width: wp("90%"),
    height: hp("25%"),
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 20,
  },

  titleContainer:{
    // flexDirection: 'row',
    marginTop: hp("3%") ,
    marginBottom: hp("1%"),
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText:{
    fontSize: '26@s',
    fontWeight: 'bold',
    color: 'rgb(0,100,0)'
  },

  adresseContainer:{
    marginLeft: wp("3%"),
    marginTop: hp("3%")
  },

  adresseText:{
    fontFamily: 'Gill Sans',
    textAlign: 'left',
    marginTop: wp("2%"),
    marginLeft: wp("15%"),
    fontSize: '15@s',
    fontWeight: 'bold',
    color: 'green',
    paddingRight: wp("1%")
  },

  mapIcon:{
    position: 'absolute',
    marginLeft: wp("2%"),
    marginTop: wp("0.5%"),
  },

  mapContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // width: wp("18%"),
    // height: hp("3%"),
    // borderRadius: 5,
    alignItems: 'flex-start',
    marginLeft: wp("-6%"),
    // position: 'relative',
    marginTop: hp("1%")
  },

  text1:{
    fontSize: '18@s',
    color: 'red',
    fontFamily: 'Gill Sans',
  },

  text2:{
    fontSize: '18@s',
    color: 'green',
    fontFamily: 'Gill Sans',
    marginLeft: wp("-6%"),
  },

  mapText:{
    fontSize: '8@s',
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
    
  },

  telContainer:{
    // flexDirection: 'row',
    marginLeft: wp("3%"),
    marginBottom: hp("3%")
  },

  telText:{
    fontFamily: 'Gill Sans',
    textAlign: 'left',
    marginTop: wp("6%"),
    marginLeft: wp("15%"),
    fontSize: '15@s',
    fontWeight: 'bold',
    color: 'green',
    paddingRight: wp("1%"),
    letterSpacing: 1
  },

  telIcon:{
    position: 'absolute',
    marginLeft: wp("3%"),
    marginTop: wp("2.5%"),
  },

  medContainer:{
    right: "-54%",
    width: wp("38%"),
    height: hp("4%"),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp("2%")
  },

  medText:{
    fontSize: '14@s',
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },

});
