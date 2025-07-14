import { View , Text , StyleSheet} from "react-native";
import Pastel from "../components/Pastel";
import ChartBar from "../components/ChartBar";
import Navbar from "../components/Navbar";
import PaintDemo from "../components/Victorychart";
function Stadistic(){
    return(
    <View style={styles.StadisticContainer}>   
        <Text style={styles.texto}>Pagina de Estadistica</Text>
        <PaintDemo/>
        <Navbar/>
    </View>
    );
}
const styles =  StyleSheet.create({
    StadisticContainer:{
        flex: 1,
        backgroundColor: '#290E15',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    texto:{
        color: '#f2dbe1',
        fontSize: 20,
    },
});
export default Stadistic;
