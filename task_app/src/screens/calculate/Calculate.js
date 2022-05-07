import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AmountText, Button, ButtonText, Button_TextField, LeadingText, Scaffold, TextField, TextFieldContainer} from './styles';
import { HeaderContainer } from '../onBoard/style';

export default function Calculate({navigation}) {
  return (
    <Scaffold>
      <SafeAreaView>
        <HeaderContainer>
           <AmountText>How much is your gross monthly income?</AmountText>
        </HeaderContainer>
        <Button_TextField>
            
            <TextField autoFocus={false} placeholder='GH¢ 2000.00'></TextField>
        
            <Button onPress={() => navigation.navigate('home')}>
                <ButtonText>CALCULATE</ButtonText>
            </Button>
        </Button_TextField>
        
      </SafeAreaView>
    </Scaffold>
  );
}
