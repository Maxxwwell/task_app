/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const Scaffold = styled(View)`
    flex: 1;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderContainer = styled(View)`
    align-items: center;
    margin-top: 60px
`

export const IconContainer = styled(View)`
    margin-top: 40%
   align-items: center;
`

export const Tax = styled(Text)`
    font-size: 65px;
    letter-spacing: 3px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.yellow};
    
`

export const Calculator = styled(Text)`
    font-size: 24px;
    font-weight: bold
    color: ${({ theme }) => theme.colors.white};
`


export const ButtonText = styled(Text)`
    font-size: 24px;
    font-weight: bold
    color: ${({ theme }) => theme.colors.white};
`

export const InfoText = styled(Text)`
    font-size: 18px;
    text-align: center;
    margin-top: 40px;
    color: ${({ theme }) => theme.colors.grey};
`;

export const Button = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 55px;
    margin-top: 45%;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 50px;
`