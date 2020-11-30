import React from 'react';
import 'tachyons';
import './robots';

const Card =({name ,id,email  }) =>
{   return (
      <div className="tc grow dib br1 ma1 pa1 bg-light-blue shadow-10 " style={{width:"23%"}}>
          <img  alt='robo' src={`https://robohash.org/ ${id}`} />
          
          <h1> {name}</h1>
          <p>{email}</p>

      
      </div>
    
            );


}
export default Card ;
