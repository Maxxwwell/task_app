/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styled from 'styled-components';

export const NetCalculator = styled(Text)`
font-size: 16px;
font-weight: bold
color: ${({ theme }) => theme.colors.primary};
`

export const DescriptionText = styled(Text)`
    color: ${({ theme }) => theme.colors.primary};
    padding: 20px;
    text-align: center;
`


export const Loader = styled(ActivityIndicator)`   
    justify-content: center
    height: 70%
`


export const TaxContainer = styled(View)`
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 5px 5px 2px  rgba(173, 86, 167, 10);
    padding: 10px
    border-radius: 10px
`


export const TaxTitle = styled(Text)`
    color: ${({ theme }) => theme.colors.grey};
    text-align: center;
    font-size: 25px;
    font-weight: bold
    padding-top: 10px
`

export const TaxTextContainer = styled(View)`
    flex-direction: row;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px
    justify-content: space-between
`


export const TaxText = styled(Text)`
    color: ${({ theme }) => theme.colors.grey};
    font-weight: bold
    font-size: 18px
`

export const Divider = styled(View)`
    background-color: ${({ theme }) => theme.colors.grey};
    width: 100%;
    height: 0.2px;
    margin-top: 10px
`

export const AmountTax = styled(Text)`
    font-weight: normal
    font-size: 20px
    color: ${({ theme }) => theme.colors.grey};
`

export const ContributionsContainer = styled(View)`
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 5px 5px 2px  rgba(173, 86, 167, 10);
    padding: 10px;
    border-radius: 10px;
    margin-top: 5%;
`

export const TakeHomeContainer = styled(View)`
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 5px 5px 2px  rgba(173, 86, 167, 10);
    padding: 10px
    border-radius: 10px
    margin-top: 5%;
`

export const ButtonText = styled(Text)`
    font-size: 24px;
    font-weight: bold
    color: ${({theme}) => theme.colors.grey};
`;