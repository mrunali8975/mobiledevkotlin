/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import { View, Text, SafeAreaView, StatusBar,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import renderer from 'react-test-renderer';
import ListData from './listdata';
// import ApiCall from './apicall'
import Rnform from './rnform';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailPage from './detailPage';
import Movieapp from './movieapp';
import ApiCall from './apicallj';
import Cart from './cart'
import CategoryPage from './categoryPage'
import  Login from './login'
import Quiz from './quiz';
const Stack = createNativeStackNavigator();

const App = () => {
  return(
  
     <NavigationContainer>{
 <Stack.Navigator initialRouteName='Quiz'
 screenOptions={{
  headerShown: false,
}}
 >
 {/* <Stack.Screen name="Home" component={ApiCall} />
 <Stack.Screen name="form" component={Rnform} /> */}
 
 <Stack.Screen name="ApiCall" component={ApiCall} />
<Stack.Screen name="Cart" component={Cart} /> 

  <Stack.Screen name='CategoryPage' component={CategoryPage}/> 
  <Stack.Screen name='Login' component={Login}/> 
  <Stack.Screen name='Quiz' component={Quiz}/> 


 </Stack.Navigator>      
      
      }</NavigationContainer>
    
     

  
  
  );
};
const page = StyleSheet.create({
container:
{
  padding:20,
 backgroundColor:"#999",
 flex: 1

  
},
textcolor:
{ color:'#000',
  textAlign:'center',

}
});     
export default App;    



