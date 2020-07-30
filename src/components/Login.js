import React, {Component} from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import  {AUTH_TOKEN} from '../constants'

import { withStyles } from '@material-ui/core/styles'
import { Typography, Input, Button, Link, Grid } from '@material-ui/core';

const loginBar = theme => ({
    bar : {
        backgroundColor: "#2D2D2D",
        position: "absolute",
        height: "89vh",
        width: "18%",
    },
    description1: {
        fontFamily: "Ropa Sans",
        color: "white",
        textAlign: "center",
        margin: "50px 0px 0px 0px",
    },
    description2: {
        fontFamily: "Ropa Sans",
        color: "white",
        textAlign: "center",
    },
    loggedIn: {
        fontFamily: "Ropa Sans",
        color: "white",
        textAlign: "center",
        fontSize: "2.0rem",
    },
    loggedInDescription: {
        fontFamily: "Ropa Sans",
        color: "white",
        textAlign: "center",
        fontSize: "1.0rem",
    },
    inputs: {
        color: "#fff",
        '&:before': {borderColor: "#fff"},
        '&:after': {borderColor: "#fff"},
    },
    button: {
        fontFamily: "Ropa Sans",
        color: "#fff",
        backgroundColor: "#05668D",
        textAlign: "center"
    },
    links: {
        color: "#fff",
    }
})

const credentials_to_token = gql `
mutation getToken($login: String!, $password: String!){
        createToken(email: $login, password: $password){
            token
        }
    }
`

function NotLogged(props){
    const classes = props.classes;
    const handleChange = props.handleChange;
    var  login  = props.login;
    var  password  = props.password;
    return (
        <Grid container direction="column" spacing={10} justify="space-evenly" alignItems="center">
                    <Grid container item direction="column" spacing={2} alignItems="center">
                        <Grid item xs={10}>
                            <Typography className={classes.description1}>
                                Para ter acesso aos laudos é necessária autenticação com uma conta na plataforma MapBiomas
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" item spacing={4} alignItems="center">
                        <Grid item xs={10}>
                            <Typography className={classes.description2}>
                                Insira suas credenciais
                            </Typography>
                        </Grid> 
                        <Grid item xs={10}>
                            <Input className={classes.inputs} placeholder="Email*" onChange={handleChange} id="login"></Input>        
                        </Grid>
                        <Grid item xs={10}>
                            <Input className={classes.inputs} type="password" placeholder="Senha*" onChange={handleChange} id="password"></Input>    
                        </Grid>
                    </Grid>
                    <Grid container item direction="column" spacing={0} alignItems="center">
                        <Grid item xs={10}>
                            <Mutation mutation={credentials_to_token} variables={{login, password}} onCompleted={data => props.auth(data)}>
                                {loginMutation => ( 
                                    <Button className={classes.button} onClick={loginMutation}>
                                        Autenticar
                                    </Button>
                                )}
                            </Mutation>
                            
                        </Grid>
                    </Grid>
                    <Grid container item direction="column" spacing={2} alignItems="center">    
                        <Link className={classes.links} href="https://plataforma.alerta.mapbiomas.org/recuperar-senha">Esqueci minha senha</Link> 
                        <Link className={classes.links} href="https://plataforma.alerta.mapbiomas.org/cadastre-se">Cadastrar-se</Link>                    
                    </Grid>
                </Grid>
    )
}

function Logged(props){
    return(
        <Grid container direction="column" justify="center" spacing={3} style={{height: "100%"}}>
            <Grid item>
                <Typography className={props.classes.loggedIn}>
                    Você está logado!
                </Typography>
            </Grid>
            <Grid item>
                <Typography className={props.classes.loggedInDescription}> 
                    Agora você tem acesso aos laudos do projeto Amazônia Protege. Você pode baixá-los ao lado.
                </Typography>
            </Grid>
        </Grid>
    )    
}

function Notification(props){
    const token = localStorage.getItem(AUTH_TOKEN)
    if (token){
        return <Logged classes={props.styles} ></Logged>
    }
        return <NotLogged classes={props.styles} 
                        handleLogginChange={props.LoginChange} 
                        handleChange={props.authentication}
                        login={props.login} 
                        password={props.password}
                        auth={props.auth}>
                </NotLogged>
}

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            login : "",
            password: "",
        }
    
        this.handleChange = this.handleChange.bind(this)
        this._confirm = this._confirm.bind(this)
        this._saveUserData = this._saveUserData.bind(this)
    }

    handleChange = (event) => {
        if (event.target.id === "login"){
            this.setState({login : event.target.value})
        }
        if (event.target.id === "password"){
            this.setState({password : event.target.value})
        }
    }

    _confirm = async data => {
        this.props.handleLogginChange()
        const { token } = data.createToken
        this._saveUserData(token)
      }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }

    render() {

        const {classes} = this.props;
        return (
            <div className={classes.bar}>
                <Notification 
                logged={this.props.logged}
                styles={classes}
                LoginChange={this.props.handleLogginChange}
                authentication={this.handleChange}
                login={this.state.login}
                password={this.state.password}
                auth={this._confirm}
                />

            </div>
        )
    }

}

    

export default withStyles(loginBar)(Login)