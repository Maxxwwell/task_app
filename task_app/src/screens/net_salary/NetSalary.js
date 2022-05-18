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

export default function NetSalary({navigation, route}) {
  const [isLoading, setIsLoading] = useState(false);

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
                <AmountTax>GH¢ 00</AmountTax>
              </TaxTextContainer>
            </TaxContainer>

            <ContributionsContainer>
              <TaxTitle>Monthly Contribution</TaxTitle>
              <Divider />
              <TaxTextContainer>
                <TaxText>Employer Pension</TaxText>
                <AmountTax>GH¢ 00</AmountTax>
              </TaxTextContainer>
              <TaxTextContainer>
                <TaxText>SSNIT</TaxText>
                <AmountTax>GH¢ 00</AmountTax>
              </TaxTextContainer>
            </ContributionsContainer>

            <TakeHomeContainer>
            <TaxTitle>Take home amount</TaxTitle>
          <Divider />
          <TaxTextContainer>
            <TaxText>Net salary</TaxText>
            <AmountTax>GH¢ 00</AmountTax>
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
