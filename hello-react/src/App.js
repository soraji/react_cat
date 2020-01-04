import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import './App.css';
import './css/basic.css';
import './css/style.css';

import Gnb from './components/Gnb.js'
import Main from './components/Main.js'
import Login from './components/Login.js'
import Join from './components/Join.js'
import Foster from "./components/Foster.js"
import Adoption from "./components/Adoption.js"
import SecondUse from './components/SecondUse.js'
import Recommendation from './components/Recommendation.js'
import Talktalk from './components/Talktalk.js'

class App extends Component{
  render(){
    return(
      <Fragment>
        <Router>
          <Gnb/>
          <Switch>
            <Route path="/foster" component={Foster}/>  
            <Route exact path="/" component={Main}/>
            <Route path="/main" component={Main}/>
            <Route path="/adoption" component={Adoption}/>
            <Route path="/secondUse" component={SecondUse}/>
            <Route path="/recommendation" component={Recommendation}/>
            <Route path="/talktalk" component={Talktalk}/>
            <Route path="/login" component={Login}/>
            <Route path="/join" component={Join}/>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
