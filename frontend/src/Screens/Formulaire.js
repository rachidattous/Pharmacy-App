import React,{useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    Modal,
    Pressable,
    Alert,
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import {LinearGradient} from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';


class Formulaire extends React.Component{
    constructor(props){
        super(props)
        this.state={
            modalVisible: false,
                name: '',
                prenom: '',
                phone: '',
                email: '',
                organization: '',
                check_name: true,
                check_prenom: true,
                check_phone: true,
                check_email: true,
                check_organization: true,
                check_textInputChange: false,
                message: '',

            erreur1: '',
            erreur2: '',
            erreur3: '',
            erreur4: '',
            erreur5: ''
        }
    }

render(){
    const textInputChange1 = (val) => {
        this.setState({
                name: val,
            });
    };

    const textInputChange5 = (val) => {
        this.setState({
                prenom: val,
            });
    };

    const textInputChange2 = (val) => {
        if( val.trim().length == 10  ) {
            this.setState({
                
                phone: val,
                check_textInputChange: true,
            });
        } else {
            this.setState({
                
                phone: val,
                check_textInputChange: false,
            });
        }
    };

    const textInputChange3 = (val) => {
        this.setState({
            
            email: val,
        });
    };

    const textInputChange4 = (val) => {
            this.setState({
                
                organization: val,
            });
    };
    

    const register = async () => {
    //   this.setState({modalVisible: true})
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(this.state.name == ''){
            this.state.check_name = false,
            this.setState({erreur4:'Veuillez saisir un nom'});
        } else if( this.state.name.includes('_')){
            this.setState({erreur4:'Veuillez saisir un nom sans tiret'});
            this.state.check_name = false;
        } else {
            this.setState({erreur4:''});
            this.state.check_name = true;
        }

        if(this.state.prenom == ''){
            this.state.check_prenom = false,
            this.setState({erreur5:'Veuillez saisir un prénom'});
        } else if( this.state.prenom.includes('_')){
            this.setState({erreur5:'Veuillez saisir un prénom sans tiret'});
            this.state.check_prenom = false;
        } else {
            this.setState({erreur5:''});
            this.state.check_prenom = true;
        }
        
        if( this.state.phone == '' ){
            this.setState({erreur2:'Veuillez saisir un numéro de téléphone'});
            this.state.check_phone = false;
        } else if( this.state.phone.trim().length != 10  ) {
            this.setState({erreur2:'Veuillez saisir un numéro contient 10 chiffres'});
            this.state.check_phone = false;
        } else {
            this.setState({erreur2:''});
            this.state.check_phone = true;
        }


        if( this.state.email == '' || reg.test(this.state.email) === false) {
            this.setState({erreur3:'Veuillez saisir un e-mail'});
            this.state.check_email = false;
        } else {
            this.setState({erreur3:''});
            this.state.check_email = true;
        }

        if( this.state.organization == '' ){
            this.setState({erreur4:'Veuillez saisir un adresse actuel'});
            this.state.check_organization = false;
        } else {
            this.setState({erreur4:''});
            this.state.check_organization = true;
        }
        

        if( this.state.check_name && this.state.check_prenom && this.state.check_phone && this.state.check_email && this.state.check_organization){
            try{
                fetch('http://192.168.43.86:3000/orders', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      firstName: this.state.name,
                      lastName: this.state.prenom,
                      address: this.state.organization,
                      email: this.state.email,
                      phone: this.state.phone,
                      pharmacyID: this.props.data.id,
                      totalPrice: this.props.total,
                      orderItems: this.props.data,
                    })
                });
            } catch(err){
                alert(err)
            }

            this.setState({modalVisible: true})
        }
    }

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <ScrollView style={{flex:1, backgroundColor: 'transparent'}} showsVerticalScrollIndicator={false} >
                <View style={styles.totalSection}>
                    <Text style={styles.title}>Totals</Text>
                    <View style={styles.subTitles}>
                      <Text style={styles.subtitlesText}>Sub Total</Text>
                      <View style={styles.divider}/>
                      <Text style={styles.price}>{this.props.total} MAD</Text>
                    </View>
                    <View style={styles.subTitles}>
                      <Text style={styles.subtitlesText}>Livraison</Text>
                      <View style={styles.divider}/>
                      <Text style={styles.gratuite}>Gratuite</Text>
                    </View>
                </View>
            <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    this.setState({modalVisible: !this.state.modalVisible});
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{flexDirection: 'row'}}>
                            <Image 
                                source={require('../Images/support.png')} 
                                style={styles.modalImage}
                            />
                            <Text style={styles.modalText}>Votre Commande est bien enregistré</Text>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {this.setState({modalVisible: !this.state.modalVisible})}}
                            // ,props.navigation.navigate("Login")
                        >
                            <Text style={styles.textStyle}>Fermer</Text>
                        </Pressable>
                    </View>
                  </View>
                </Modal>
            </View>
            <View style={styles.view2}>
                <LinearGradient
                    colors={['#fff', '#fff']}
                    style={[styles.signIn, {
                        borderColor: !this.state.check_name ? 'red' : 'green',
                        borderWidth: 2,
                        borderRadius: 50,
                        marginTop: hp("-4%")
                    }]}
                >
                    <View style={styles.action}>
                        <AntDesign name="user" size={30} color={ !this.state.check_name ? 'red' : "green" } style={{marginLeft: wp("5%"),}}/>
                        <TextInput 
                            placeholder="Nom"
                            placeholderTextColor={ !this.state.check_name ? 'red' : "green" }
                            style={styles.textInput}
                            autoCapitalize="words"
                            keyboardType="default"
                            value={this.state.name}
                            onChangeText={(val) => textInputChange1(val)}
                        />
                    </View>
                </LinearGradient>
                <Text style={styles.textErreur}>{this.state.erreur1 ? this.state.erreur1 : ""}</Text>
                <LinearGradient
                    colors={['#fff', '#fff']}
                    style={[styles.signIn, {
                        borderColor: !this.state.check_prenom ? 'red' : 'green',
                        borderWidth: 2,
                        borderRadius: 50,
                        marginTop: hp("0%")
                    }]}
                >
                    <View style={styles.action}>
                        <AntDesign name="user" size={30} color={ !this.state.check_prenom ? 'red' : "green" } style={{marginLeft: wp("5%"),}}/>
                        <TextInput 
                            placeholder="Prénom"
                            placeholderTextColor={ !this.state.check_prenom ? 'red' : "green" }
                            style={styles.textInput}
                            autoCapitalize="words"
                            keyboardType="default"
                            value={this.state.prenom}
                            onChangeText={(val) => textInputChange5(val)}
                        />
                    </View>
                </LinearGradient>
                <Text style={styles.textErreur}>{this.state.erreur5 ? this.state.erreur5 : ""}</Text>
                <LinearGradient
                    colors={['#fff', '#fff']}
                    style={[styles.signIn, {
                        borderColor: !this.state.check_phone ? 'red' : 'green',
                        borderWidth: 2,
                        borderRadius: 50,
                    }]}
                >
                    <View style={styles.action}>
                    <AntDesign name="phone" size={30} color={ !this.state.check_phone ? 'red' : "green" } style={{marginLeft: wp("5%")}}/>
                        <TextInput 
                            placeholder="Téléphone"
                            placeholderTextColor={ !this.state.check_phone ? 'red' : "green" }
                            style={styles.textInput}
                            autoCapitalize="none"
                            keyboardType="numeric"
                            underlineColorAndroid="transparent"
                            value={this.state.phone}
                            onChangeText={(val) => textInputChange2(val)}
                        />
                        { this.state.check_textInputChange ? 
                            <Image style={{marginRight: wp("6%"),width: wp("6.5%"),height: hp("4%")}} source={require('../Images/verifier.png')}/>
                            :
                            null
                        }
                    </View>
                </LinearGradient>
                <Text style={styles.textErreur}>{this.state.erreur2 ? this.state.erreur2 : ""}</Text>
                <LinearGradient
                    colors={['#fff', '#fff']}
                    style={[styles.signIn, {
                        borderColor: !this.state.check_email ? 'red' : 'green',
                        borderWidth: 2,
                        borderRadius: 50,
                    }]}
                >
                    <View style={styles.action}>
                    <AntDesign name="mail" size={30} color={ !this.state.check_email ? 'red' : "green" } style={{marginLeft: wp("5%")}}/>
                        <TextInput 
                            placeholder="Email"
                            placeholderTextColor={ !this.state.check_email ? 'red' : "green" }
                            style={styles.textInput}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            underlineColorAndroid="transparent"
                            value={this.state.email}
                            onChangeText={(val) => textInputChange3(val)}
                        />
                    </View>
                </LinearGradient>
                <Text style={styles.textErreur}>{this.state.erreur3 ? this.state.erreur3 : ""}</Text>
                <LinearGradient
                    colors={['#fff', '#fff']}
                    style={[styles.signIn, {
                        borderColor: !this.state.check_organization ? 'red' : 'green',
                        borderWidth: 2,
                        borderRadius: 50,
                    }]}
                >
                    <View style={styles.action}>
                        <AntDesign name="idcard" size={30} color={ !this.state.check_organization ? 'red' : "green" } style={{marginLeft: wp("5%")}}/>
                        <TextInput 
                            placeholder="Adresse actuelle"
                            placeholderTextColor={ !this.state.check_organization ? 'red' : "green" }
                            style={styles.textInput}
                            autoCapitalize="words"
                            keyboardType="default"
                            underlineColorAndroid="transparent"
                            value={this.state.organization}
                            onChangeText={(val) => textInputChange4(val)}
                        />
                    </View>
                </LinearGradient>
                <Text style={styles.textErreur}>{this.state.erreur4 ? this.state.erreur4 : ""}</Text>
            </View>
            <View style={{marginTop: Platform.OS === 'ios' ?  hp("8%") :  hp("0%"), marginLeft: wp("-7%")}}>        
              <View>
                <TouchableOpacity
                    onPress={register}                            
                    style={{
                        width: wp('100%'),
                        height: hp("7%"),
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        // marginTop: Platform.OS === 'ios' ? hp("-8%") : hp("-1.5%")
                    }}
                >
                    <LinearGradient
                        colors={['rgb(50,205,50)', 'green']}
                        style={{
                            width: wp('80%'),
                            height: hp("7%"),
                            borderRadius: 10,
                            marginBottom: hp("10%"),
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={[styles.textSign, {color:'#fff'}]}>Envoyer</Text>
                    </LinearGradient>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    onPress={toNavigate}
                    style={{
                        width: wp('100%'),
                        height: hp("7%"),
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <LinearGradient
                        colors={['rgb(50,205,50)', 'green']}
                        style={{
                            width: wp('80%'),
                            height: hp("7%"),
                            borderRadius: 10,
                            marginTop: hp("-7%"),
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={[styles.textSign, {color:'#fff'}]}>Annuler</Text>
                    </LinearGradient>
                </TouchableOpacity> */}
              </View>
            </View> 
        </ScrollView>
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    );
};
}


export default Formulaire;


const styles = ScaledSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45
      },
     
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
     
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
      },
     
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },

    view1:{
        flex: 1,
        justifyContent: 'flex-start' ,
        flexDirection: 'row'
    } ,
    
    view2: {
        marginTop: hp("25%"),
        flex: 1, 
        backgroundColor: '#fff',
        alignItems:'center',
        backgroundColor: 'transparent'
    },

    header: {
        width: wp("100%"),
        height: hp("40%"),
        marginRight: wp("-5%"),
        marginTop: hp("-2%")
    },
    
    ciel:{
        marginBottom: hp("-19%"),
        marginRight: wp("8%"), 
       
    },
      
    action: {
        flexDirection: 'row',
        marginTop: hp('1.5%'),
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: hp("1%"),
    },

    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: '13@s',
    },

    errorMsg: {
        color: '#FF0000',
        fontSize: '14@s',
        marginBottom: hp("2%"),
        fontWeight:'bold'
    },

    signIn:{
        width: wp('80%'),
        height: hp("7%"),
        borderRadius: 10,
        marginTop: hp("1%"),
        
    },

    grad:{
        width: wp('23%'),
        height: hp("4%"),
        borderRadius: 10,
        marginTop: hp("3%"),
        marginLeft: wp("-90%"),
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonGet:{
        width: wp('20%'),
        height: hp("6%"),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: hp("3%")
    },

    get: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 10,
        marginLeft: wp("6%")
    },

    textGet: {
        fontSize: '14@s',
        fontWeight: 'bold'
    },

    actionGet: {
        marginLeft: wp('-1%'),
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    },

    inputImei: {
        color: '#05375a',
        fontSize: '15@s'
    },

    signInGet:{
        width: wp('60%'),
        height: hp("6%"),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: hp("3%"), 
        marginLeft: wp('2%'),
    },

    signInn: {
        width: wp('100%'),
        height: hp("7%"),
        borderRadius: 10,
        marginBottom: hp("2%"),
        
    },

    precedent:{
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    textSign:{
        fontSize: '18@s',
        fontWeight: 'bold',
    },

    imageRetour:{
        width: wp('6%'),
        height: hp('6%'),
        marginTop: hp('4.5%'),
        marginLeft: wp("5%"),
        position: 'absolute'
    },

    picker:{
        flexDirection: 'row',
        marginTop: hp('2.2%'),
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: hp("1%"),
        alignItems: 'flex-start',
    },
    
    textErreur:{
        fontSize: "13@s",
        color: 'red',
        marginTop: hp("1%")
    }, 
    fin:{
        fontSize: "14@s"
    },

    centeredView: {
    justifyContent: "center",
    alignItems: "center",
    width: wp("80%"),
    marginTop: hp("-20%")
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginLeft: hp("10%"),
    marginRight: hp("0%"),
    marginTop: hp("30%"),

  },
  button: {
    marginTop: hp("1%"),
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: wp("25%")
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: '15@s',
  },
  modalText: {
    marginBottom: hp("1%"),
    textAlign: "center",
    fontSize: '15@s',
  },
  modalImage:{
    width: wp("16%"),
    height: hp("10%")
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
});