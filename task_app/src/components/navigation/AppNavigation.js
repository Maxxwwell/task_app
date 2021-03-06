import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Onboard from '../../screens/onBoard/Onboard'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/home/Home'
import Calculate from '../../screens/calculate/Calculate'

const Stack = createNativeStackNavigator()
export default function AppNavigation() {
  return (
   <NavigationContainer>
       <Stack.Navigator 
    //    initialRouteName='onBoard'
       >
            <Stack.Screen name='onBoard' component={Onboard} options={{headerShown: false}}/>
            <Stack.Screen name='calculate' component={Calculate} options={{headerShown: false}}/>
            <Stack.Screen name='home' component={Home} options={{headerShown: false}}/>

       </Stack.Navigator>
   </NavigationContainer>
  )
}