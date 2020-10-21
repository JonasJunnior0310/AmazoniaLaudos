import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { YOUR_CLIENT_ID } from '../constants'
import Main from './main'
import PDF from './Request'
import '../styles/App.css';

// Load client library.
import ee from '@google/earthengine'

// Initialize client library and run analysis.

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
  
  componentDidMount () {
    ee.data.authenticateViaOauth(YOUR_CLIENT_ID, () => {console.log("LOGADO!")}, function(e) {console.error('Authentication error: ' + e);});

    // () => {
    //   ee.data.getAuthToken()
    //   ee.data.setAuthToken()
    //   ee.initialize(null, null, function() {
    //     var image = new ee.Image('srtm90_v4');
    //     image.getMap({min: 0, max: 1000}, function(map) {
    //     console.log(map);
    // });
    //   }, function(e) {
    //     console.error('Initialization error: ' + e);
    //   });
    // };
  }

  render(){

    return(     
      // <Main></Main>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/pdf/alerta" render={props => (<PDF {...props} client={this.props.client}></PDF>)} /> 
        {/* <Route exact path="/test" component={Test} /> */}
        {/* <Route exact path="/pdfs/pdfinfos" render={props => (<INFOS {...props} test="hello world!"></INFOS>)} /> */}
      </Switch> 
    )
  }
}

export default App;