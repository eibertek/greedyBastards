import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import CharacterHud from './CharacterHud';
import CharMarker from './CharMarker';

export default class Maps extends Component {
    state = {
        altitude:0,
        longitude:0,
        latitude:0,
    };
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(data=>{
            this.setState({
                altitude: data.coords.altitude,
                longitude: data.coords.longitude,
                latitude: data.coords.latitude,
            });
        });
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker coordinate={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                            }} 
                            onPress={()=> console.warn('Pressed')}                        
                        >
                            <CharMarker />
                        </Marker>
                    </MapView>
                </View>
                <View>
                    <CharacterHud style={styles.userHud} />
                </View>
            </View>
    );
    }
}


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 1000,
    //    width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      userHud:{
        position: 'absolute',
        top:80,
        left:20,
        backgroundColor:"#CCCCCC",
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
});
  