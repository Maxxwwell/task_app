/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const Scaffold = styled(View)`
    flex: 1;
    padding-left: 15px;
    padding-right: 15px;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderContainer = styled(View)`
    align-items: center;
`


export const Tax = styled(Text)`
    font-size: 35px;
    letter-spacing: 3px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.yellow};
    
`

export const Calculator = styled(Text)`
    font-size: 20px;
    font-weight: bold
    color: ${({ theme }) => theme.colors.white};
`
