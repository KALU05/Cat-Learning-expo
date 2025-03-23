import React from 'react';
import { View, StyleSheet } from 'react-native';
import Circle from './Circle-text';
import ImageDescription from './Image-description';
function Page(props) {
  return (
    <View style={styles.container}>
        <ImageDescription imgSelection={props.nameImage}/>
        <Circle text={props.contentText} />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#290e15',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
  });

export default Page;