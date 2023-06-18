import jsonData from '../data2.json'

const Example3 = (props) => {
  
   
    return (
        <>
        {
            jsonData.Experiences.map((item, i)=>{
                return <div key={i}>
                <img src={item.logo}/>
                <h2>{item.companyName}</h2>

                {item.roles.map((role, x)=>{
                    console.log();
                    return(
                        <div key={x}>
                        <h3 >{role.title}</h3>
                        <h4 >{role.startDate} {role.startDate}</h4>
                        <h3 >{role.description}</h3>

                        </div>
                    )
                })}
                </div>
        
               
              })
        }
           
        </>
    )
    }
export default Example3