import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Home from './Home'
import Characters from './Characters'
import Spells from './Spells'
import Stories from './Stories'

export default class Router extends Component {
  render() {
    return (
      <div className='content'>
        <Redirect
          from='/'
          to='home'/>
        <Switch>
          <Route
            path='/home'
            component={Home}/>
          <Route
            path='/chars'
            component={Characters}/>
          <Route
            path='/spells'
            component={Spells}/>
          <Route
            path='/stories'
            component={Stories}/>
        </Switch>
      </div>
    );
  }
}