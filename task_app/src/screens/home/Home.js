import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {
  AmountTax,
  Calculator,
  ContributionsContainer,
  DescriptionText,
  Divider,
  Divider_,
  HeaderContainer,
  Loader,
  RecalculateButton,
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
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react/cjs/react.development';

export default function Home({navigation}) {

  const [isLoading, setIsLoading] = useState(false);
  const route = useRoute()
  let GrossSalary = route.params.amount;
  const PAYE = (GrossSalary * 0.08).toFixed(2);
  const EmployerContribution = (GrossSalary * 0.0775).toFixed(2);
  const SNNIT = (GrossSalary * 0.055).toFixed(2);
  const NetSalary = (GrossSalary - PAYE - EmployerContribution - SNNIT).toFixed(2);

  useEffect (() => {
   setIsLoading(true);
   console.log('loading....')
   setTimeout(() => {
    console.log('finished loading..')
    setIsLoading(false)
   }, 1000)
  } , [1000])
  

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

         {
            isLoading ? <Loader size="small"/> 
            : 
            <>
            <TaxContainer>
          <TaxTitle>Personal income tax</TaxTitle>
          <Divider />
          <TaxTextContainer>
            <TaxText>PAYE Tax</TaxText>
            <AmountTax>GH¢ {PAYE}</AmountTax>
          </TaxTextContainer>

        </TaxContainer>

        
     <ContributionsContainer>
          <TaxTitle>Monthly Contribution</TaxTitle>
          <Divider />
          <TaxTextContainer>
            <TaxText>Employer Pension</TaxText>
            <AmountTax>GH¢ {EmployerContribution}</AmountTax>
          </TaxTextContainer>
          <TaxTextContainer>
            <TaxText>SSNIT</TaxText>
            <AmountTax>GH¢ {SNNIT}</AmountTax>
          </TaxTextContainer>
        </ContributionsContainer>

        <TakeHomeContainer>
          <TaxTitle>Take home amount</TaxTitle>
          <Divider />
          <TaxTextContainer>
            <TaxText>Net salary</TaxText>
            <AmountTax>GH¢ {NetSalary}</AmountTax>
          </TaxTextContainer>

        </TakeHomeContainer>

        <RecalculateButton activeOpacity={0.8} onPress={()=>navigation.goBack()}>
        
          <ButtonText>RECALCULATE</ButtonText>
        </RecalculateButton>

            </>

         }

      </SafeAreaView>
    </Scaffold>
  );
}
