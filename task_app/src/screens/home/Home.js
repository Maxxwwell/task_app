import {View, Text} from 'react-native';
import React from 'react';
import {
  AmountTax,
  Calculator,
  ContributionsContainer,
  DescriptionText,
  Divider,
  Divider_,
  HeaderContainer,
  Scaffold,
  TakeHomeContainer,
  Tax,
  TaxContainer,
  TaxText,
  TaxTextContainer,
  TaxTitle,
} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Button, ButtonText } from '../onBoard/style';

export default function Home({navigation}) {
  return (
    <Scaffold>
      <SafeAreaView>

        <HeaderContainer>
          <Tax>TAX</Tax>
          <Calculator>CALCULATOR</Calculator>
        </HeaderContainer>

        <DescriptionText>
          Compute your net income, PAYE income tax and SSNIT deduction
        </DescriptionText>

        <TaxContainer>
          <TaxTitle>Personal income tax</TaxTitle>
          <Divider />
          <TaxTextContainer>
            <TaxText>PAYE Tax</TaxText>
            <AmountTax>GH¢ </AmountTax>
          </TaxTextContainer>

        </TaxContainer>

        
     <ContributionsContainer>
          <TaxTitle>Monthly Contribution</TaxTitle>
          <Divider />
          <TaxTextContainer>
            <TaxText>Employer Pension</TaxText>
            <AmountTax>GH¢ </AmountTax>
          </TaxTextContainer>
          <TaxTextContainer>
            <TaxText>SSNIT</TaxText>
            <AmountTax>GH¢ </AmountTax>
          </TaxTextContainer>
        </ContributionsContainer>

        <TakeHomeContainer>
          <TaxTitle>Take home amount</TaxTitle>
          <Divider />
          <TaxTextContainer>
            <TaxText>Net salary</TaxText>
            <AmountTax>GH¢ </AmountTax>
          </TaxTextContainer>

        </TakeHomeContainer>

        <Button activeOpacity={0.8} onPress={()=>navigation.goBack()}>
        
          <ButtonText>RECALCULATE</ButtonText>
        </Button>

      </SafeAreaView>
    </Scaffold>
  );
}
