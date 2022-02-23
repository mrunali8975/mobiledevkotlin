import React,{useState} from 'react'
import { Text, View ,TouchableOpacity,StyleSheet,Image,Modal,Pressable} from 'react-native';
import arrowleft from './arrowleft.png'
import star from './star.png'
import FAssured from './FAssured.png'
import bicycle from './bicycle.jpeg'
import coin from './coin.png'
import cartRemove from './cartRemove.png'
import cartSaveForLater from './cartSaveForLater.png'
import DropDown from './DropDown.png'

export default function Cart() {
  return (
    <View style={{flex:1,backgroundColor:'#eaeaea'}}>

        <View style={css.headerRow}>
          <TouchableOpacity >
          <Image source={arrowleft} style={css.backArrow} />
          </TouchableOpacity>
          <Text style={css.cartText}>My Cart</Text>
          
        </View>

        <View style={css.cartOptionWrap}>
          <View  style={css.cartOption1Wrap}> 
          <Text style={css.cartOption1text}>
            Flipkart (1)
          </Text>
          </View>
          <View flex={1} style={css.cartOption2Wrap}> 
          <Text style={css.cartOption2text}>
            Grocery
          </Text>
          </View>
        </View>

        
          <View style={css.address}>
        
              <View style={{width:'70%',flexDirection:'column'}}>
                 
                  <View style={{flexDirection:'row',justifyContent:'space-evenly',paddingVertical:5}}>
                    <Text style={{width:'70%',alignSelf:'center'}}>
                        <Text style={{fontSize:14,color:'#000',fontWeight:"500"}}>Deliver to : </Text>
                        <Text style={{fontSize:13,fontWeight:'bold',color:'#000'}}> Jyotishm..., 786602</Text>
                    </Text>
                      <Text style={{fontSize:13,alignSelf:'center',maxWidth:'22%',textAlign:'center',backgroundColor:'#cccecf',paddingHorizontal:5,borderRadius:10,fontWeight:'500'}}>
                        HOME
                      </Text>
                    </View>
                  
                    <View style={{flexDirection:'row',justifyContent:'center',paddingVertical:1,paddingLeft:2.5,marginBottom:5}}>
                    <Text style={{alignSelf:'center',fontSize:13.10,fontWeight:'500'}}>
                      Duliajan, Tipling, Assam, India, Near mp r...
                    </Text>
                  </View>
              
              </View>
              
              <View style={{width:'30%',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity>
                 <Text style={{height:35,width:80,textAlign:'center',textAlignVertical:'center',borderRadius:2,fontSize:15,fontWeight:'bold',color:'#2874f0',borderWidth:1,borderColor:'#dedede'}}>
                   Change
                 </Text>
              </TouchableOpacity>
              </View>
            </View>
       
         
        <View style={{backgroundColor:'white',marginVertical:8,borderWidth:1,borderRightWidth:0,borderLeftWidth:0,borderColor:'#dedede',padding:5}}>
          <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'row',width:'70%'}}>
                
                  <View  style={{padding:10,flexDirection:'column'}}>

                        <Text style={{fontSize:16,color:"#111",fontWeight:'500'}}>
                          WALTX Trail 27.5 T Mountail Cycle
                        </Text>
                        <Text style={{marginVertical:5}}>
                          21 Gear, Multicolor
                        </Text>
                    
                        <View style={{height:25,width:'60%',marginVertical:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:3}}>

                            <View style={{backgroundColor:'#388e3c',borderRadius:5,flexDirection:'row',padding:4,justifyContent:'center',paddingHorizontal:7}}>
                            <Text style={{color:'white'}}>
                                4.3
                              </Text>
                              <Image style={{height:"100%",width:15,paddingVertical:9,marginLeft:3}}source={star}/>
                              
                            </View>
                            <View style={{paddingHorizontal:3}}>
                              <Text>
                                (679)
                              </Text>
                            </View>
                            <View style={{paddingHorizontal:3}}>
                                <Image source={FAssured}/>
                            </View>
                        </View>

                        <View style={{paddingVertical:18,flexDirection:'row',alignItems:'center',paddingBottom:5}}>

                          <Text style={{fontSize:18,fontWeight:"bold",color:"#212121"}}>₹13,999 </Text>
                          <Text style={{textDecorationLine:'line-through',fontSize:14,fontWeight:"bold",color:"#999"}}> ₹19,045 </Text>
                          <Text style={{fontSize:14,fontWeight:"bold",color:"#388e3c"}}>26% off </Text>
                        
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',paddingVertical:2}}>
                          <Text style={{fontSize:14,color:'#111'}}>Or Pay ₹13,785 + </Text>
                          <Image style={{width:12,height:12,padding:7}}source={coin}/>
                          <Text style={{fontSize:14,color:'#111'}}>214</Text>
                        </View>   

                        <View style={{flexDirection:'row',alignItems:'center',paddingVertical:2}}>
                          <Text style={{color:'#388e3c',fontWeight:'700'}}>1 offer applied </Text>
                          <Text style={{color:'#388e3c',fontWeight:'700'}}> • </Text>
                          <Text style={{color:'#388e3c',fontWeight:'700'}}> 2 offers available</Text>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',paddingVertical:2}}>
                          <Text style={{color:'#111',fontWeight:'500'}}>Deliver by Sat Mar 5 |</Text>
                          <Text style={{color:'#388e3c',fontWeight:'700'}}> Free </Text>
                          <Text style={{textDecorationLine:'line-through',fontWeight:'bold'}}>₹40</Text>
                        </View>
                          
                  </View>                
               
            </View>
            <View style={{paddingVertical:'5%',padding:6,flexDirection:'column',alignItems:"center"}}>
                <View style={{marginLeft:10}}>
                  <Image style={{width:90,height:52}} source={bicycle}/>
                </View>

                <View style={{height:30,flexDirection:'row',alignItems:"center",justifyContent:'center',borderWidth:1,width:90,marginVertical:16,borderColor:'#dedede'}}>
                  <Text style={{paddingLeft:10,fontSize:14,fontWeight:'bold',color:'#111'}}>Qty: 1 </Text> 
                  <Image source={DropDown}/>
                </View>
                  
            </View>
          </View>  

          <View style={{flexDirection:'row',justifyContent:'space-evenly',borderWidth:1,borderRightWidth:0,borderLeftWidth:0,borderBottomWidth:0,borderColor:'#dedede'}}>
         
            <View style={{flexDirection:'row',alignItems:'center',width:"50%",justifyContent:'center',paddingVertical:17,borderRightWidth:1,borderColor:'#dedede'}}>
              <Image style={{height:20,width:15}} source={cartSaveForLater}/>
              <Text style={{textAlign:'center', color:'#111', fontWeight:'600'}}>  Save for later</Text>
            </View>
            <View style={{flexDirection:'row',width:"50%",justifyContent:'center',paddingVertical:17,borderLeftWidthWidth:1,borderColor:'#dedede'}}>
              <Image style={{height:20,width:15,tintColor:'#a2a2a2'}} source={cartRemove}/> 
              <Text style={{textAlign:'center', color:'#111', fontWeight:'600'}}>  Remove</Text>
            </View> 

          </View>
          
        </View> 
        
    </View>
  );
}

const css = StyleSheet.create({
  headerRow:{
  
    backgroundColor:"#2874f0",
    alignItems:'center',
    flexDirection:'row',
    height:'8%',
    paddingHorizontal:20,
    width:'100%'
  
},
  backArrow:{
    tintColor:'white',
    height:'60%'},

  cartText:{
    fontWeight: '400',
    color:"white",
    marginLeft:20,
    fontSize:20
  },
  
  cartOptionWrap:{
    flexDirection:'row',
    height:"8%",
    backgroundColor:'white'
  },
  cartOption1Wrap:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:2,
    borderBottomColor:'#2874f0'},
  
  cartOption1text:{
    color:'#2874f0',
    fontWeight:'700',
    fontSize:16},
  
  cartOption2Wrap:{
    justifyContent:'center',
    alignItems:'center'},

  cartOption2text:{
    color:'#111',
    fontWeight:'700',
    fontSize:16},
  
  
  address:{
    flexDirection:'row',
    justifyContent:'center',
    borderTopWidth:2,
    borderTopColor:'#dedede',
    borderBottomColor:'#dedede',
    borderBottomWidth:4,
    backgroundColor:'white',
  paddingVertical:10
  },
});
