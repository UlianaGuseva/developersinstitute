import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { insert, update } from '../redux/actions'

const TransactionForm = () => {
    const [transaction, setTransaction] = useState({
        accountNumber: '',
        FSC: '',
        name: '',
        amount: ''})

    const currentIndex = useSelector(state => state.currentIndex)
    const list = useSelector(state => state.listOfTrasactions)

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setTransaction({...transaction, [e.target.name]:e.target.value})
    }

    useEffect(()=> {
        if (currentIndex !=-1){
            const trx = list[currentIndex]
            setTransaction({
                accountNumber: trx.accountNumber|| '',
                FSC: trx.FSC|| '',
                name: trx.name|| '',
                amount: trx.amount|| ''
            })
        }
    }, [currentIndex])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentIndex ===-1){
            dispatch(insert(transaction))
        }
        else{
            dispatch(update(transaction))
        }
        setTransaction({accountNumber: '',
        FSC: '',
        name: '',
        amount: ''})

    }


    return (
        <form>
            <input name='accountNumber' 
            placeholder='Account Number' 
            onChange={handleInputChange } 
            value={transaction.accountNumber}/> <br/>
            <input name='FSC' 
            placeholder='FSC' 
            onChange={handleInputChange }
            value={transaction.FSC}/> <br/>
            <input name='name' 
            placeholder='A/C Holder Name' 
            onChange={handleInputChange }
            value={transaction.name}/> <br/>
            <input name='amount' 
            placeholder='Amount' 
            onChange={handleInputChange }
            value={transaction.amount}/> <br/>
            <input type='submit' value={currentIndex ===-1? 'Submit':'Update'} onClick={handleSubmit}/>
        </form>
    )
}






export default (TransactionForm) 
