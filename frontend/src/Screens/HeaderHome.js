import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, Dimensions, TextInput, ScrollView} from 'react-native';
import { ScaledSheet, s, vs, ms, mvs } from 'react-native-size-matters';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import cartItems from './reducers/cartItems'
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class HeaderHome extends React.Component{
  constructor(props){
    super(props)
    this.state={
      length: 0
    }
  }

  componentDidMount(){
    AsyncStorage.getItem("cart2").then((cart) => {
      const datacart = JSON.parse(cart)
        const length = datacart.length
        this.setState({length: length})
    })
  }

  render() {

  return (
  <>
    <SafeAreaView style={styles.headerContainer}>
      <View style={{height: 50, paddingHorizontal: 16}}>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.props.onPress1}>
            <View style={styles.menuIcon} >
              <Entypo name="menu" size={40}  color="#FFF" />
            </View>
          </TouchableOpacity>
          <View style={styles.textContainer} >
            <Text style={styles.headerText} >{this.props.title}</Text>
          </View>
          <View style={styles.cardContainer} >
            <TouchableOpacity onPress={this.props.onPress2}>
              <AntDesign name='shoppingcart' size={32} color='#FFF'/>
              {/* <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>{this.state.length}</Text>
              </View> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  </>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state
  }
}

export default  connect(mapStateToProps)(HeaderHome);

const styles = ScaledSheet.create({
  headerContainer: {
    zIndex: 1000,
    backgroundColor: 'green',
    width: wp("100%"),
    height: hp("8.5%")
  },

  menuIcon:{
    marginLeft: wp("-1%"),
    marginTop: hp("-0.7%")
  },

  textContainer:{
    width: wp("54%"),
    marginRight: wp("1%"),
    marginLeft: wp("8%"),
    marginTop: hp("-0.7%"),
    justifyContent: 'center',
    textAlign: 'center'
  },

  headerText:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24@s',
    fontWeight: 'bold',
    letterSpacing: 5,
    color: '#F6F6FF',
  },

  container:{
    flex: 1,
    // overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // position: 'relative'
  },

  menuAndName:{
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },

  searchContainer:{
    // marginRight: wp("3%"),
    marginTop: hp("-0.7%")
  },

  cardContainer:{
    marginRight: wp("1%"),
    marginTop: hp("-0.7%")
  },

  cardTextContainer:{
    position: 'absolute',
    width: wp("3.5%"),
    height: hp("2%"),
    backgroundColor: '#DA70D6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp("4.5%")
  },

  cardText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: '11@s'
  },

  searchIconBox:{
    backgroundColor: 'transparent',
    marginRight: wp("2%"),
    marginTop: hp("-0.7%")
  },

  inputBox:{
    marginTop: hp("0.5%"),
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: -12,
    backgroundColor: 'green',
    width: width - 70,
    marginRight: wp("5%")
  },

  backIconBox:{
    width: 40,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    backgroundColor: 'green'
  },

  input:{
    flex: 1,
    height: 34,
    backgroundColor: 'green',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 16,
    fontSize: '16@s'
  },

  content:{
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 999
  },

  contentSafeArea:{
    flex: 1,
    backgroundColor: 'white',
  },

  contentInner:{
    flex: 1,
    paddingTop: 50
  },

  imagePlaceholderContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: "-50%"
  },

  imagePlaceholder:{
    alignSelf: 'center'
  },

  imagePlaceholderText:{
    fontSize: '15@s',
    textAlign: 'center',
    color: 'gray',
    marginTop: 5
  },

  searchItem:{
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e4eb',
    marginLeft: 16 
  },

  itemIcon:{
    marginRight: 15
  }

});
