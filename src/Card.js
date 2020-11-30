import React from 'react';
import 'tachyons';
import './robots';

const Card =({name ,id,email  }) =>
{   return (
      <div className="tc grow dib br1 ma1 pa1 bg-light-blue shadow-10">
          <img  alt='robo' src={`https://robohash.org/ ${id} ?50*50`} />
          
          <h1> {name}</h1>
          <p>{email}</p>

      
      </div>
    
            );


}
export default Card ;
