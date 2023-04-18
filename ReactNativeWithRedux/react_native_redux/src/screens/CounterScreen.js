import React, {useState} from 'react'
import { View,TextInput,Text, Button } from 'react-native'
import CounterController from '../components/CounterController'
import CounterView from '../components/CounterView'
import { useSelector,useDispatch } from 'react-redux'
import {setCustomValueAction} from '../Redux/Actions/Counter/counterAction'
import {logoutAction} from '../Redux/Actions/Counter/userAction'
import { useNavigation } from '@react-navigation/native';


export default function CounterScreen({customValueParentState}) {
//   const [counter,setCounter] = useState(0)
  const counter = useSelector(state=>state.counter)
  const userCounter = useSelector(state=>state.user)
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = ()=>{
    dispatch(logoutAction())
    if (!userCounter.isUserLogin) { // check if user is logged in
      navigation.navigate('User');
  }
  }
  return (
    <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Hello {userCounter.username}</Text>
      <CounterView counterValue = {counter.count} />
      <CounterController/>
      <TextInput value={counter.changeValue} style={{borderWidth:1,width:'80%'}}
      onChangeText={text => dispatch(setCustomValueAction(text))} />
      <Button title="Logout" onPress={handleLogout}/>
    </View>
  )
}
