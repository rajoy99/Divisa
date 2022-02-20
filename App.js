import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState,useEffect } from 'react';
import CurrencyInput from './CurrencyInput';

const App = () =>  
{

const [amount1,setamount1]= useState(1)
const [amount2,setamount2]= useState(1)
const [currency1,setcurrency1]=useState('USD')
const [currency2,setcurrency2]=useState('USD')
const [rates,setrates]=useState({})



console.log(" Type of Rates array elements : ",typeof rates)

const onAmountChange1 =(amount1) =>{

  setamount1(amount1)
  setamount2(amount1*rates[currency2]/rates[currency1])
}

const onAmountChange2 =(amount2) =>{

  setamount2(amount2)
  setamount1(amount2*rates[currency1]/rates[currency2])
}

const onCurrencychange1 = (currency1) => {
  setcurrency1(currency1)
  setamount2(amount2*rates[currency2]/rates[currency1])
}

const onCurrencychange2 = (currency2) => {
  setcurrency2(currency2)
  setamount1(amount1*rates[currency1]/rates[currency2])
}

const cardstyle = {
  // marginTop: theme.spacing(20),
  marginTop:'12%',
  marginLeft: '10%',
  marginRight:'10%',
  flexDirection: 'column',
  backgroundColor: "#b3f5db",
  borderRadius : "5%"
}


// useEffect(() => {
//   if (!!rates) {
//     function init() {
//       onAmountChange1(1);
//     }
//     init();
//   }
// }, [rates]);



  useEffect(
    ()=>{
      axios
      .get("http://data.fixer.io/api/latest?access_key=896831b1d4ecce0ec324674981fd81d1")
      .then(response => {
        setrates(response.data.rates);
      })

    },[]);


  return (
    <View className="App">


            <CurrencyInput
              currencies={Object.keys(rates)}
              amount={amount1}
              currency={currency1}
              onAmountChange={onAmountChange1}
              onCurrencyChange={onCurrencychange1}
            />
            <br></br>
            <CurrencyInput
              currencies={Object.keys(rates)}
              amount={amount2}
              currency={currency2}
              onAmountChange={onAmountChange2}
              onCurrencyChange={onCurrencychange2}
            />
    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
