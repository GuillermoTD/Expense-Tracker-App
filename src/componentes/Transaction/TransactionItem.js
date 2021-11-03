import { useContextValue } from "../../store/GlobalState"
import {TransactionItemContainer} from './TransactionsStyles'
const TransactionItem = ({ text, amount, id }) => {

    const sign = amount < 0 ? '-' : '+'

    const {deleteTransaction} = useContextValue()

    return (
            <TransactionItemContainer>
                <div>{text}</div>
                <div className={amount > 0 ? "plus" : "minus"}>
                    {sign}${Math.abs(amount)}
                    <button onClick={() => deleteTransaction(id)} className="deleteButton">x</button>
                </div>
            </TransactionItemContainer>

    )
}

export default TransactionItem
