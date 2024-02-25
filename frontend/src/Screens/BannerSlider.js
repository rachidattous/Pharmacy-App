import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions} from 'react-native';
import ViewSlider from './ViewSlider';
import Pharmacie from './Pharmacie';

const { width, height } = Dimensions.get("window")
class BannerSlider extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <ViewSlider
        renderSlides={
          <>
            <View style={styles.viewBox}>
              {/* <TouchableOpacity onPress={() => this.props.navigation.navigate("Pharmacie")}> */}
                <Image
                  style={styles.bannerImage}
                  source={{
                    uri: 'https://paytm.com/offers/img/addmoneyupiMob.jpg',
                  }}
                  style={{height: 200, width: width}}
                />
              {/* </TouchableOpacity> */}
            </View>

            <View style={styles.viewBox}>
              <Image
                style={styles.bannerImage}
                source={{
                  uri:
                    'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/MARCH_2020/SVD_Teaser/Desktop_Teaser_Header.jpg',
                }}
                style={{height: 200, width: width}}
              />
            </View>
            <View style={styles.viewBox}>
              <Image
                style={styles.bannerImage}
                source={{
                  uri:
                    'https://dog55574plkkx.cloudfront.net/images/big-bazaar-todays-offers.png',
                }}
                style={{height: 200, width: width}}
              />
            </View>
          </>
        }
        style={styles.slider} //Main slider container style
        height={180} //Height of your slider
        slideCount={3} //How many views you are adding to slide
        dots={true} // Pagination dots visibility true for visibile
        dotActiveColor={'gray'} //Pagination dot active color
        dotInactiveColor={'#e4ebe6'} // Pagination do inactive color
        dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
        autoSlide={true} //The views will slide automatically
        slideInterval={3000} //In Miliseconds
      />
    );
  }
}
const styles = StyleSheet.create({
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: width,
    alignItems: 'center',
    height: '100%',
  },
  slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
  },
});

export default BannerSlider;
