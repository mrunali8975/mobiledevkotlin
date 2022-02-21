import { View, Text , StyleSheet, Button,Image} from 'react-native';
import React from 'react';

export default function BasicStyleComponent() {
    return (
        
            <View><Text>Hello </Text>

<Text>Eccommer App- Flipcart</Text>  
<View>


<View><Text> Redmi</Text></View>

<View><Text> Redmi</Text></View>
<View><Text> Redmi</Text></View>
<View><Text> Redmi</Text></View>
<View><Text> Redmi</Text></View>

<Image 

source={{uri: '   https://picsum.photos/200/300?random=1                     '}}                          
/>


    </View>   
    

            </View>
           
       
       
    );
}

const pagestyle = StyleSheet.create({
    productitem:
    {                           
        alignItems: "center",   
        justifyContent:"center",
        margin:10,
        backgroundColor:"pink",
        width:"20%"
        

    },
});