import { View, StyleSheet} from "react-native";
import CustomButton from "./Custom-button";

export default function Navbar() {
  return (
    <View style={styles.Navbar}>
      <CustomButton page="Traslation" imageButton={require("../assets/traslate.png")} />
      <CustomButton page="Stadistic" imageButton={require("../assets/home.png")}/>
      <CustomButton page="Question" imageButton={require("../assets/quiz.png")}/>
    </View>
  );
}
const styles = StyleSheet.create({
  Navbar:{
    position:"relative",
    top: 30,
    backgroundColor: '#f2dbe1',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius:20,
    paddingBottom: 20,
    width: '90%',
  },
});