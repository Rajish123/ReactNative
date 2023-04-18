import React from 'react'
import { View,Text } from 'react-native'
import { useSelector } from 'react-redux'

export default function Home() {
    const data = useSelector(state=> console.log(state));
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
