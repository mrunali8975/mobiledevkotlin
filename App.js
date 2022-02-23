/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import Header from "./header";
import Discounts from "./discounts";
import PriceDetails from "./priceDetails";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <Header/>
      <Discounts/>
      <PriceDetails/>
    </SafeAreaView>
  );
};

export default App;
