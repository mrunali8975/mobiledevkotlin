import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import React from 'react';

export default function ProductItem(props) {
  const productItem = props?.data;
  const cardData= props?.cardData;
  return (
    <View style={styles.productItem} key={productItem?.id}>
       <TouchableOpacity
           onPress={() =>
           props.navigation.navigate('DetailPage', {
      data: productItem,
            })
          }>
          <Image
            style={{height: 150, width: '100%'}}
            source={{uri: productItem?.image_url}}
          />
          <Text
            style={{
              fontSize: 15,
              marginBottom: 10,
              color: '#000',
            }}
            numberOfLines={1}>
            {productItem?.name}
          </Text>
          <View style={styles.priceWrap}>
            <Text style={styles.dprice}>
              {productItem?.price} INR
            </Text>
            <Text style={styles.oprice}>
              {productItem?.discounted_price} INR
            </Text>
          </View>
        </TouchableOpacity>
        {cardData[productItem?.id]?.quantity ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => props.decreamentCart(productItem?.id)}>
              <Text
                style={{
                  flex: 1,
                  backgroundColor: 'blue',
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 20,
                }}>
                {' '}
                -{' '}
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                flex: 1,
                color: 'blue',
                textAlign: 'center',
                fontSize: 20,
              }}>
              {cardData[productItem?.id]?.quantity}
            </Text>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => props.increamentCart(productItem?.id)}>
              <Text
                style={{
                  flex: 1,
                  backgroundColor: 'blue',
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 25,
                }}>
                {' '}
                +{' '}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Button
            onPress={() => props.handleCart(productItem)}
            title="Add to cart"
          />
        )}
      </View>
 
    
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
