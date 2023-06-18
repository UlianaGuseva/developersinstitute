import React from 'react'


class FormComponent extends React.Component {
    constructor(){
    super()
    this.state = {
        firstname: '',
        lastname: '',
        age: '',
        gender: '',
        destination: '',
        nutsfree: false,
        lactosefree: false,
        vegan: false
    }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log("submit");
        const {firstname, lastname, age, gender, destination, nutsfree, lactosefree, vegan}= this.state
        this.setState({firstname:'', lastname:'', age:'', gender:'', destination:'', nutsfree:'', lactosefree:'', vegan:''})
    }
   
    handleChange= (e)=>{
        const value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value
        this.setState({[e.target.name]:value})
        // console.log(target);
        
        // if(target.name==='destination'){
        //     this.setState({destination:target.value})
        //     console.log(this.state.destination);
        // }
        // if(target.name==='dietary'){
        //     if(target.value==='vegan'){
        //         console.log(target.value);
        //         if(this.state.vegan==='Yes'){
        //             this.setState({vegan:'No'})
        //         }
        //         else{
        //             this.setState({vegan:'Yes'})
        //         }  
        //     }
        // }
        // if(target.value==='nutsfree'){
        //     console.log(target.value);
        //     if(this.state.nutsfree==='Yes'){
        //         this.setState({nutsfree:'No'})
        //     }
        //     else{
        //         this.setState({nutsfree:'Yes'})
        //     }
        // }
        // if(target.value==='lactosefree'){
        //     console.log(target.value);
        //     if(this.state.lactosefree==='Yes'){
        //         this.setState({lactosefree:'No'})
        //     }
        //     else{
        //         this.setState({lactosefree:'Yes'})
        //     }
        // }
    }

  

    
   
    render(){
  
           return(
            <>
            
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='firstname' name='firstname' onChange={(e) => this.handleChange(e)}/><br/>
                <input type='text' placeholder='lastname' name='lastname' onChange={(e) => this.handleChange(e)}/><br/>
                <input type='text' placeholder='age' name='age' onChange={(e)=> this.handleChange(e)}/><br/>
                <div onChange={(e) => this.handleChange(e)}>
                <input type="radio" name="gender" value='male' />Male<br/>
                <input type="radio" name="gender" value='female' />Female<br/>
                </div>
                <h5>Select your destination</h5>
                <select name='destination' onChange={(e)=>this.handleChange(e)}>
                    <option  value='Japan' >Japan</option>
                    <option  value='Brasil' >Brasil</option>
                    <option  value='Thailand' >Thailand</option>
                </select>
                <div>
                    <h3>Dietary restrictions</h3>  
                    <input name='nutsfree'  type="checkbox"    onChange={(e)=> this.handleChange(e)}/>Nuts free <br/>
                    <input name='lactosefree'  type="checkbox"   onChange={(e)=>this.handleChange(e)}/>Lactose free <br/>
                    <input name='vegan'  type="checkbox"   onChange={(e)=>this.handleChange(e)}/>Vegan <br/>
                </div>
                <button type='submit' value='Submit'>Submit</button>
            </form>
            <div>
                <h1>Entered Info: </h1>
                <h5>Your name: {this.state.firstname} {this.state.lastname}</h5>
                <h5>Your age: {this.state.age}</h5>
                <h5>Your gender: {this.state.gender} </h5>
                <h5>Your destination: {this.state.destination}</h5>
                <h5>Your dietary restrictions: </h5>
                <p>**Nuts free: {this.state.nutsfree ? 'Yes' : 'No'}</p>
                <p>**Lactose free: {this.state.lactosefree  ? 'Yes' : 'No'}</p>
                <p>**Vegan: {this.state.vegan  ? 'Yes' : 'No'}</p>

            </div>
            </>
          ) 
        
        
       }
}

export default FormComponent