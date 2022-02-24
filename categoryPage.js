import { View, Text } from 'react-native'
import React from 'react'
import ProductItem from './productItem';
import { ScrollView } from 'react-native-gesture-handler';


export default function CategoryPage(props) {
    console.log(props)
    const catData =props?.route?.params?.data;
    const cartData = props?.route?.params?.cardData;
  return (
    <ScrollView >
      <Text>{catData?.category?.name}</Text>
      <View style={{flexDirection:'row',flexWrap:'wrap'}}>
      {
          catData?.items?.map((item)=>
          {
              return  (<ProductItem data={item}  cardData={cartData}/>)

              
          })
      }
       </View>
    </ScrollView>
  )
}