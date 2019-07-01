import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps'

export class GetPosition extends Component
  <Props> {
    render() {
      return (
        <MapView
        style={{flex: 1}}
        region={{
          latitude: 42.361145,
          longitude: -71.057083,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
        zoomEnabled={true}
        />
      );
    }}
