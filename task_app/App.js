import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigation from './src/components/navigation/AppNavigation'

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
      
          <AppNavigation />
        
      </SafeAreaProvider>

    </ThemeProvider>
    
    </>
  )
}