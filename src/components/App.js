import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Main from './main'
import PDF from './PDF'

import '../styles/App.css';

// import { Switch, Route } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      alertNumber : ""
    }

    this.changeAlertNumber = this.changeAlertNumber.bind(this)
  }

  changeAlertNumber(newAlertNumber){
    this.setState({alertNumber: newAlertNumber})
  }

  render(){
    console.log(this.state.alertNumber)
    return(     
      <Switch>
        <Route exact path="/" render={props => (<Main {...props} changeAlert={this.changeAlertNumber}></Main>)} />
        <Route exact path="/pdf/test" render={props => (<PDF {...props} alertNumber={this.state.alertNumber}></PDF>)} />
      </Switch> 
    )
  }
}

export default App;