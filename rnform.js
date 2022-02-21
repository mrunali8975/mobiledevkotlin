import { View, Text, TextInput, Button, Image, ScrollView ,StyleSheet} from 'react-native'
import React, { useState,useEffect } from 'react'
import doggy from './download.jpeg';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Rnform() {

const handleSubmit =()=>
{AsyncStorage.setItem('fname', firstName)
   
    alert("success")
}

useEffect(() => {
  var value=getData("fname");
value.then((data)=>
{console.log(data,'mydata')

})
}, [])


const getData = async (keyName) => {
    try {
      const value = await AsyncStorage.getItem(keyName)
      if(value !== null) {
        // value previously stored
      }
      return value;
    } catch(e) {
      // error reading value
    }
  }
  

const [formData, setformData] = useState({
    fname:'',
    lname:'',
    age:'',
});
const [firstName,setfirstName]=useState('');
const  [lastName, setLastName] = useState('');
const [age, setAge] = useState('');
const handleChangeText=(value,fieldname)=>
{


 if(fieldname==='fname')
 {
     setfirstName(value);
 }
 else if(fieldname==='lname')
 {
setLastName(value);
 }
 else
 {
setAge(value);
 }
};

    return (
        <ScrollView>
            <View style={{ padding: 20 }}>
                <Image  style={{height:130,width:130,marginLeft:115,marginBottom:20}} source={{uri:'https://thumbs.dreamstime.com/b/survey-171209536.jpg'}}/>
                 <Text style={pagestyle.pageheading}>Feedback Form</Text>

                <View>
                    <Text style={pagestyle.textLabel}>
                        First Name
                    </Text>
                    <TextInput value ={firstName} style={{fontSize:15}}
                    placeholder='Enter Your name' 
                    onChangeText={value=>handleChangeText(value,'fname')}/>
                </View>
                <View>
                    <Text style={pagestyle.textLabel}>
                        Last Named
                    </Text>
                    <TextInput value={lastName}
                    style={{fontSize:15,color:'#000',color:'#000'}}
                    onChangeText={value => handleChangeText(value,'lname')}
                    placeholder='Enter your last name' />
                </View>
                <View>
                    <Text style={pagestyle.textLabel}>
                        Age
                    </Text>
                    <TextInput value={age} style={{fontSize:15,color:'#000',color:'#000'}}
                    onChangeText={value=>handleChangeText(value,'age')}
                    placeholder='Enter Your age' keyboardType='numeric' />
                </View>
                <View>
                    <Button title='submit' onPress={handleSubmit}>
                    </Button>
                </View>
            </View>
        </ScrollView>
    )
}
const pagestyle=StyleSheet.create(
    {
        pageheading:{
            textAlign: "center",
            fontSize:30,
            marginBottom:30 ,
            fontWeight:'bold'
    
        },
    textLabel:
    {
        fontSize:18,
        color:'#000'
       
    }

    }
)
