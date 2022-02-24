import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from './header';
import Discounts from './discounts';

export default function Homepage(props) {
  return (
    <View style={{flex: 1}}>
      <Header navigation={props.navigation}/>
      <ScrollView>
        <Discounts />
      </ScrollView>
    </View>
  );
}
