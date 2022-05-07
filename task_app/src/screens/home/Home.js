import { View, Text } from 'react-native'
import React from 'react'
import { HeaderContainer, Scaffold, Tax } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
   <Scaffold>
     <SafeAreaView>
     <HeaderContainer>
       <Tax>TAX</Tax>
     </HeaderContainer>
     </SafeAreaView>
     
   </Scaffold>
  )
}