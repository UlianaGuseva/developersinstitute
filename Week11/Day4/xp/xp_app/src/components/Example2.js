import jsonData from '../data2.json'

const Example2 = (props) => {
  
   
    return (
        <>
        {
            jsonData.Skills.map((item, i)=>{
                return <div key={i}>
                <h2 key={i}>{item.Area}</h2>

                {item.SkillSet.map((lan, x)=>{
                    console.log();
                    return(
                        <div key={x}>
                        <p >{lan.Name}</p>
                        </div>
                    )
                })}
                </div>
        
               
              })
        }
           
        </>
    )
    }
export default Example2