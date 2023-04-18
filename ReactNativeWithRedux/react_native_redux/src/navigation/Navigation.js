import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserScreen from '../screens/UserScreen';
import CounterScreen from '../screens/CounterScreen';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User" component={UserScreen} />
      <Stack.Screen name="Counterscreen" component={CounterScreen} />
    </Stack.Navigator>
  );
}
