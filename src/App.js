import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import Character from './components/character';
import ViewCharacter from './components/viewcharacter';
import Home from './components/home';


class App extends React.Component{
  render(){
    return(
      <Router>
            <div id="wrapper">
            <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/character" component={Character}></Route>
            <Route exact path="/viewcharacter/:id" component={ViewCharacter}></Route>

            </Switch>
            </div>
        </Router>
    )
  }
}
export default App;
