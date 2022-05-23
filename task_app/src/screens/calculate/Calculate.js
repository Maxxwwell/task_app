import {Keyboard, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
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
} from './styles';
import {HeaderContainer} from '../onBoard/style';
import {useState} from 'react';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {colors} from '../../theme/colors';

export default function Calculate({navigation, route}) {
  const [amount, setAmount] = useState('');
  const [allowances, setAllowances] = useState();
  // const [taxRelief, setTaxRelief] = useState();
  const [tier, setTier] = useState('');
  console.log(tier)

  const validate = () => {
    Keyboard.dismiss();
    if (!amount) {
      Alert.alert('Oops..', 'Amount is required');
      return;
    } else if (amount < 1) {
      Alert.alert('Oops..', 'Salary can not be 0');
      return;
    }
    else if (!tier) {
      Alert.alert('Please select a tier' );
      return;
    }
    navigation.navigate('home', {amount: amount, allowances: allowances, tier: tier});
  };

  if (amount < 300) {
    console.log(amount);
  }

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
            placeholder="GH¢: Monthly Gross Income"
            value={amount}
            onChangeText={text => setAmount(text)}
          />
          <TextField
            autoFocus={false}
            keyboardType="numeric"
            placeholder="GH¢: Monthly Allowances"
            value={allowances}
            onChangeText={text => setAllowances(text)}
          />
     
          <Picker
            selectedValue={tier}
            onValueChange={value => setTier(value)}
            mode="dropdown"
            
            style={{
              width: 300,
              color: colors.primary
            }}>
            <Picker.Item label="Please select your tier" value="0"
            
            />
            <Picker.Item label="Tier 1" value="0.13" />
            <Picker.Item label="Tier 2" value="5.5" />
            <Picker.Item label="Tier 3" value="55" />
          </Picker>

          <Button
            onPress={() => {
              validate();
              setAmount('');
              setAllowances('');
              setTier('')
              // setTaxRelief('')
            }}>
            <ButtonText>CALCULATE</ButtonText>
          </Button>
        </Button_TextField>
        <NetInsteadContainer>
          <TouchableOpacity
            onPress={() => navigation.navigate('calculate_gross')}>
            <NetText>Enter your net salary instead?</NetText>
          </TouchableOpacity>
        </NetInsteadContainer>
      </SafeAreaView>
    </Scaffold>
  );
}
