import React from "react"; 
import {Platform, StyleSheet, Text, View, Image, WebView, Button }from "react-native"; 

const styles = StyleSheet.create( {
  icon: {
    width:32, 
    height:32, 
  }, 
}); 

class SettingsScreen extends React.Component {

    static navigationOptions = ( {navigation }) =>  {
        const {state} = navigation; 
        return {
          headerMode:'screen', 
          title:"Settings"
        }; 
      }; 

    render() {

        const {navigation } = this.props; 

        return ( < Text > Settings </Text > )

    }


}


export default SettingsScreen; 