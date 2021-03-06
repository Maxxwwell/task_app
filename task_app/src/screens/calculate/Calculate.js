import {View, Text, Keyboard, Alert} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AmountText,
  Button,
  ButtonText,
  Button_TextField,
  LeadingText,
  Scaffold,
  TextField,
  TextFieldContainer,
} from './styles';
import {HeaderContainer} from '../onBoard/style';
import {useState} from 'react';
export default function Calculate({navigation, route}) {

  const [amount, setAmount] = useState('');

  const validate = () => {
    Keyboard.dismiss();
    if (!amount) {
      Alert.alert('Oops..', 'Amount is required');
      return;
    } else if(amount < 1) {
      Alert.alert('Oops..', 'Salary can not be 0');
      return;
    }
    navigation.navigate('home', {amount: amount});
  };

  return (
    <Scaffold>
      <SafeAreaView>
        <HeaderContainer>
          <AmountText>How much is your gross monthly income?</AmountText>
        </HeaderContainer>
        <Button_TextField>
          <TextField
            autoFocus={false}
            keyboardType="numeric"
            placeholder="GH¢ 2000.00"
            value={amount}
            onChangeText={text => setAmount(text)}
          />

        <Button onPress={() => {
          validate()
          setAmount('')
          }}>
            <ButtonText>CALCULATE</ButtonText>
          </Button>
        </Button_TextField>
      </SafeAreaView>
    </Scaffold>
  );
}
