import React from "react"
// @ts-ignore
import * as JSURL from "jsurl"
import {Checkbox, Input} from "antd"
import {useQueryParam} from "../../hooks/use-query-param"



interface Pizza {
  toppings: string[];
  crust: string;
  extraSauce: boolean;
}

interface IProps {

}

const AutoLogin: React.FC<IProps> = () => {
  let [pizza, setPizza] = useQueryParam<Pizza>("pizza")

  if (!pizza) {
    pizza = {toppings: [], crust: "regular", extraSauce: false}
  }

  const handlePizzaChange = (key: any, value: any) => {
    if (pizza) {
      // @ts-ignore
      pizza[key] = value
      setPizza(pizza)
    }
  }

  return <div>
    auto login

    Toppings

    <p>
      <Input value={pizza.crust} onChange={e => handlePizzaChange('crust', e.target.value)}/>
    </p>

    <p>
      <Checkbox checked={pizza.extraSauce} onChange={e => handlePizzaChange('extraSauce', e.target.checked)}>extraSauce</Checkbox>
    </p>
  </div>
}

export default AutoLogin