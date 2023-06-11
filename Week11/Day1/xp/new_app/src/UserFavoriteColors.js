import React from 'react';


const UserFavoriteColors = (props) => {
       
        
    return (
        <ul>
                {props.animals.map((animal, i) => 
                
                <li key={i}>{animal} </li>
                
                )}
        </ul>
    ) }
export default UserFavoriteColors;