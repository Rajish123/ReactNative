import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import {incrementValueAction,decrementValueAction} from '../Redux/Actions/Counter/counterAction'

export default function CounterController({}) {
    const dispatch = useDispatch();
    const incrementValue = ()=>{
        // dispatch({type:'increment'})
        dispatch(incrementValueAction());
    }
    const decrementValue = ()=>{
        // dispatch({type:'decrement'})
        dispatch(decrementValueAction());

    }
  return (
    <View style = {{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:'70%'
    }}>
        <TouchableOpacity style = {{backgroundColor:'grey', padding:10, margin:20}} onPress={()=>decrementValue()}>
            <Text style={{fontSize:20, color:'whitesmoke'}}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {{backgroundColor:'grey', padding:10, margin:20}} onPress={()=>incrementValue()}>
            <Text style={{fontSize:20,color:'whitesmoke'}}>Increment</Text>
        </TouchableOpacity>
    </View>
  )
}
