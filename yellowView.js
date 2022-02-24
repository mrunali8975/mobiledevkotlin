import { View, Text ,StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'

import lap from './laptop.jpeg'
import Headp from './headp.png'
import wg from './wg.png'
import Ipad from '/Users/user214291/flipkart/ipad.jpeg'
import Camera from './cameraa.jpeg'

export default function yellowView() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.fristInnerCon}>
          <View
          style={{width:'60%', height:150,justifyContent:'flex-start',}}>
              <Text style={{fontSize:22 , paddingTop:30, fontWeight:"bold", color:'black'}}>Entertaintment Zone</Text>
              <Text style={{color:'black',fontSize:13}}
              > For Some Cozy Envornment{"!"}</Text>
              <TouchableOpacity style={{width:65, borderRadius:5 ,backgroundColor:"white",padding:5, marginTop:10}} >
                  <Text style={{color:'black'}}>View all</Text>
              </TouchableOpacity>
          </View>
          <View style={{width:'40%'}}>
              <Image source={wg} style={{height:150,width:'100%',}}/>
          </View>
      </View>
      <View style={styles.secInnerCon}>
          <View style={[styles.iconcon_secInnerCon,{marginBottom:5,marginRight:5}]}>
         <Image source={lap} style={{width:50,height:50, }} />
         <View style={{paddingLeft:5}}>
         <Text style={{color:'black'}}>Chromebooks</Text>
             <Text style={{color:'black',fontSize:11}}>browsing {"&"} more</Text>
             <Text style={{fontWeight:'bold' ,color:'black',fontSize:17,paddingTop:5}}>shop Now</Text>
         </View>
          </View>
          <View style={[styles.iconcon_secInnerCon,{marginBottom:5}]}>
         <Image source={Headp} style={{width:35,height:50, }} />
         <View style={{paddingLeft:10}}>
         <Text style={{color:'black'}}>Headphones{"&"}more</Text>
             <Text style={{color:'black',fontSize:11}}>JBL boAt {"&"} more</Text>
             
             <Text style={{fontWeight:'bold' ,color:'black',fontSize:17,paddingTop:5}}>Up to 70{"%"} Off</Text>
         </View>
          </View>
          <View style={[styles.iconcon_secInnerCon,{marginRight:5}]}>
         <Image source={Ipad} style={{width:50,height:60}} />
         <View style={{paddingLeft:5}}>
             <Text style={{color:'black'}}>Ipad Air 4th Gen</Text>
             <Text style={{color:'black',fontSize:11}}>Bestseller</Text>
             <Text style={{fontWeight:'bold' ,color:'black',fontSize:17,paddingTop:5}}>Just {"₹"}54,900</Text>
         </View>
          </View>
          <View style={[styles.iconcon_secInnerCon]}>
         <Image source={Camera} style={{width:50,height:60, }} />
         <View style={{paddingLeft:5}}>
             <Text style={{color:'black'}}>Vlogging Cameras</Text>
             <Text style={{color:'black',fontSize:11}}>Vlog like never Before</Text>
             <Text style={{fontWeight:'bold' ,color:'black',fontSize:17,paddingTop:5}}>Up to 30{"%"} Off</Text>
         </View>
          </View>
      </View>
    </View>
  )
}const styles = StyleSheet.create ({
    mainContainer:{
      backgroundColor:'#ebcd34',
      borderRadius:10,
      margin:10
    
    },
    fristInnerCon:{
     
      flexDirection: 'row'
      ,justifyContent:'flex-start',
      flexWrap:'nowrap',
     padding:10,
      alignContent:'center',
    
    },
     
    secInnerCon:{
       
        flexDirection: 'row'
        ,justifyContent:'center',
        flexWrap:'wrap',
         marginVertical:10,
        alignContent:'center',
       
      },

      iconcon_secInnerCon:{
        width:'48%',
        flexDirection:'row',
        borderRadius:10,
        backgroundColor:'#ffe6e6',
        padding:5
        
        
      }

  

})



