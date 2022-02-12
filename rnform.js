import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'



export default function Rnform() {
  return (
    <View style={{padding:20}}>
      <Text style={{textAlign:"center"}}>Rnform</Text>
      <View>
          <Text>
              First Name
          </Text>
          <TextInput placeholder='Enter Your name' />
      </View>
      <View>
          <Text>
              Last Name
          </Text>
          <TextInput placeholder='Enter your last name' />
      </View>
      <View>
          <Text>
              age 
          </Text>
          <TextInput placeholder='Enter Your age' keyboardType='numeric' />
      </View>
      <View>
          <Button title='submit'>
            
          </Button>
      </View>
    </View>
  )
}
