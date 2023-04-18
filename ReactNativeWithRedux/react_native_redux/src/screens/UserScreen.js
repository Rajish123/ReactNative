import React, {useRef} from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import {setUsername,setPassword,loginAction} from '../Redux/Actions/Counter/userAction'
import logincredentials from '../components/LoginCredentials'
import { useNavigation } from '@react-navigation/native';

export default function UserScreen() {
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch();
  const navigation = useNavigation();


  const handleFormSubmit =async()=>{
    const response= await logincredentials(user.username,user.password)
    if (response){
      dispatch({type:'login',
      payload:{
        username:user.username,
        password:user.password
      }})
      navigation.navigate('Counterscreen');
    }
      else{
        console.log("Invalid")
      }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="username"
        onChangeText={text=>dispatch(setUsername(text))}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={text=>dispatch(setPassword(text))}
      />
      <Button title="Submit" onPress={handleFormSubmit}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
});
