import { View,StyleSheet,Text,ScrollView} from "react-native";
import { BarChart } from "react-native-gifted-charts";
function ChartBar() {
    const data = [
        {label:"L",value: 54, frontColor: '#f2dbe1'},
        {label:"M",value: 40, frontColor: '#dcc0c8'},
        {label:"M",value: 20, frontColor: '#c2a2aa'},
        {label:"J",value: 30, frontColor: '#c2a2aa'},
        {label:"V",value: 10, frontColor: '#c2a2aa'},
    ];
    return(
        <View style={styles.Chartcontainer}>
        <Text style={styles.texto}>Usos Diarios</Text>
        <ScrollView>
        <BarChart
        horizontal
        barWidth={22}
        barMarginBottom={15}
        barBorderRadius={4}
        textColor="white"
        frontColor="lightgray"
        data={data}
        yAxisThickness={0}
        xAxisThickness={0}
        hideYAxisText
        xAxisLabelTextStyle={{color: '#f2dbe1'}}
        />
        </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    Chartcontainer:{
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
    },
    texto:{
        color: '#f2dbe1',
        textAlign: 'center',
        fontSize: 25,
    },
})
export default ChartBar;