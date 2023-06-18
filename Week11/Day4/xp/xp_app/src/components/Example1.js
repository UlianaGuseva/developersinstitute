import jsonData from '../data2.json'

const Example1 = (props) => {
  
   
    return (
        <>
        {
            jsonData.SocialMedias.map((item, i)=>{
                return(
        
                <h1 key={i}>{item}</h1>
             
                )
               
              })
        }
           
        </>
    )
    }
export default Example1