import {View, Text} from 'react-native';
import React from 'react';
import {HeaderContainer, RecalculateButton, Tax} from '../home/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Scaffold} from '../calculate/styles';
import {
  AmountTax,
  ButtonText,
  Calculator,
  ContributionsContainer,
  DescriptionText,
  Divider,
  Loader,
  NetCalculator,
  TakeHomeContainer,
  TaxContainer,
  TaxText,
  TaxTextContainer,
  TaxTitle,
} from './styles';
import {useEffect, useState} from 'react/cjs/react.development';
import {colors} from '../../theme/colors';
import { useRoute } from '@react-navigation/native';

export default function NetSalary({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const route = useRoute()
  var NetSalary = Number(route.params.amount);
  // console.log('net is',NetSalary)
  let PAYE = Number(NetSalary * 0.25)
  const EmployerContribution = Number(NetSalary * 0.03).toFixed(2)
  const SNNIT = Number(NetSalary * 0.055).toFixed(2)
  if (NetSalary < 365){
    PAYE = Number(0)
  }  else if(NetSalary > 365 && NetSalary <= 475){
    PAYE = Number(NetSalary * 0.05).toFixed(2);
  }
   if(NetSalary > 475 && NetSalary <= 605){
    PAYE = Number(NetSalary * 0.1).toFixed(2);
  }

  else if(NetSalary > 605 && NetSalary <= 3000){
    PAYE = Number(NetSalary * 0.175).toFixed(2);
  }
  let GrossSalary = (Number(NetSalary) + Number(SNNIT) + Number(EmployerContribution) + Number(PAYE))
  


  useEffect(() => {
    setIsLoading(true);
    console.log('loading....');
    setTimeout(() => {
      console.log('finished loading..');
      setIsLoading(false);
    }, 1000);
  }, [100]);

  return (
    <Scaffold>
      <SafeAreaView>
        <HeaderContainer>
          <Tax>TAX</Tax>
          <NetCalculator>CALCULATOR</NetCalculator>
        </HeaderContainer>

        <DescriptionText>
          Compute your net income, PAYE income tax and SSNIT deduction
        </DescriptionText>
        {isLoading ? (
          <Loader size="small" color={colors.primary} />
        ) : (
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
            <TaxTitle>Gross salary amount</TaxTitle>
          <Divider />
          <TaxTextContainer>
            <TaxText>Gross pay</TaxText>
            <AmountTax>GH¢ {GrossSalary}</AmountTax>
          </TaxTextContainer>

            </TakeHomeContainer>

            <RecalculateButton activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                <ButtonText>RECALCULATE</ButtonText>
            </RecalculateButton>
          </>
        )}
      </SafeAreaView>
    </Scaffold>
  );
}
