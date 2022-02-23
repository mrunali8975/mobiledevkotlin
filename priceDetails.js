import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import supercoin from '/Users/user213309/flipkart/supercoin.png';

export default function PriceDetails() {
  return (
    <View style={{backgroundColor:'#fff'}} >
      <ScrollView>
        <View style={{backgroundColor:'#fff'}}>
          <View>
            <Text style={styles.pricedetailsheading}>Price Details</Text>
          </View>
          <View style={{marginTop:5}}>
            <View style={styles.pricedetailsupper}>
              <Text style={styles.pricetext}>Price(1 item) </Text>
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

          <View style={{margin: 10}}>
            <Text style={styles.greenText}>
              You will save $5,046 on this order
            </Text>
          </View>
          <View style={styles.pinkview}>
            <Text style={styles.pinkviewtext}>
              Save extra $238 usin 238 SuperCoins on the next step
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.pinkviewtext}>Balance:</Text>
              <Image source={supercoin} style={styles.supercoin} />
              <Text style={styles.pinkviewtext}> 214 </Text>
            </View>
          </View>

          <View style={styles.safeArea}>
            <Text style={styles.safeAreaText}>
              Safe and secure payments.Easy returns.
            </Text>
            <Text style={styles.safeAreaText}>100% Authentic products </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomheader}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 35, color: '#000'}}>
            13,999
          </Text>
          <Text style={{fontSize: 18, fontWeight: '900', color: '#2874f0'}}>
            View price details
          </Text>
        </View>
        <View style={styles.placeorder}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              color: '#fff',
              textAlign: 'center',
            }}>
            Place Order
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  supercoin: {
    height: 13,
    width: 13,
    marginTop: 5,
  },
  placeorder: {
    backgroundColor: '#fb641b',
    padding: 10,
    width: '50%',
  },
  bottomheader: {
    flexDirection: 'row',
    height: 'auto',
    justifyContent: 'space-between',
    margin: 10,
  },
  safeArea: {
    backgroundColor: '#EBEDEF',
    height: 'auto',
    justifyContent: 'center',
    padding: 20,
    width: 'auto',
  },
  safeAreaText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  pinkview: {
    backgroundColor: '#FCF1AA',
    height: 70,
    padding: 10,
  },
  pinkviewtext: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 20,
    color: '#000',
  },
  greenText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#1D830B',
  },
  pricedetailsheading: {
    margin: 10,
    fontSize: 22,
    color: '#999',
    fontWeight: 'bold',
    marginBottom: 10,
    height: 'auto',
  },
  pricedetailsupper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
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
  pricetext: {
    fontWeight: '600',

    fontSize: 20,
    color: '#000',
  },
});
