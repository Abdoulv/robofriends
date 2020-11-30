import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
class App extends Component{

  constructor ()
  { super()
    this.state={
      robots:[],
      searchfield :''
    }

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    .then((users) => {
      this.setState({robots: users});
    })
  }

  onsearchchange = (event) =>
{
this.setState({searchfield:event.target.value})

}
  
  render ()
  {
    const {robots,searchfield}=this.state;
  const filtredrobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
     return !robots.length?
    <h1 className="tc f1">Loading...</h1>:
    
      <div className="pa2 tc ">
          <h1 className="f1">  Robofriends   </h1>
          <SearchBox searchchange={this.onsearchchange}/>
          <Scroll>
          <CardList robots={filtredrobots}/>
          </Scroll>
      </div> 
    
    
          

           
  

}

}
export default App;