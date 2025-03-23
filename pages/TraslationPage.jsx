import {View, Text,StyleSheet} from 'react-native';
import Navbar from '../components/Navbar';


export default function TraslationPage() {

    return (
        <View style={styles.TraslationContainer}>
            <Text style={styles.texto}>Pagina de Traduccion :D</Text>
            <Navbar/>
        </View>
    );
}
const styles = StyleSheet.create({
    TraslationContainer:{
        flex: 1,
        backgroundColor: '#290e15',
        justifyContent: 'center',
        color: '#f2dbe1',
    },
    texto:{
        color: '#f2dbe1',
        fontSize: 20,
    },
});