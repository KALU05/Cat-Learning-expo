import { View, StyleSheet } from 'react-native';
import React from 'react';
function Circulo() {
  return (
    <View style={style.circulo}>
    </View>
  );
}
const style = StyleSheet.create({
    circulo: {
      backgroundColor: '#bca7ac',
      height: 20,
      width: 20,
      borderRadius: 300,
      margin: 10,
    },
  });
export default Circulo;