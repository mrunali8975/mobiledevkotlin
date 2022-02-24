import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Pressable,
    StatusBar,
  } from 'react-native';
  import React from 'react';
  import menu from './images/menu.png';
  import paytmlogo from './images/paytmlogo.png';
  import search from './images/search.png';
  import paytmbag from './images/paytmbag.png';
  import paymoney from './images/paymoney.png';
  import postcard from './images/postcard.png';
  import addmoney from './images/addmoney.png';
  import wallet from './images/wallet.png';
  import passbook from './images/passbook.png';
  import {color} from 'react-native-reanimated';
  import paytmtoll from './images/paytmtoll.png';
  import train from './images/train.png';
  import umbpaytm from './images/umbpaytm.png';
  import mobile from './images/mobile.png';
  import movie from './images/movie.png';
  import bus from './images/bus.png';
  import flight from './images/fflight.png';
  import gold from './images/gold.png';
  import electricity from './images/electricity.png';
  
  export default function Paytmui(props) {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={'#0b1e87'} barStyle="light-content" />
        <View style={styles.topbar}>
          <View style={styles.leftbartop}>
            <Image source={menu} style={styles.menulogo} />
            <Image
              source={paytmlogo}
              style={{width: 100, height: 30, marginLeft: 10}}
            />
          </View>
          <View style={styles.rightbartop}>
            <Image source={search} style={styles.glasslogo} />
            <Image source={paytmbag} style={styles.baglogo} />
          </View>
        </View>
        <View style={{flex: 1}}>
          <ScrollView>
            <View style={styles.Featuredsection}>
              <Text style={styles.featuredtect}>
                Tap to see your Paytm balance
              </Text>
              <View style={styles.featuredrow1}>
                <ScrollView horizontal={true}>
                  <View style={styles.upperbar}>
                    <Image source={paymoney} style={styles.paymoneylogo} />
                    <Text style={styles.uppertext}>Pay</Text>
                  </View>
                  <View style={styles.upperbar}>
                    <Image source={postcard} style={styles.paymoneylogo} />
                    <Text style={styles.uppertext}>Postcard</Text>
                  </View>
                  <View style={styles.upperbar}>
                    <Image source={addmoney} style={styles.paymoneylogo} />
                    <Text style={styles.uppertext}>Add Money</Text>
                  </View>
                  <View style={styles.upperbar}>
                    <Image source={passbook} style={styles.paymoneylogo} />
                    <Text style={styles.uppertext}>Passbook</Text>
                  </View>
                  <View style={styles.upperbar}>
                    <Image source={wallet} style={styles.paymoneylogo} />
                    <Text style={styles.uppertext}>wallet</Text>
                  </View>
                  <View style={styles.upperbar}>
                    <Image source={wallet} style={styles.paymoneylogo} />
                    <Text style={styles.uppertext}>wallet</Text>
                  </View>
                  <View style={styles.upperbar}>
                    <Image source={wallet} style={styles.paymoneylogo} />
                    <Text style={styles.uppertext}>wallet</Text>
                  </View>
                  <View style={styles.upperbar}>
                    <Image source={wallet} style={styles.paymoneylogo} />
                    <Text style={styles.uppertext}>wallet</Text>
                  </View>
                  <View style={styles.upperbar}>
                    <Image source={wallet} style={styles.paymoneylogo} />
                    <Text style={styles.uppertext}>wallet</Text>
                  </View>
                </ScrollView>
              </View>
            </View>
  
            <View style={{backgroundColor: '#fff', height: 'auto', padding: 20}}>
              <Text style={styles.rechargeText}>Recharge or Pay for</Text>
              <View style={styles.secondheaderwrap}>
                <View style={styles.secondupperbar}>
                  <Image style={styles.seconditemicon} source={mobile}></Image>
                  <Text style={styles.seconduppericontext}>mobile</Text>
                </View>
                <View style={styles.secondupperbar}>
                  <Image style={styles.seconditemicon} source={movie}></Image>
                  <Text style={styles.seconduppericontext}>Movie</Text>
                </View>
                <View style={styles.secondupperbar}>
                  <Image style={styles.seconditemicon} source={train}></Image>
                  <Text style={styles.seconduppericontext}>Train</Text>
                </View>
                <View style={styles.secondupperbar}>
                  <Image style={styles.seconditemicon} source={umbpaytm}></Image>
                  <Text style={styles.seconduppericontext}>Umbrella</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                height: 'auto',
                padding: 20,
                marginTop: 10,
              }}>
              <Text style={styles.rechargeText}>Book on Paytm</Text>
              <View style={styles.secondheaderwrap}>
                <View style={styles.secondupperbar}>
                  <Image source={electricity} style={styles.seconditemicon} />
                  <Text style={styles.seconduppericontext}>Movie</Text>
                </View>
                <View style={styles.secondupperbar}>
                  <Image source={bus} style={styles.seconditemicon} />
                  <Text style={styles.seconduppericontext}>Bus</Text>
                </View>
                <View style={styles.secondupperbar}>
                  <Image source={flight} style={styles.seconditemicon} />
                  <Text style={styles.seconduppericontext}>flight</Text>
                </View>
                <View style={styles.secondupperbar}>
                  <Image source={gold} style={styles.seconditemicon} />
                  <Text style={styles.seconduppericontext}>Gold</Text>
                </View>
              </View>
            </View>
  
           
  
            
          </ScrollView>
          <View style={{flexDirection:"row",justifyContent:'space-between',padding:5,marginTop:30,backgroundColor:'#fff'}}>
              <View style={styles.bottomNavItem}>
                <Image style={styles.bottomNavIcon}source={movie}/>
                <Text>bus</Text>
              </View>
  
              <View style={styles.bottomNavItem}>
                <Image style={styles.bottomNavIcon} source={bus}/>
                <Text>train</Text>
              </View>
              <View style={styles.bottomNavItem}>
                <Image style={styles.bottomNavIcon}source={gold}/>
                <Text>gold</Text>
              </View>
              <View style={styles.bottomNavItem}>
                <Image style={styles.bottomNavIcon}source={train}/>
                <Text>train</Text>
              </View>
              <View style={styles.bottomNavItem}>
                <Image style={styles.bottomNavIcon}source={train}/>
                <Text>train</Text>
              </View>
            </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    uppertext: {
      color: '#fff',
      fontWeight: '500',
      textAlign: 'center',
      marginBottom: 5,
      fontSize: 17,
    },
    menulogo: {
      height: 30,
      width: 30,
    },
    glasslogo: {
      height: 30,
      width: 30,
      marginRight: 21,
    },
    baglogo: {
      height: 30,
      width: 30,
      marginRight: 12,
    },
    textpaytm: {
      fontSize: 25,
      marginLeft: 30,
      color: '#042f6c',
      fontWeight: '900',
    },
    textpaytm2: {
      fontSize: 25,
      color: '#14b1ec',
      fontWeight: '900',
    },
    topbar: {
      backgroundColor: 'white',
      flexDirection: 'row',
      padding: 13,
      justifyContent: 'space-between',
    },
    leftbartop: {
      backgroundColor: 'white',
      flexDirection: 'row',
    },
    rightbartop: {
      backgroundColor: 'white',
      flexDirection: 'row',
    },
    Featuredsection: {
      height: 'auto',
      backgroundColor: '#0b1e87',
      // padding:30
    },
    recommsection: {
      height: 'auto',
      margin: 25,
      borderRadius: 10,
    },
  
    featuredtect: {
      color: '#fff',
      paddingLeft: 20,
      paddingTop: 15,
  
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    recommtext: {
      color: '#1e1e1f',
      fontWeight: 'bold',
      fontSize: 22,
    },
    paymoneylogo: {
      height: 45,
      width: 45,
    },
    shoplogo: {
      height: 50,
      width: 50,
    },
  
    recomlogo: {
      height: 30,
      width: 30,
    },
  
    featuredrow1: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 25,
    },
  
    featuredrow2: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 18,
      marginBottom: 40,
    },
    upperbar: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
    },
  
    secondheaderwrap: {
      flexDirection: 'row',
      marginTop: 25,
    },
    seconditemicon: {
      height: 45,
      width: 45,
    },
    secondupperbar: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#fff',
    },
    rechargeText: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: '500',
      color: '#000',
    },
    seconduppericontext: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '400',
      color: '#000',
    },
    bottomNavIcon:
    {
        height:40,
        width:40
  
    },
   
  
  });
  