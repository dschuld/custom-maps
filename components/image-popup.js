import React from "react"; 
import {Platform, StyleSheet, Text, View, Image, WebView, Button }from "react-native"; 

const styles = StyleSheet.create( {
  icon: {
    width:32, 
    height:32, 
  }, 
}); 

class ImagePopup extends React.Component {
	static navigationOptions = ( {navigation }) =>  {
    const {state} = navigation; 
    return {
      headerMode:'screen', 
      title:navigation.getParam('title', './test.jpg')
    }; 
  }; 

render() {

	const {navigation } = this.props; 
	const link = navigation.getParam('imageLink', './test.jpg'); 
	const stringLink = JSON.stringify(link).replace(/"/g,"");
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		    <Image
		      style={{width: 240, height: 180}}
		      source={{uri: stringLink}}
		    />
      </View>
    );
  }
}


export default ImagePopup;
