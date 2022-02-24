import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Button,
  Pressable,
  Linking,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Cart from './cart';
import CategoryPage from './categoryPage';
import ProductItem from './productItem';

export default function ApiCall(props) {
  const [apiData, setapiData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [cardData, setcardData] = useState({});
  const [totQty, settotQty] = useState(0);
  const apiURL =
    'https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0';

  useEffect(() => {
    //start loader
    setisLoading(true);

    axios
      .get(apiURL)
      //api is pending. api call is going on in the server
      .then(data => {
        //api call is success and complete
        //false loader
        setapiData(data.data);
        setisLoading(false);
      })
      .catch(() => {
        //loader is false
        //error handling
        setisLoading(false);
      });
    //empty array means it will work only first time it loads
  }, []);

  useEffect(() => {
    var totalquantity = 0;
    cardData &&
      Object.keys(cardData).length &&
      Object.keys(cardData).map(key => {
        totalquantity = totalquantity + cardData[key]?.quantity;
        console.log(totalquantity);
        settotQty(totalquantity);
      });
  }, [cardData]);

  const handleCart = productItem => {
    let cardPayload = {...cardData};
    cardPayload[productItem?.id] = {
      ...productItem,
      quantity: 1,
    };
    setcardData(cardPayload);
  };

  const increamentCart = id => {
    let cardPayload = {...cardData};

    cardPayload[id].quantity = cardPayload[id].quantity + 1;
    setcardData(cardPayload);
  };
  const decreamentCart = id => {
    let cardPayload = {...cardData};
    cardPayload[id].quantity = cardPayload[id].quantity - 1;
    setcardData(cardPayload);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.pageHeading}>ApiCall</Text>
        <Pressable
          onPress={() => {
            Linking.openURL('sms: +91-8377844923');
          }}>
          <Text>Redirect me to google in browser</Text>
        </Pressable>
        {isLoading ? <Text>Please wait... Loading</Text> : null}
        <ScrollView>
          {apiData?.store_items?.map(item => {
            return (
              <View key={item.category.name}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('CategoryPage', {data: item , cardData})
                  }>
                  <Text style={styles.catName}>
                    {item.category && item.category.name}
                  </Text>
                </TouchableOpacity>

                <View style={styles.productItemContainer}>
                  {item?.items?.slice(0, 2)?.map(productItem => {
                    return (


                        <ProductItem data={productItem} 
                        cardData={cardData}
                        handleCart={handleCart}
                        increamentCart={increamentCart}
                        decreamentCart={decreamentCart}
                        />

                    
                    );
                  })}
                </View>
                {item?.items?.length > 2 ? (
                  <Text> See All Product </Text>
                ) : null}
              </View>
            );
          })}
        </ScrollView>
        {cardData && Object.keys(cardData).length ? (
          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              backgroundColor: '#000',
            }}
            onPress={() => props.navigation.navigate('Cart', {data: cardData})}>
            <Text style={{color: '#fff'}}> View Cart</Text>
            <Text style={{color: '#fff'}}>{totQty}</Text>
          </Pressable>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageHeading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  productItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productItem: {
    width: '44%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'dotted',
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  catName: {
    color: '#000',
    textAlign: 'center',
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
    marginVertical: 10,
  },
  priceWrap: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  dprice: {
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  oprice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
