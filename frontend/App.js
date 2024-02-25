import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScaledSheet, s, vs, ms, mvs} from 'react-native-size-matters';
import Header from './src/Screens/Header';
import HomeStack from './src/Screens/HomeStack';
import Panier from './src/Screens/Panier';
import Formulaire from './src/Screens/Formulaire';
import Medicament from './src/Screens/Medicament';
import {Provider} from 'react-redux';
import store from './src/Screens/store';
import location from './src/Screens/location';


export default function App(navigation) {

  const Drawer = createDrawerNavigator();

  const CustomDrawer = (props) => {
    return (
      <View style={{flex:1}}>
        <DrawerContentScrollView {...props} >
          <View style={styles.headerContainer}>
            <Image
              style={styles.headerLogo}
              source={require('./src/Images/icon.png')}
            />
            <View>
              <Text style={styles.headerText}>Pharma Near Me</Text>
            </View>
          </View>
          <View 
            style={{
              backgroundColor: 'green',
              height: hp("100%"),
              paddingTop: hp("2%"),
            }}
          >
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        <View style={styles.footerContainer}>
        <Text style={styles.footerText}>&copy; Powered by </Text> 
        </View>
      </View>
    )
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          hidden={false}
          showHideTransition={'ease'}
        />
        <Drawer.Navigator 
          initialRouteName="HomeStack" 
          drawerContent={(props) => <CustomDrawer {...props} />}
          screenOptions={{
            drawerInactiveTintColor: 'white',
            drawerLabelStyle:{
              fontSize: 20
            },
            drawerActiveBackgroundColor: 'white',
            drawerActiveTintColor: '#0f056b',
          }}
        >
          <Drawer.Screen 
            name="Accueil" 
            component={HomeStack}  
            options={({navigation}) => {
              return{
                title: 'Pharmacies',
                headerStyle: {
                  backgroundColor: 'green',
                  elevation: 0,
                  shadowOpacity: 0,
                  borderBottomWidth: 0,
                },
                headerShown: false,
              }              
              } 
            }
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = ScaledSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f6f6f6',
    padding: wp("3%"),
    borderRadius: 14,
    marginHorizontal: wp("1%"),
  },

  headerLogo:{
    width: wp("18%"),
    height: hp("10%"),
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 40
  },

  headerText:{
    fontSize: '17@s',
    color: 'green',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 8,
    padding: wp("1%")
  },

  footerContainer:{
    padding: wp("4%"),
    flexDirection: 'row',
    backgroundColor: '#f6f6f6',
  },

  footerText:{
    fontWeight: 'normal',
    fontSize: '14@s',
    marginLeft: wp("3%"),
  },


});
