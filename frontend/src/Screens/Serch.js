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
import Pharmacie from './Pharmacie'

 
export default class Serch extends React.Component { 
  constructor(props) {
    super(props);  
  }
 
  state={
    backgroundColor: 'black',
    backgroundColor2: 'black',
    pressed: false,
  };

  changeColor= () => {
    if(!this.state.pressed){
       this.setState({ pressed: true,backgroundColor: 'red', backgroundColor2: 'black'});
    } else {
      this.setState({ pressed: false, backgroundColor: 'black' ,backgroundColor2: 'red'});
    }
  }

  render() {
    return (
      <TouchableOpacity  style={styles.container} onPress={() => this.props.navigation.navigate("Pharmacie")}> 
        <TouchableOpacity  
        //   onPress={this.props.onPress}
          style={styles.serchView1}
        >
          <View style={styles.imageContainer}>
            <Image source={this.props.image}  style={styles.image}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  
        //   onPress={this.props.onPress}
          style={styles.serchView2}  
        >
            <View style={{flexDirection: 'row'}}>
              {/* <AntDesign name="plussquare" size={20} style={styles.icon} color='green'/> */}
              <Text style={styles.title}>{this.props.title}</Text> 
            </View> 
            <View style={{flexDirection: 'row'}}>
                <AntDesign name="phone" size={16} style={styles.icon1} color='#000'/>
                <Text style={styles.contact}>+212{this.props.contact}</Text> 
            </View> 
            <View>
                <EvilIcons name="location" size={20} style={styles.icon2} color='#000'/>
                <Text style={styles.adresse}>{this.props.adresse}</Text> 
            </View>
            <View style={styles.statusAndDistance}>
              <Text style={styles.distance}>{this.props.distance}</Text>
              <Text style={styles.status}>{this.props.status}</Text> 
            </View>
        </TouchableOpacity>
      </TouchableOpacity>
    );  
  }
} 
  const styles = ScaledSheet.create({
  
  container: {
    height: hp("33%") ,
    width: wp("45%"),
    margin: '10@s',
    marginRight: '5@s',
    marginLeft: '10@s',
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
    justifyContent: 'center',
  },

  serchView1:{
    borderRadius: 8 ,
    width: wp("45%"), 
    height: hp("14%"),
    padding: wp("0%"),
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: '0@s',
      height: '6@vs',
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
},

image:{
    justifyContent: 'center',
    width: wp("45%"),
    height: hp("14%"),
    borderRadius: 8,
    // borderBottomEndRadius: 0,
    // borderBottomLeftRadius: 0
  },

  serchView2:{
   
  },

  title:{
    textAlign: 'left',
    marginTop: wp("3%"),
    marginLeft: wp("2%"),
    fontSize: '14@s',
    fontWeight:"bold"
  },
 
  contact:{
    textAlign: 'left',
    marginTop: wp("1%"),
    marginLeft: wp("8%"),
    fontSize: '11@s',
    fontWeight:"bold",
    color: 'black'
  },

  adresse:{
    textAlign: 'left',
    marginTop: wp("2%"),
    marginLeft: wp("8%"),
    fontSize: '9@s',
    fontWeight:"bold",
    color: 'black',
    paddingRight: wp("1%")
  },

  text:{
    textAlign: 'left',
    marginTop: '4@vs',
    marginLeft: '8@vs',
    fontSize: '11@s',
    fontWeight:"bold",
  },

  icon1:{
    position: 'absolute',
    marginLeft: wp("2%"),
    marginTop: wp("0.8%"),
  },

  icon2:{
    position: 'absolute',
    marginLeft: wp("2%"),
    marginTop: wp("1.7%"),
  },

  statusAndDistance:{
    marginTop: hp("1%"),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  status:{
    textAlign: 'right',
    
    marginRight: wp("1%"),
    fontSize: '15@s',
    fontWeight:"bold",
    paddingRight: wp("1%"),
    color: 'green'
  },

  distance:{
    textAlign: 'left',
    marginLeft: wp("1%"),
    fontSize: '15@s',
    fontWeight:"bold",
    paddingLeft: wp("1%"),
    color: 'red'
  }
  
});