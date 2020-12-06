import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About';
import NavBar from './components/NavBar';
import ProjectDetails from './components/ProjectDetails';
import {projects as Projects} from './components/Projects';
import { Route, Switch } from 'react-router-dom';


class App extends React.Component{
  render(){

  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
      </Switch>
    </div>
  )
 } 
}

export default App;