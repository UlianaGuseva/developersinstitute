import {useState, useEffect} from 'react'

const Products =(props)=>{
useEffect(() => {
    all()
}, [])
    const all = async () => {
        try{
            const res = await fetch('http://127.0.0.1:3030/api/products');
            const data = await res.json()
            setProducts(data)
        } catch(e){
            console.log(e);
        }
        // fetch('http://127.0.0.1:3030/api/products')
        // .then(res =>res.json())
        // .then(data => {
        //     setProducts(data)
        // })
        // .catch(err =>{
        //     console.log(err);
        // })
    }

   
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState()

    const searchProd= async()=>{
        try{
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/search?name=${search}`);
            const data = await res.json()
            setProducts(data)
        } catch(e){
            console.log(e);
        }

    }
    const addProd= (e)=>{
        e.preventDefault()
        const fetchData =async()=>{
           try{
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/products`, {
                method: 'POST',
                headers: {
                    'Content-type':'application/json'
                },
                body:JSON.stringify({name,price})
            })
           
            const data = await res.json()
            setProducts(data)
        } catch(e){
            console.log(e);
        }
    } 
    fetchData()
        }
        
    return(
        <div>
            <h1>Shop</h1>
            <div>
                <input type='text' onChange={(e)=>setSearch(e.target.value)}/>
                <button type='submit' onClick={searchProd}>search
                </button>
            </div>
            <div>
                <form>
                name: <input type='text' onChange={(e)=>setName(e.target.value)} />
                price: <input type='text' onChange={(e)=>setPrice(e.target.value)} />
                <input type='submit' value='Add' onClick={addProd}/>
                </form>
            </div>
            {
                products.map(item =>{
                    return(
                      <div key={item.id} style={{display:'inline-block',
                      padding: '20px',
                      margin:'20px',
                      border:'1px solid #fff',
                      }}>
                        <h4>{item.name}</h4>
                        <h4>{item.price}</h4>
                        </div>  
                    )
                })
            }
        </div>
    )
}

export default Products