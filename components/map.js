import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Image, WebView, Button  } from 'react-native'
import { UrlTile, MapView } from 'expo' 

const Marker = MapView.Marker

export default class MapScreen extends Component {

    
  static navigationOptions = ( {navigation }) =>  {

    const {state: {params =  {}}} = navigation; 
    return {
      headerMode:'screen', 
      title:params.title || 'Default Title', 
    }; 
  }; 

    constructor(props) {
      super(props); 
      this.state =  {
        region:defaultRegion, 
      isLoading:true, 
      markers:[], 
	    location:null, 
      errorMessage:null, 
      }; 


    }

  renderMarkers() {
   
  }
  
  render() {
    const { region } = this.props
    return (
      <View style =  { {
        flex:1
      }} > 
       
      <MapView
           style =  { {
            flex:1
          }}
        region={region}
        showsUserLocation
        showsMyLocationButton
      >
      				<MapView.UrlTile
        	   /**
        	   * The url template of the tile server. The patterns {x} {y} {z} will be replaced at runtime
        	   * For example, http://c.tile.openstreetmap.org/{z}/{x}/{y}.png */
        		urlTemplate =  {'https://s3.eu-central-1.amazonaws.com/hundredtickets-tiles-eu-central/kigali/{z}/{x}/{y}.png'}
		maximumZ =  {19}
        	  />
       {
          	//   this.state.isLoading?null:this.state.markers.map((marker, index) =>  {
            //     const coords =  {
            //      latitude:parseFloat(marker.latitude), 
            //      longitude:parseFloat(marker.longitude), 
            //     }; 

            // const metadata = `Status:$ {marker.title}`; 


            // //TODO callout image works only with WebView, not with local image source https://github.com/react-community/react-native-maps/issues/1870
            // // Adapt for portrait photos
            // return (
              // <MapView.Marker></MapView.Marker > 
                    // key =  {index}
                    // coordinate =  {coords}
                    // title =  {marker.tags}
                    // image =  {require('../measle_blue.png')}
                    // description =  {metadata}
                    // onCalloutPress =  {() => console.log('Clicked')}
                    // onPress =  {() => this.props.navigation.navigate('Image',  {imageLink:marker.media.m, title:marker.title})}>
                     
                     
            // ); 
            })
           }
      </MapView>

      
             </View > 
    )
  }

  fetchMarkerData() {
  	const flickrUri = encodeURIComponent('https://api.flickr.com/services/feeds/geo/?id=156388485@N08&lang=en-us&format=json&georss=true&tagmode=any&tags=plants');
fetch('https://e3oy6adsxc.execute-api.eu-central-1.amazonaws.com/prod/JSONPProxyCall?url=' + flickrUri)
.then((response) => response.json())
      .then((responseJson) =>  {
        this.setState( {
          isLoading:false, 
          markers:responseJson.items, 
        }); 
      })
      .catch((error) =>  {
        console.log(error); 
      }); 
  }

  componentDidMount() {
	this.fetchMarkerData(); 
		/*
      return getCurrentLocation().then(position => {
        if (position) {
          this.setState({
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.003,
              longitudeDelta: 0.003,
            },
          });
        }
      });
	  */
  }
  
}

const defaultRegion =  {
  latitude:50.18154571314337, 
  longitude:-125.05610634556518, 
  latitudeDelta:0.6, 
  longitudeDelta:0.6, 
};

export const getCurrentLocation = () =>  {
  return new Promise((resolve, reject) =>  {
    navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e)); 
  }); 
}; 

const styles = {
  icon: {
    width:24, 
    height:24, 
  },
  container: {
    width: '100%',
    height: '80%',
  }
}