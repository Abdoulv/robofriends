import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';
class App extends Component{

  constructor ()
  { super()
    this.state={
      robots:robots,
      searchfield :''
    }

  }
  onsearchchange = (event) =>{
    this.setState({searchfield:event.target.value})
   
  }
  
  render (){
  const filtredrobots = this.state.robots.filter(robot =>{
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className="pa2 tc ">
          <h1 className="f1">  Robofriends</h1>
          <SearchBox searchchange={this.onsearchchange}/>
          <CardList robots={filtredrobots}/>
      </div>
           );
           }
  

}

export default App;