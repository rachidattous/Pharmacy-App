import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, Dimensions, TextInput, ScrollView} from 'react-native';
import { ScaledSheet, s, vs, ms, mvs } from 'react-native-size-matters';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated ,{ Easing } from 'react-native-reanimated';
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Spacer,
  NativeBaseProvider,
  Center
} from "native-base";
import _ from 'lodash';
import {connect} from 'react-redux';
import cartItems from './reducers/cartItems'
import AsyncStorage from '@react-native-async-storage/async-storage';


const { Value, timing } = Animated;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      length: 0,
      isFocused: false,
      query: '',
      data: this.props.data,
      fullData: this.props.data
    }
    this._input_box_translate_x = new Value(width)
    this._back_button_opacity = new Value(0)
    this._content_translate_y = new Value(height)
    this._content_opacity = new Value(0)
  }

  _onFocus = () => {

    this.setState({isFocused: true})

    const input_box_translate_x_config = {
      duration: 200, 
      toValue: 0,
       easing: Easing.inOut(Easing.ease)
    }

    const back_button_opacity_config = {
      duration: 200, 
      toValue: 1,
       easing: Easing.inOut(Easing.ease)
    }
    
    const content_translate_y_config = {
      duration: 0, 
      toValue: 0,
       easing: Easing.inOut(Easing.ease)
    }
    
    const content_opacity_config = {
      duration: 200, 
      toValue: 1,
       easing: Easing.inOut(Easing.ease)
    }

    timing(this._input_box_translate_x, input_box_translate_x_config).start()
    timing(this._back_button_opacity, back_button_opacity_config).start()
    timing(this._content_translate_y, content_translate_y_config).start()
    timing(this._content_opacity, content_opacity_config).start()

    this.refs.input.focus();

  }

  _onBlur = () => {

    this.setState({isFocused: false})

    const input_box_translate_x_config = {
      duration: 200, 
      toValue: width,
       easing: Easing.inOut(Easing.ease)
    }

    const back_button_opacity_config = {
      duration: 50, 
      toValue: 0,
       easing: Easing.inOut(Easing.ease)
    }
    
    const content_translate_y_config = {
      duration: 0, 
      toValue: height,
       easing: Easing.inOut(Easing.ease)
    }
    
    const content_opacity_config = {
      duration: 200, 
      toValue: 0,
       easing: Easing.inOut(Easing.ease)
    }

    timing(this._input_box_translate_x, input_box_translate_x_config).start()
    timing(this._back_button_opacity, back_button_opacity_config).start()
    timing(this._content_translate_y, content_translate_y_config).start()
    timing(this._content_opacity, content_opacity_config).start()

    this.refs.input.blur();
  }

  componentDidMount(){
    AsyncStorage.getItem("cart2").then((cart) => {
      const datacart = JSON.parse(cart)
        const length = datacart.length
        this.setState({length: length})
    })
  }

  requestData = _.debounce(() => {
    const url = '';
    fetch(url)
    .then((res) => res.json())
    .then((resJson) => (
      this.setState({
        data: resJson,
        fullData: resJson
      })
    )).catch(error => {alert(error)})
  }, 250)

  handleSearch = (text) => {
    const formattedQuery = text.toUpperCase();
    const data = _.filter(this.state.fullData, (text) => {
      if(text.name.includes(formattedQuery)) { 
        return true 
      }
      return false
    })
    this.setState({data, query: text})
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
          <TouchableHighlight
            activeOpacity={1}
            underlayColor={'green'}
            onPress={this._onFocus}
            style={styles.searchIconBox} 
          >
            <Feather name='search' size={30} color='#F5F5F5'/>
          </TouchableHighlight>
          <Animated.View 
            style={[styles.inputBox , {transform: [{ translateX: this._input_box_translate_x}]}]}
          >
            <Animated.View style={{opacity: this._back_button_opacity}}>
              <TouchableHighlight
                activeOpacity={1}
                underlayColor={'green'}
                onPress={this._onBlur}
                style={styles.backIconBox}
              >
                <Entypo name="chevron-left" size={28} color={'#fff'}/>
              </TouchableHighlight>
            </Animated.View>
            <TextInput
              ref='input'
              placeholder='Rechercher Sur Un Médicament'
              color={"white"}
              clearButtonMode="always"
              onChangeText={this.handleSearch}
              style={styles.input}
            />
          </Animated.View>
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
    <Animated.View style={[styles.content, {opacity: this._content_opacity, transform: [{translateY: this._content_translate_y}]}]}>
      <SafeAreaView style={styles.contentSafeArea}> 
        <View style={styles.contentInner}>
              <ScrollView> 
                <NativeBaseProvider>
                  <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                      <Box
                        borderBottomWidth="1"
                        _dark={{
                          borderColor: "gray",
                        }}
                        borderColor="coolGray.200"
                        pl="4"
                        pr="5"
                        py="2"
                      >
                        <HStack space={3} justifyContent="space-evenly">
                          <Avatar
                            size="48px"
                            // source={{
                            //   uri: item.avatarUrl,
                            // }}
                          />
                          <VStack>
                            <Text
                              _dark={{
                                color: "warmGray.50",
                              }}
                              color="coolGray.800"
                              bold
                              style={{fontSize: 16, fontWeight: 'bold'}}
                            >
                              {item.name}
                            </Text>
                            <Text
                              color="coolGray.600"
                              _dark={{
                                color: "warmGray.200",
                              }}
                            >
                              {item.category_name}
                            </Text>
                          </VStack>
                          <Spacer />
                          <Text
                            fontSize="xs"
                            _dark={{
                              color: "warmGray.50",
                            }}
                            color="coolGray.800"
                            alignSelf="flex-start"
                            style={{color: 'red', fontSize: 13, marginTop : 10}}
                          >
                            {item.price+'\n'}MAD
                          </Text>
                        </HStack>
                      </Box>
                    )}
                    keyExtractor={(item) => item.id}
                  />
                </NativeBaseProvider>      
              </ScrollView>

        </View>
      </SafeAreaView>
    </Animated.View> 
  </>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state
  }
}

export default  connect(mapStateToProps)(Header);

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
