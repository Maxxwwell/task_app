import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/theme'

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>

    </ThemeProvider>
    
    </>
  )
}