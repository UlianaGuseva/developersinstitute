import React from 'react';
import './Exercise4.css'



const Exercise4 = () => {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };  
        
    return (
        <div>
            <h1 style={{
        color:'red',
        backgroundColor:'blue'
      }}>
        This is h1
      </h1>
      <h1 style={style_header}>Part II</h1>
      <p className='para'>This is paragraph</p>
      <a href=''>This is link</a>
      <form>
        <label>Enter your name</label><br></br>
        <input></input>
        <button>Submit</button>
      </form>
      <img src='./logo512.png'></img>
      <ul>
        <li>first</li>
        <li>second</li>
        <li>third</li>
      </ul>
        </div>
    ) }
export default Exercise4;