import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Home from './Home'
import Characters from './Characters'
import Spells from './Spells'
import Info from './Info'

export default class Router extends Component {
  render() {
    return (
      <div>
        <Redirect
          from='/'
          to='home'/>
        <Switch>
          <Route
            path='/home'
            component={Home}/>
          <Route
            path='/characters'
            component={Characters}/>
          <Route
            path='/spells'
            component={Spells}/>
          <Route
            path='/info'
            component={Info}/>
        </Switch>
      </div>
    );
  }
}