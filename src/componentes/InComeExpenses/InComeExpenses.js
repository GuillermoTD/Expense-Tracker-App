import { ExpensesContainer } from "./InComeExpensesStyles"
import { useContextValue } from '../../store/GlobalState'



const InComeExpenses = () => {
    
    const { transactions } = useContextValue()

    const amounts = transactions.map(transaction => transaction.amount)
    console.log(amounts)
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)

    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2)
    return (
        <ExpensesContainer>
            <span className="BalanceItem Income">
                In Come
                <p>${income}</p>
            </span>
            <span className="BalanceItem Expense">
                expense
                <p>${expense}</p>
            </span>
            <hr />
        </ExpensesContainer>

    )
}

export default InComeExpenses
