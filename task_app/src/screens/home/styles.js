/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const Scaffold = styled(View)`
    flex: 1;
    padding-left: 15px;
    padding-right: 15px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: space-between
`;

export const HeaderContainer = styled(View)`
    align-items: center;
`


export const Tax = styled(Text)`
    font-size: 35px;
    letter-spacing: 4px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.yellow};
    
`

export const Calculator = styled(Text)`
    font-size: 16px;
    font-weight: bold
    color: ${({ theme }) => theme.colors.grey};
`

export const DescriptionText = styled(Text)`
    color: ${({ theme }) => theme.colors.grey};
    padding: 20px;
    text-align: center;
`
export const TaxContainer = styled(View)`
    background-color: ${({ theme }) => theme.colors.grey};
    box-shadow: 5px 5px 2px  rgba(173, 86, 167, 10);
    padding: 10px
    border-radius: 10px
`


export const TaxTitle = styled(Text)`
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    font-size: 25px;
    font-weight: bold
    padding-top: 10px
`

export const Divider = styled(View)`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 0.2px;
    margin-top: 10px
`
export const TaxTextContainer = styled(View)`
    flex-direction: row;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px
    justify-content: space-between
`

export const TaxText = styled(Text)`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold
    font-size: 18px
`

export const AmountTax = styled(Text)`
    font-weight: normal
    font-size: 25px
`


export const ContributionsContainer = styled(View)`
    background-color: ${({ theme }) => theme.colors.grey};
    box-shadow: 5px 5px 2px  rgba(173, 86, 167, 10);
    padding: 10px;
    border-radius: 10px;
    margin-top: 5%;
`

export const TakeHomeContainer = styled(View)`
    background-color: ${({ theme }) => theme.colors.grey};
    box-shadow: 5px 5px 2px  rgba(173, 86, 167, 10);
    padding: 10px
    border-radius: 10px
    margin-top: 5%;

`
