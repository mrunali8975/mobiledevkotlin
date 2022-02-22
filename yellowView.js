import { View, Text ,StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Gagte from './gagatesimage.jpeg'
import lap from './laptop.jpeg'
import Headp from './headp.png'
import Ipad from '/Users/user214291/flipkart/ipadd.jpeg'


export default function yellowView() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.fristInnerCon}>
          <View
          style={{width:'65%', height:150,justifyContent:'flex-start',padding:10}}>
              <Text style={{fontSize:23 , paddingTop:20, fontWeight:"bold", color:'black'}}>Entertaintment Zone</Text>
              <Text style={{color:'black',fontSize:13}}
              > For Some Cozy Envornment{"!"}</Text>
              <TouchableOpacity style={{width:70, borderRadius:5 ,backgroundColor:"white",padding:10, marginTop:10}} >
                  <Text style={{color:'black'}}>View all</Text>
              </TouchableOpacity>
          </View>
          <View style={{width:'35%'}}>
              <Image source={Gagte} style={{height:150,width:'100%',padding:10}}/>
          </View>
      </View>
      <View style={styles.secInnerCon}>
          <View style={[styles.iconcon_secInnerCon,{marginBottom:5,marginRight:5}]}>
         <Image source={lap} style={{width:50,height:50, }} />
         <View style={{paddingLeft:5}}>
         <Text style={{color:'black'}}>Chromebooks</Text>
             <Text style={{color:'black',fontSize:12}}>browsing {"&"} more</Text>
             <Text style={{fontWeight:'bold' ,color:'black',fontSize:17}}>shop Now</Text>
         </View>
          </View>
          <View style={[styles.iconcon_secInnerCon,{marginBottom:5}]}>
         <Image source={Headp} style={{width:35,height:50, }} />
         <View style={{paddingLeft:10}}>
         <Text style={{color:'black'}}>Headphones{"&"}more</Text>
             <Text style={{color:'black',fontSize:12}}>JBL boAt {"&"} more</Text>
             
             <Text style={{fontWeight:'bold' ,color:'black',fontSize:17}}>Up to 70{"%"} Off</Text>
         </View>
          </View>
          <View style={[styles.iconcon_secInnerCon,{marginRight:5}]}>
         <Image source={Ipad} style={{width:50,height:50}} />
         <View style={{paddingLeft:5}}>
             <Text style={{color:'black'}}>Chromebooks</Text>
             <Text style={{color:'black',fontSize:12}}>browsing {"&"} more</Text>
             <Text style={{fontWeight:'bold' ,color:'black',fontSize:17}}>shop Now</Text>
         </View>
          </View>
          <View style={[styles.iconcon_secInnerCon]}>
         <Image source={lap} style={{width:50,height:50, }} />
         <View style={{paddingLeft:10}}>
             <Text style={{color:'black'}}>Chromebooks</Text>
             <Text style={{color:'black',fontSize:12}}>browsing {"&"} more</Text>
             <Text style={{fontWeight:'bold' ,color:'black',fontSize:17}}>shop Now</Text>
         </View>
          </View>
      </View>
    </View>
  )
}const styles = StyleSheet.create ({
    mainContainer:{
      backgroundColor:'#ebcd34',
      flex:1,
    },
    fristInnerCon:{
      flex:1,
      flexDirection: 'row'
      ,justifyContent:'flex-start',
      flexWrap:'nowrap',
      padding: 10,
      alignContent:'center',
    
    },
     
    secInnerCon:{
        flex:1,
        flexDirection: 'row'
        ,justifyContent:'center',
        flexWrap:'wrap',
        padding: 10,
        alignContent:'center',
        
      },

      iconcon_secInnerCon:{
        width:'48%',
        flexDirection:'row',
        borderRadius:10,
        backgroundColor:'#ffe6e6',
        padding:10,
       
        
      }

  

})



