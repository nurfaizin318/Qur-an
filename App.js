

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Menu from './Screen/Menu';
import Home from './Screen/Home';
import Surah from './Screen/Surah'
import {color} from './Utils'


const Stack = createStackNavigator();
const App = (props) => {
  return (
    <>
      <StatusBar backgroundColor={color.green1} barStyle="light-content" />
      <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
                <Stack.Navigator initialRouteName="Menu">
                <Stack.Screen name="Menu" component={Menu} 
                  options={{headerShown:false}}
                  />
                  <Stack.Screen name="Home" component={Home} 
                  options={({route})=>({headerShown:true,headerTitleAlign:"center",
                  headerStyle:{backgroundColor:'#004D40',},
                  headerTintColor:"white",title:"Surah"})}
                  />
                  <Stack.Screen name="Surah" component={Surah} 
                   options={({route})=>({headerShown:true,headerTitleAlign:"center",
                   headerStyle:{backgroundColor:'#004D40',elevation:0},
                   headerTintColor:"white",title:route.params.title})}
                  />

                  </Stack.Navigator>
                </NavigationContainer>
      </SafeAreaView>
    </>
  );
};



export default App;
