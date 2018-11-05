import React from "react"; 
import {Platform, StyleSheet, Text, View, Image, WebView, Button,TouchableOpacity }from "react-native"; 
import {Constants, Location, Permissions, MapView }from "expo"; 
import {createStackNavigator, createDrawerNavigator,NavigationActions }from 'react-navigation'; 

import MapScreen from './components/map'; 
import ImagePopup from './components/image-popup'; 
import SettingsScreen from './components/settings';



const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});

var createDrawerEntry = function(routes, intialRouteName) {
  return createStackNavigator( 
    routes,  {
  intialRouteName: intialRouteName, 
  navigationOptions: ({ navigation }) => {
    return {
    headerMode:'screen',
    headerLeft:  
  //  <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
    <Image 
    source={require('./images/Hamburger_icon.png')}
    style={[styles.icon]}
    onPress={() => 
      navigation.toggleDrawer()}/>
 //     </TouchableOpacity>
     }
    } 
   }
  );

};


const MapStack = createDrawerEntry({
  Map:MapScreen, 
  Image:ImagePopup, 
}, 'Map'); 

const SettingsStack = createDrawerEntry({
  Settings:SettingsScreen,  
}, 'Settings'); 
   

export default createDrawerNavigator({
  Map:  {
    screen: MapStack,
    navigationOptions: {
      drawerLabel: 'Map',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./images/world.png')}
          style={[styles.icon, {tintColor: tintColor}]}
      />),
    }
  },  
  Settings: {   
    screen: SettingsStack,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./images/settings.png')}
          style={[styles.icon, {tintColor: tintColor}]}
      />),
    }
  },  
}
);
