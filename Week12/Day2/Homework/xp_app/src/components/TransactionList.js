import TransactionForm from "./TransactionForm";
import { useSelector, useDispatch } from 'react-redux'
import { deleteOne, updateIndex } from '../redux/actions'


const TransactionList = () => {
    const list = useSelector(state => state.listOfTrasactions)

    const dispatch = useDispatch()

    return (
            <>
            <TransactionForm/>
            <h2> Transaction List</h2>
            <table style={{border:'1px solid white', padding: '5px'}} >
            <tr>
                        <th style={{border:'1px solid white', padding: '5px'}}>Account Number</th>
                        <th style={{border:'1px solid white', padding: '5px'}}>FSC</th>
                        <th style={{border:'1px solid white', padding: '5px'}}>Name</th>
                        <th style={{border:'1px solid white', padding: '5px'}}> Amount</th>
                    </tr>
                {list.map((item, index)=> {
                return (
                    <tr key={index}>
                        <td style={{border:'1px solid white', padding: '5px'}}>{item.accountNumber}</td>
                        <td style={{border:'1px solid white', padding: '5px'}}>{item.FSC}</td>
                        <td style={{border:'1px solid white', padding: '5px'}}>{item.name}</td>
                        <td style={{border:'1px solid white', padding: '5px'}}>{item.amount}</td>
                        <td style={{border:'1px solid white', padding: '5px'}}><button onClick={()=>dispatch(updateIndex(index))}>Edit</button></td>
                        <td style={{border:'1px solid white', padding: '5px'}}><button onClick={()=>dispatch(deleteOne(index))}>Delete</button></td>
                    </tr>
                )
            })} 
            </table>
            </>
        )
    }


    
    
    export default (TransactionList) 
    