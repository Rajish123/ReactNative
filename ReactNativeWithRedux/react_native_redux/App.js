import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './src/Redux/store'
import NavigationStack from './src/navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  // const [customValueParentState,setcustomValueParentState] = useState("1");
  return (
    // <View style = {{flex:1}}>
    //   <CounterScreen customValueParentState={customValueParentState}/>
    //   <CounterCustomSet setcustomValueParentState = {setcustomValueParentState} />
    // </View>
    <Provider store={store}>
      {/* <App /> */}
      {/* <CounterScreen /> */}
      {/* <UserScreen /> */}
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </Provider>
  )
}
