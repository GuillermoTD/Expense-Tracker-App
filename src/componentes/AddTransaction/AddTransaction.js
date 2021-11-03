import {useState} from 'react'
import {useContextValue} from '../../store/GlobalState'
import{AddTransactionContainer} from './AddTransactionStyles'

const AddTransaction = () => {

    const [text, setText] = useState('')

    const [amount, setAmount] = useState(0)

    const {addTransaction} = useContextValue()

    const handleSubmit = (e) =>{

        e.preventDefault()

        const newTransaction = {
            id:Math.floor(Math.random()*1000000000),
            text,
            amount: Number(amount)
        }

        addTransaction(newTransaction)
        
        e.reset()
    }
    return (
        <AddTransactionContainer>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="Field1">
                    <label>text</label>
                    <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control Field2">
                    <label htmlFor="amount">
                        amount<br/>
                        {"(negative-expense, positive-income)"}
                    </label>
                    <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter Amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </AddTransactionContainer>
    )
}

export default AddTransaction
