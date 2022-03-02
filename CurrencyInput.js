import React from "react";
import { TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const CurrencyInput = (props) => {
  return (
    <View>
      <TextInput
        placeholder="Enter Amount to Convert"
        onChange={(ev) => props.onAmountChange(ev.target.value)}
        value={props.amount}
        keyboardType="number-pad"
        maxLength={12}
      />

      <Picker
        selectedValue={props.currency}
        onChange={(ev) => props.onCurrencyChange(ev.target.value)}
      >
        {props.currencies.map((currency) => (
          <Picker.Item label={currency} value={currency} />
        ))}
      </Picker>
    </View>
  );
};

export default CurrencyInput;
