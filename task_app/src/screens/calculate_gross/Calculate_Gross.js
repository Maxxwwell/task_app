import {Keyboard, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';
import {
  AmountText,
  Button,
  ButtonText,
  Button_TextField,
  LeadingText,
  NetInsteadContainer,
  NetText,
  Scaffold,
  TextField,
  TextFieldContainer,
} from '../calculate/styles';
import { HeaderContainer } from '../onBoard/style';

export default function Calculate_Gross({navigation, route}) {
    const [amount, setAmount] = useState('');
    const validate = () => {
        Keyboard.dismiss();
        if (!amount) {
          Alert.alert('Oops..', 'Amount is required');
          return;
        } else if (amount < 1) {
          Alert.alert('Oops..', 'Salary can not be 0');
          return;
        }
        navigation.navigate('home', {amount: amount});
      };
    
      if (amount < 300) {
        console.log(amount);
      }

    return (
    <Scaffold>
      <SafeAreaView>
        <HeaderContainer>
          <AmountText>How much is your net monthly income?</AmountText>
        </HeaderContainer>
        <Button_TextField>
          <TextField
            autoFocus={false}
            keyboardType="numeric"
            placeholder="GH¢ 2000.00"
            value={amount}
            onChangeText={text => setAmount(text)}
          />

          <Button
            onPress={() => {
              validate();
              setAmount('');
            }}>
            <ButtonText>CALCULATE</ButtonText>
          </Button>
        </Button_TextField>
        <NetInsteadContainer>
          <TouchableOpacity onPress={() => navigation.navigate('calculate')}>
            <NetText>Enter your gross salary instead?</NetText>
          </TouchableOpacity>
        </NetInsteadContainer>
      </SafeAreaView>
    </Scaffold>
  );
}
