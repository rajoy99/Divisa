import React  from "react"
import {View} from 'react-native'



const CurrencyInput = (props) => {

    return (
      <View className="group">
        <input
          type="number"
          value={props.amount}
          onChange={(ev) => props.onAmountChange(ev.target.value)}
        />

        <select
          value={props.currency}
          onChange={(ev) => props.onCurrencyChange(ev.target.value)}
        >
          {props.currencies.map((currency) => (
            <option value={currency}> {currency} </option>
          ))}
        </select>
      </View>
    );

}

export default CurrencyInput