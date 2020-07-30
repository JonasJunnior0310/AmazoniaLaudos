import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';
// import { render } from 'react-dom';

import Login from './Login'
import Header from './Header'
import Request from './reports'
import { Grid } from '@material-ui/core'

const mainStyles = theme => ({
    main: {
        fontFamily: "Ropa Sans",
        color: "#2D2D2D",
        height:"100vh",
        width: "100%",
        textAlign: "center",
        // overflow: "hidden"
    },
    laudosDisplay: {
        width: "82%",
        height: "100%",
    }
})

class Main extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            logged : false
        }

        this.handleLogginStateChange = this.handleLogginStateChange.bind(this)

    }

    handleLogginStateChange(){
        this.setState({
            logged : !this.state.logged
        })
    }

    render(){

        const {classes} = this.props;
        return (
            <div className={classes.main}>
                <Header></Header>
                <Grid container direction="row" spacing={0} style={{height: "89vh"}}>
                    <Grid item style={{width: "18%", height: "100%"}}>
                        <Login handleLogginChange={this.handleLogginStateChange} logged={this.state.logged}></Login> 
                    </Grid> 
                    <Grid container item direction="column" style={{width: "82%", height: "100%"}}>
                        <Request logged={this.state.logged} changeAlert={this.props.changeAlert}></Request>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(mainStyles)(Main);