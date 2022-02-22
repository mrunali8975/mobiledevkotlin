import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function discounts() {
  return (
    <View>
        <View style={styler.upperView}>
            <Image style={styler.upperViewImage} source={{uri:"https://rukminim1.flixcart.com/flap/400/400/image/54533de8e58e5160.jpg?q=90"}}/>
            <Image style={styler.upperViewImage} source={{uri:"https://rukminim1.flixcart.com/flap/400/400/image/73bd97a400e63b0a.jpeg?q=90"}}/>
            <Image style={styler.upperViewImage} source={{uri:"https://rukminim1.flixcart.com/flap/400/400/image/35c26fec3ed963b9.jpeg?q=90"}}/>
        </View>
      {/*  <View style={styler.discountsForYou}>
            <View style={styler.titleDiscount}>
                <Text style={styler.discountsForYouTxt}>Discounts for You</Text>
                <Image style={styler.nextBtn} source={{uri:"https://rukminim1.flixcart.com/www/90/90/promos/04/08/2021/a76dff7e-d644-455c-9bb1-76ab974c4c5e.png?q=90"}}/>    
            </View>
            <View style={styler.discountItemContainer}>
                <View style={styler.discountItem}>
                    <Image style={styler.discountItemImg} source={{uri:"https://rukminim1.flixcart.com/image/450/450/kwpam4w0/book/r/a/r/-original-imag9bv6bzstsjgk.jpeg?q=90"}}/>
                    <Text style={styler.Itemtxt}>Romance Books</Text>
                    <Text style={styler.ItemCategorytxt}>Big Savings</Text>
                </View>
                <View style={styler.discountItem}>
                    <Image style={styler.discountItemImg} source={{uri:"https://rukminim1.flixcart.com/image/450/450/ksc46fk0/t-shirt/t/y/p/xs-wmb-girls-shoppie-original-imag5xe3sdhgg8sg.jpeg?q=90"}}/>
                    <Text style={styler.Itemtxt}>Women's T-shirts</Text>
                    <Text style={styler.ItemCategorytxt}>New Range</Text>
                </View>
                <View style={styler.discountItem}>
                    <Image style={styler.discountItemImg} source={{uri:"https://rukminim1.flixcart.com/image/450/450/jnqcpzk0/fitness-grip/c/x/4/new-adjustable-hand-gripper-exerciser-wrist-forearm-strength-original-imaf9jnkge7cvadg.jpeg?q=90"}}/>
                    <Text style={styler.Itemtxt}>Hand Grips</Text>
                    <Text style={styler.ItemCategorytxt}>Bestsellers</Text>
                </View>
                <View style={styler.discountItem}>
                    <Image style={styler.discountItemImg} source={{uri:"https://rukminim1.flixcart.com/image/450/450/js4yljk0/dress/m/8/s/xl-ttj6002869-tokyo-talkies-original-imafds2fpma72ggz.jpeg?q=90"}}/>
                    <Text style={styler.Itemtxt}>Women's Dresses</Text>
                    <Text style={styler.ItemCategorytxt}>Bestsellers</Text>
                </View>
            </View>
        </View>*/}
    </View>
  )
}


const styler = StyleSheet.create({
    upperView:{
        marginTop:5,
        flexDirection:'row',
        flexWrap:'wrap',
    },

    upperViewImage:{
        width:"33.33%",
        height:130,
    },

    discountsForYouTxt:{
        color:'#000',
        paddingTop:20,
        paddingLeft:20,
        flexWrap:'wrap',
    },

    discountsForYou:{
        marginTop:5,
        backgroundColor:'#e6eeff',
        borderTopWidth:2,
        borderBottomWidth:2,
        borderColor:'#f1f2f4'
    },

    titleDiscount:{
        flexDirection:'row',
        flexWrap:'wrap',
    },

    nextBtn:{
        width:35,
        height:35,
    },

    discountItemContainer:{
        backgroundColor:'#ffff',
        flexWrap:'wrap',
        flexDirection:'row',
        margin:10
    },

    discountItemImg:{
        height:200,
        width:"50%",
    },

    ItemCategorytxt:{
        color:'#1e9a1e',
    },

    Itemtxt:{
        color:'#4b4c4e',
    },
})

/*
#ffffff
*/ 