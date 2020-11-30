import React from 'react';

const SearchBox =({ searchchange}) =>
{  return (
     <div className="pa2 ">
    <input 
    type="search"
     placeholder="search"
      className="pa3 ba b--green bg-lightest-blue"
      onChange={searchchange}/>
    </div> );
}
export default SearchBox;