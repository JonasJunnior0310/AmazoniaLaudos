import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import  {AUTH_TOKEN} from '../constants'
import { withRouter, Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid, Card, CardContent, TextField, Button } from '@material-ui/core'
import { Search, ChevronLeft , ChevronRight} from '@material-ui/icons'

const requestStyle = theme => ({
    warningText: {
        fontFamily: "Ropa Sans",
        textAlign: "center",
        fontSize: "1.5rem",
        height: "100%"
    }
})


function NotLoggedIn(props){
    return(       
        <Grid item style={{margin: 'auto'}}>
            <Typography className={props.classes.warningText}>Você não possui autorização para visualizar os laudos. Por favor, autentique suas credenciais</Typography>
        </Grid>
    
    )
}

function LoggedIn(props){
    const alerts = gql`
        { 
            allPublishedAlerts(startDetectedAt:"01/01/2020" limit:24){
                alertCode
                detectedAt
            }
        }
    `
    const changeAlert = props.changeAlert
    return( 
        <Grid container item  direction="column" justify="center" style={{width: "100%"}}>
            <Grid item style={{margin: "20px auto"}}>
                <Typography variant="h3" style={{fontFamily: "Ropa Sans"}}>
                    Laudos Amazônia Protege
                </Typography>
            </Grid>
            <Grid container item direction="row" style={{width: "100%"}}>
                <Grid item style={{width: "100%"}} xs={12}>
                    <form>                      
                        <TextField style={{margin: "0px 10px"}} id="outlined-basic" label="Procurar alerta " variant="outlined" size="small" placeholder="Alerta ID"/>
                        <TextField style={{margin: "0px 10px"}} id="outlined-basic" label="Procurar por Data" variant="outlined" size="small" placeholder="Data"/>                    
                        <Button style={{fontFamily: "Ropa Sans", margin: "auto 10px", color: "#fff", backgroundColor: "#05668D", textAlign: "center"}}>
                            <Search></Search>
                            Procurar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        <Query query={alerts}>
            
            {({loading, error, data}) => {
                        
                        if(loading) return <Grid item style={{margin: 'auto'}}>Carregando...</Grid>
                        if(error) return <Grid item style={{margin: 'auto'}}>Error!</Grid>

                        return (
                            <Grid container item >
                                <Grid item style={{width: "7.5%", margin: "auto"}}>
                                    <Button><ChevronLeft></ChevronLeft></Button>
                                </Grid>
                                <Grid container item spacing={2} direction="row" style={{width: "85%", margin: "10px auto"}}>
                                    {data.allPublishedAlerts.map(infos => 
                                        <Grid item xs={2} key={infos.alertCode}>
                                            <Link to={"/pdf/alerta"}>
                                                <Card style={{border: "1px solid black"}}>
                                                    <CardContent>
                                                        <Typography style={{fontFamily: "Ropa Sans"}}>
                                                            Alerta {infos.alertCode}
                                                        </Typography>
                                                        <Typography style={{fontFamily: "Ropa Sans"}} variant="subtitle2" color="textSecondary">
                                                            Detectado em: {infos.detectedAt}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        </Grid>
                                    )}
                                </Grid>
                                <Grid item style={{width: "7.5%", margin: "auto"}}>
                                    <Button><ChevronRight></ChevronRight></Button>
                                </Grid>
                            </Grid>
                        )
                    }}
        </Query>
        </Grid>       
    )
}

function Contents(props){
    const token = localStorage.getItem(AUTH_TOKEN)
    if (token){
        return <LoggedIn changeAlert={props.changeAlert}></LoggedIn>;
    }
    return <NotLoggedIn classes={props.styles}></NotLoggedIn>;
}

class Request extends Component{

    render(){
        const {classes} = this.props;
        return(
            <Contents logged={this.props.logged} changeAlert={this.props.changeAlert} styles={classes}/>
        )
    }
}

export default withRouter(withStyles(requestStyle)(Request))