import React from 'react';
import { Text } from 'react-native';

export function ChewyText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'chewy' }]} />
  );
}
