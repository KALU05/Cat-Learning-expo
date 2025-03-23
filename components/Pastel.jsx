import { PieChart } from "react-native-gifted-charts";
import { View,StyleSheet,Text} from "react-native";
        
export default function Pastel() {
    const pieData = [
        {value: 54, color: '#f2dbe1',},
        {value: 20, color: '#dcc0c8',}
    ];
    
    return(
        <View style={styles.Piecontainer}>
            <Text style={styles.texto}>Porcentaje de Respuestas :D</Text>
            <PieChart
            textColor="#b5abad"
            radius={150}
            textSize={20}
            showTextBackground
            textBackgroundRadius={30}
            donut
            textBackgroundColor="#f8eaee"
            innerRadius={90}
            innerCircleColor={"#290e15"}
            centerLabelComponent={()=>{
                return <Text style={styles.texto}>54%</Text>
            }}
            data={pieData}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    Piecontainer:{
        backgroundColor: '#290e15',
        justifyContent: 'center',
        color: '#f2dbe1',
    },
    texto:{
        color: '#f2dbe1',
        textAlign: 'center',
        fontSize: 25,
    },
    });