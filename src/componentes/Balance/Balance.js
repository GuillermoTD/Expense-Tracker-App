import { BalanceContainer } from "./BalanceStyles"
import {useContextValue} from '../../store/GlobalState'
const Balance = () => {
  const {transactions} = useContextValue()
  //An array with all the amount of the array transactions
  const amounts = transactions.map(transaction=>transaction.amount)
  //Here we use reduce method to sum all amounts of the transactions array
  const total = amounts.reduce((acc, item)=>(acc+=item),0)
  return (
    <BalanceContainer>
      Your Balance
      <span className="BalanceItem">{`Total: $${total}`}</span>
    </BalanceContainer>

  )
}

export default Balance
