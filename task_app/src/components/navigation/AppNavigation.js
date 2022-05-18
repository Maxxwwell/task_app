import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Onboard from '../../screens/onBoard/Onboard'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/home/Home'
import Calculate from '../../screens/calculate/Calculate'
import NetSalary from '../../screens/net_salary/NetSalary'
import Calculate_Gross from '../../screens/calculate_gross/Calculate_Gross'

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
            <Stack.Screen name='net_salary' component={NetSalary} options={{headerShown: false}}/>
            <Stack.Screen name='calculate_gross' component={Calculate_Gross} options={{headerShown: false}}/>

       </Stack.Navigator>
   </NavigationContainer>
  )
}