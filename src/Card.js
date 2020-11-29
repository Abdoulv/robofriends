import React from 'react';
import 'tachyons';
import './robots';

const Card =({name ,id,email  }) =>
{   return (
      <div className="tc grow dib br1 ma1 pa1 bg-light-blue shadow-10">
          <img  alt='C:\Users\chaba\Pictures\r1.png' src={`https://robohash.org/ ${id} ?200*200`} />
          <div>
          <h1> {name}</h1>
          <p>{email}</p>
          </div>
      
      </div>
    
)


}
export default Card ;
