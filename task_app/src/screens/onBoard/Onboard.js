import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Button,
  ButtonText,
  Calculator,
  HeaderContainer,
  IconContainer,
  InfoText,
  Scaffold,
  Tax,
} from './style';
import icons from '../../theme/icons';

export default function Onboard({navigation}) {
  return (
    <Scaffold>
      <SafeAreaView>
        <HeaderContainer>
          <Tax>TAX</Tax>
          <Calculator>Calculator</Calculator>
        </HeaderContainer>

        <IconContainer>
          <Image source={icons.icon} style={{height: 120, width: 120}} />
        </IconContainer>

        <InfoText>
          Would you like to calculate payroll taxes at
          once & generate company-branded payslips for your employees?
        </InfoText>

        <Button activeOpacity={0.8} onPress={()=>navigation.reset({
            index: 0,
            routes: [{name: 'calculate'}],
        })}>
          <ButtonText>GET STARTED</ButtonText>
        </Button>
      </SafeAreaView>
    </Scaffold>
  );
}
