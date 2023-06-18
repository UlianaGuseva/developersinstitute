import jsonData from '../data.json'

const PostList = (props) => {
  
   
    return (
        <>
        {
            jsonData.map((item, i)=>{
                return(
                     <div key={i}>
                <h1 >{jsonData[i].title}</h1>
                <p >{item.content}</p>
                </div>
                )
               
              })
        }
           
        </>
    )
    }
export default PostList