import React, { useState } from 'react'
import { View,Text,TextInput } from 'react-native'

export default function CounterCustomSet({setcustomValueParentState}) {
    const [customValue,setCustomValue] = useState("1")

    const applyChangesInState = (text)=>{
        setCustomValue(text);
        setcustomValueParentState(text);
    }

  return (
    <View style = {{flex:1,alignItems:'center'}}>
      <TextInput value={customValue} style={{borderWidth:1,width:'80%'}} onChangeText={(text)=>applyChangesInState(text)}/>
    </View>
  )
}
