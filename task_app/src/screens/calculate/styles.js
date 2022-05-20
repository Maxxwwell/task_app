/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styled from 'styled-components';

export const Scaffold = styled(View)`
  flex: 1;
  padding: 25px;
  background-color: ${({theme}) => theme.colors.grey};

`;

export const AmountText = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  padding-horizontal: 50px;
  color: ${({theme}) => theme.colors.black};
`;

export const TextField = styled(TextInput)`
  width: 100%;
  margin-top: 10px
  height: 50px;
  border-color: ${props => props.theme.colors.secondary};
  border-width: 2px;
  border-radius: 50px;
  padding-horizontal: 50px;
  font-size: 18px;
    text-align: center;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Button_TextField = styled(View)`
    margin-top: 15%
    align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  margin-top: 5%;
  background-color: ${({theme}) => theme.colors.yellow};
  border-radius: 50px;
`;

export const ButtonText = styled(Text)`
    font-size: 24px;
    font-weight: bold
    color: ${({theme}) => theme.colors.primary};
`;

export const NetInsteadContainer = styled(View)`
    align-items: center;
    margin-top: 10%;
`;


export const NetText = styled(Text)`
  font-size: 15px;
  font-weight: bold;
`


