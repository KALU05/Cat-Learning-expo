import { View , Text , StyleSheet} from "react-native";
import Navbar from "../components/Navbar";
import Pastel from "../components/Pastel";
import ChartBar from "../components/ChartBar";

function Stadistic(){
    return(
    <View style={styles.StadisticContainer}>   
        <Text style={styles.texto}>Pagina de Estadistica</Text>
        <Pastel/>
        <ChartBar/>
        <Navbar/>
    </View>
    );
}
const styles =  StyleSheet.create({
    StadisticContainer:{
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
export default Stadistic;
