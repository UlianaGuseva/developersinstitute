import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link, useNavigate} from 'react-router-dom'

const Product = (props) =>{
    const [product, setProduct] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const param = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        getProductInfo()
    },[])

    const getProductInfo= async()=>{
        try{
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/products/${param.id}`)
            const data = await res.json()
            setProduct(data)
            setName(data[0].name)
            setPrice(data[0].price)


        } catch (e){
            console.log(e);
        }
    }
const updateProdInfo = async(e)=> {
    e.preventDefault()
 
    try{
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/products/${param.id}`, 
        {method: 'PUT',
        headers: {
            'Content-type':'application/json'
        },
        body:JSON.stringify({name,price})}
        )
        
        const data = await res.json()
            setProduct(data)
         
       

    }
    catch(e){
        console.log(e);
    }
}
const deleteProdInfo = async(e)=> {
    e.preventDefault()
 
    try{
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/products/${param.id}`, 
        {method: 'DELETE',
        headers: {
            'Content-type':'application/json'
        },
        }
        )
        
        const data = await res.json()
        navigate('/')
            
         
       

    }
    catch(e){
        console.log(e);
    }
}
    return(
        <div>
            <h1>Product {param.id}</h1>
            <h2>Update Product</h2>
            <form onSubmit={(e)=>updateProdInfo(e)}>
                name: <input type='text' value={name} name='name' onChange={(e)=>setName(e.target.value)}/>
                price: <input type='text' value={price} name='price' onChange={(e)=>setPrice(e.target.value)} />
                <input type='submit' value='UpdateProduct'  />
                </form>
            {
                product.map(item=>{
                    return(
                        <div>
                            <h4>{item.name}</h4>
                            <h4>{item.price} $</h4>

                            </div>
                    )
                })
            }
            <button onClick={(e)=>deleteProdInfo(e)}>Delete</button>
            <Link to={'/'}>Back Home</Link>
        </div>
    )
}

export default Product