
import { StyleSheet , Text , View} from 'react-native';
import stepFormWidth from '../App';
function Circle(props) {
  return (
    <View style={style.circle}>
      <Text style={style.texto}>{props.text}</Text>
    </View>
  );
}

const style = StyleSheet.create({
    circle: {
      position: 'relative',
      top: 120,
      backgroundColor: '#f2dbe1',
      textAlign: 'center',
      fontSize: 30,
      color: '#290e15',
      alignItems: 'center',
      justifyContent: 'center',
      height: '30%',
      width: 300,
      borderRadius: 300,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      margin: 0,
      marginLeft: 0,
    },
    texto: {
      color: '#290e15',
      fontSize: 20,
      textAlign: 'center',
      padding: 10,
    },
  });

export default Circle;