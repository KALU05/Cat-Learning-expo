import { View, Text,StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';


export default function QuestionPage() {
  return (
    <View style={styles.QuestionContainer}>
        <Text style={styles.texto}>QuestionPage</Text>
        <Navbar/>
    </View>
  );
}
const styles = StyleSheet.create({
    QuestionContainer:{
        flex: 1,
        backgroundColor: '#290e15',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        color: '#f2dbe1',
    },
    texto:{
        color: '#f2dbe1',
        fontSize: 20,
    },
});