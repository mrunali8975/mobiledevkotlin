import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Button, Pressable, ActivityIndicatorBase, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'
import axios from 'axios'
import { color } from 'react-native-reanimated'
import { ListItem } from 'react-native-elements/dist/list/ListItem'

export default function Movieapp() {
    var url = 'https://api.dotshowroom.in/api/dotk/catalog/searchItems'

    const [apiData,setapiData] = useState([]);
const [isLoading, setIsLoading] = useState(false)
    const handleChange = (value) => {
        setIsLoading(true)
        axios.post(url,
            {

                page: 1,
                store_id: 2490120,
                search_text: value,
            }).then((data) => {
             setapiData(data.data);
             console.log(data ,"name")

                setIsLoading(false)

            }).catch((error)=>
            {
       
                setIsLoading(false);
               
            })
    };
  
    return (
        <ScrollView>

            <View style={pagestyle.container}>
                <ImageBackground style={pagestyle.backgroundImage} source={{ uri: 'https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg' }}>
                    <Image style={pagestyle.logoImage}
                        source={{ uri: 'data:image/png;base64,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' }} />          
                              </ImageBackground>
                <Text style={pagestyle.heading}> How Can We Help?</Text>
           {isLoading ? <Text> Please wait </Text> : null}
 <TextInput style={pagestyle.usertext}
                    placeholder='Search Product Name' defaultValue=' '
                    onChangeText={(value) => handleChange(value)} />
                    <View >
                        
                        {apiData?.items?.map((item ) =>
                            {
                                return(
                                <>
<Text style={pagestyle.apidata}>{item.name} </Text>
<Image style={pagestyle.itemimage} source={{ uri: item?.image_url }} />
<View style={pagestyle.priceWrap}>
                            <Text style={pagestyle.dprice}>{item?.discounted_price} INR </Text>
                            </View>
</>
                         
                         
                         )
                            })}
                    </View>  

                    {/* <FlatList

                        data={apiData}
                        keyExtractor={(item,index)=>
                        {
                            return index.toString();
                        }}
                       renderItem = {
                           ({item}) =>
                           {
                               console.log("item",item)
                               return
                               {
                                   <Text style={{flex:1 ,backgroundColor:'red'}}> {item.name} </Text>
                               }
                           }                                                                                                                                                                                                                                                                       
                       }
                        /> */}

                           
              


               
                
            </View>
            </ScrollView>
       

    )
}
const pagestyle = StyleSheet.create(

    {
        container:
        {
          justifyContent:'center',
        alignItems:'center'


        },
        apidata:
        {
textAlign:'center',
fontSize:23,
color:'black'

        },
        heading:
        {
            fontSize: 40,
            fontWeight: 'bold',
            color: '#309286',
            marginTop:30
        },
        logoImage:
        {
            width: 200,
            height: 100,
            marginTop: 10


        },
        backgroundImage:
        {
            resizeMode: "cover",
            width: 400, height: 200,
            justifyContent: 'center',
            alignItems: 'center'
        },
        usertext:
        {
            height: 50,
            width: 380,
          
            marginBottom: 20,
            borderWidth: 5,
            padding: 10,
            color: 'black',
            fontSize: 25, fontFamily: 'Cochin',
    textAlign:'center',
            borderRadius: 30,
            borderColor: 'green'
        },
        itemimage:
        {
justifyContent:'flex-end',
alignItems:'flex-end',
marginLeft:100,
height: 100, width: 100
        }

        ,priceWrap:
        {
          flexDirection:'row',
        
        
        },
        dprice:
        {
          fontWeight:'bold',
          fontSize:20,
          textAlign:'center',
          marginLeft:110
    
        
        },
        oprice:
        {
          textDecorationLine:'line-through',
        }   


    }
)