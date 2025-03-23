import React from "react";
import { StyleSheet,TouchableOpacity,Image } from "react-native";
import {useNavigation} from '@react-navigation/native';


function CustomButton(props) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(props.page)}>
        <Image source={props.imageButton} style={styles.imageButton} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#f2dbe1',
      height: 48,
      width: 48,
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 600,
      marginTop: 30,
    },
    imageButton: {
      resizeMode: 'contain',    
    },
  });

export default CustomButton;