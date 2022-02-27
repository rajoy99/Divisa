import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const CurrencyInput = (props) => {
  return (
    // <View className="group">
    //   <TextInput
    //     type="number"
    //     value={props.amount}
    //     onChange={(ev) => props.onAmountChange(ev.target.value)}
    //   />

    //   <Select
    //     value={props.currency}
    //     onChange={(ev) => props.onCurrencyChange(ev.target.value)}
    //   >
    //     {props.currencies.map((currency) => (
    //       <option value={currency}> {currency} </option>
    //     ))}
    //   </Select>
    // </View>

    <Picker
      selectedValue={props.currency}
      onValueChange={(ev) => props.onCurrencyChange(ev.target.value)}
    >
      {props.currencies.map((currency) => (
        <Picker.Item label={currency} value={currency} />
      ))}
    </Picker>
  );
};

export default CurrencyInput;
