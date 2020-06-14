/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Home from './Screen/Home/'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#BF360C" barStyle="light-content" />
      <SafeAreaView style={{flex:1}}>
        <Home />
      </SafeAreaView>
    </>
  );
};



export default App;
