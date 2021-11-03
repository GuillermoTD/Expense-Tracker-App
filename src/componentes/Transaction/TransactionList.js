import { useContext } from 'react';
import { GlobalContext } from '../../store/GlobalState'
import TransactionItem from './TransactionItem'
import {TransactionListContainer} from './TransactionsStyles'

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)
    console.log(transactions)
    return (
        <TransactionListContainer>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map((item) => (
                    <TransactionItem key={item.id} text={item.text} amount={item.amount} id={item.id} />
                ))}

            </ul>
        </TransactionListContainer>
    )
}

export default TransactionList
