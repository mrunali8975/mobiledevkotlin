import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';

export default function PriceDetails() {
  return (
      <View>
    <ScrollView>
      <View style={{}}>
        <View>
          <Text style={styles.pricedetailsheading}>Price Details</Text>
        </View>
        <View>
          <View style={styles.pricedetailsupper}>
            <Text style={styles.pricetext} >Price(1 item) </Text>
            <Text style={styles.pricetext}>$19,045 </Text>
          </View>

        <View style={styles.pricedetailsupper}>
            <Text style={styles.pricetext}>Discount</Text>
            <Text style={styles.pricetext}>$19,045</Text>
          </View>
          <View style={styles.pricedetailsupper}>
            <Text style={styles.pricetext}>Delivery Charges</Text>
            <Text style={styles.pricetext}>FREE</Text>
          </View>
        </View>
        <View>
          <View style={styles.totalamount}>
            <Text style={styles.totalamouttext}>Total Amount</Text>
            <Text style={styles.totalamouttext}>$19,045</Text>
          </View> 
        </View>

        <View style={{margin:10}}>
          <Text style={styles.greenText}>You will save $5,046 on this order</Text>
        </View>
        <View style={styles.pinkview}>
          <Text style={styles.pinkviewtext}>Save extra $238 usin 238 SuperCoins on the next step</Text>
        <Text  style={styles.pinkviewtext}> Balance: 214 </Text>
        </View>

       <View>
           <Text> Safe and secure payments. Easy returns.</Text>
          <Text>100% Authentic products </Text>
        </View> 
      </View>
    </ScrollView>

    <View>
        <Text>

        </Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    pinkview:
    {
backgroundColor:'#F5D8C4',
    
height:50
},
pinkviewtext:
{
 fontWeight:'422'
, fontSize:15,
color:'#000'
},
    greenText:{


        fontWeight:'bold',
        fontSize:22,
        color:'green'
    },
  pricedetailsheading: {
    margin: 20,
    fontSize: 22,
    color: '#999',
    fontWeight: 'bold',
    marginBottom:10,
    height:'auto'

  },
  pricedetailsupper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10

  },
  totalamount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  totalamouttext: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000',
  },
  pricetext:
  {fontWeight:'600',
    
    fontSize: 20,
    color: '#000',
    
  },
});
