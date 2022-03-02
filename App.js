import { StatusBar } from "expo-status-bar";
import { TextInput, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
// import CurrencyInput from "./CurrencyInput";
import axios from "axios";
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



const App = () => {
  const [amount1, setamount1] = useState(1);
  const [amount2, setamount2] = useState(1);
  const [currency1, setcurrency1] = useState("USD");
  const [currency2, setcurrency2] = useState("USD");
  const [rates, setrates] = useState({});

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  console.log(" Type of Rates array elements : ", typeof rates);

  const onAmountChange1 = (amount1) => {
    setamount1(amount1);
    setamount2((amount1 * rates[currency2]) / rates[currency1]);
  };

  const onAmountChange2 = (amount2) => {
    setamount2(amount2);
    setamount1((amount2 * rates[currency1]) / rates[currency2]);
  };

  const onCurrencychange1 = (currency1) => {
    setcurrency1(currency1);
    setamount2((amount2 * rates[currency2]) / rates[currency1]);
  };

  const onCurrencychange2 = (currency2) => {
    setcurrency2(currency2);
    setamount1((amount1 * rates[currency1]) / rates[currency2]);
  };

  const cardstyle = {
    // marginTop: theme.spacing(20),
    marginTop: "12%",
    marginLeft: "10%",
    marginRight: "10%",
    flexDirection: "column",
    backgroundColor: "#b3f5db",
    borderRadius: "5%",
  };

  useEffect(() => {
    axios
      .get(
        "http://data.fixer.io/api/latest?access_key=896831b1d4ecce0ec324674981fd81d1"
      )
      .then((response) => {
        setrates(response.data.rates);
      });
  }, []);

  return (
    <View style={{marginTop:30}}>
      <CurrencyInput
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
        onAmountChange={onAmountChange1}
        onCurrencyChange={onCurrencychange1}
      />
      <CurrencyInput
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
        onAmountChange={onAmountChange2}
        onCurrencyChange={onCurrencychange2}
      />
    </View>
  );
};

export default App;
