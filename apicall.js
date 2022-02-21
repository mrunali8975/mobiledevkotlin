import { ScrollView, Text, View, Image ,StyleSheet,Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function ApiCall() {
  const [apiData, setapiData] = useState([]);

  const apiURL = 'https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0'
  useEffect(() => {
    axios.get(apiURL).then((data) => {
      setapiData(data.data);
      console.log('first', data);

    });

  }, []);




  return (
    <View style={styls.container}>
      <ScrollView>
        <Text style={styls.pageheading}> Api calll</Text>
        {

          apiData?.store_items?.map(item => {
            return (
              <View>
                <Text style={styls.catName}>
                  {item.category && item.category.name}
                </Text>
                <View style={styls.productItemContainer}>
                  {
                    item?.items?.map((productItem) => {
                      return (
                        <View style={styls.productItem }>
                          <Image style={{ height: 150, width: '100%' }} source={{ uri: productItem?.image_url }} />
                          <Text style={{fontSize:15,marginBottom:10,color:'#000',textAlign:'center',fontWeight:'bold'}}>{productItem?.name}</Text>
                          <View style={styls.priceWrap}>
                            <Text style={styls.oprice}> {productItem?.price }INR </Text>
                            <Text style={styls.dprice}>{productItem?.discounted_price}INR </Text>
                            </View>
                            <View>
                              <Button title="Add to cart" />              
                                              </View>


                        </View>
                      );
                    })              
                  }
                </View>                   
              </View>

            );
          })

                }










      </ScrollView>
    </View>








  );
}


const styls = StyleSheet.create(
  {
    container:
    {
padding:20
    },
                    
pageheading:{
  fontSize:20,
  textAlign:'center',
  fontWeight:'bold',
  color:'#000'
},
productItemContainer:
{
flexDirection:"row"    
,
flexWrap:"wrap"                   
},
productItem:
{
width:"38.33%",
margin:10,
padding:10,
borderWidth:1,
borderStyle:"dotted",
borderColor:"#000",
borderRadius:8,
marginBottom:20,
backgroundColor:'#999',
marginHorizontal:20,marginVertical:20
},
catName:
{
  color:"#000",
  textAlign:"center",
  backgroundColor:"blue",
  padding:15,
  fontWeight:"bold",
  marginVertical:10
},
priceWrap:
{
  flexDirection:'row',


},
dprice:
{
  fontWeight:'bold',
  fontSize:16

},
oprice:
{
  textDecorationLine:'line-through',
}           

  }     
)                 

