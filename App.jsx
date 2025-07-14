import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';
import Page from './components/pageMiau';
import CustomButton from './components/Custom-button';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stadistic from './pages/StadisticPage';
import QuestionPage from './pages/QuestionPage';
import TraslationPage from './pages/TraslationPage';


const { width } = Dimensions.get("window");

function HomeScreen() {
  const screenPadding = 20;
  const stepFormWidth = width - screenPadding * 2;
  return (
     <View style={styles.container}>
      <StatusBar backgroundColor="#b86d81" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20,paddingBottom:0,}}>
      <CustomButton imageButton={require('./assets/arrowExit.png')} page="Stadistic"/>
      <CustomButton imageButton={require('./assets/arrowBack.png')} page="Stadistic"/>
      </View>
      <ScrollView  contentContainerStyle={{flexGrow: 1,position: "relative",justifyContent:"center",paddingVertical:"160"}} horizontal pagingEnabled>
        <Page nameImage={require('./assets/img-background1.png')} contentText="¡Unete a nuestros usuarios y juga para aprender ingles!"/>
        <Page nameImage={require('./assets/img-background2.jpg')} contentText="¡Se parte de esta gran comunidad que cada dia crece más!"/>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Stadistic' component={Stadistic} options={{headerShown: false}}/>
      <Stack.Screen name='Question' component={QuestionPage} options={{headerShown: false}}/>
      <Stack.Screen name='Traslation' component={TraslationPage} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
    flex: 1,
    backgroundColor: '#290e15',
  },
});
