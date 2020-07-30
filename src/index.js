import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache, HttpLink, gql } from "apollo-boost";
import { BrowserRouter } from 'react-router-dom'
import { setContext } from 'apollo-link-context'
import { AUTH_TOKEN } from './constants'

import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core'

const link = new HttpLink({
  uri : "https://plataforma.alerta.mapbiomas.org/api/graphql"

})
const cache = new InMemoryCache()

const authLink = setContext((_, {headers, ...context}) => {
  var token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      ...(token ? {authorization: `Bearer ${token}`} : {}),
    },
    ...context,
  };
}).concat(link)


const mbAPI = new ApolloClient({
  link: authLink,
  cache
})

let theme = createMuiTheme({
  font : {
    fontFamily: "Ropa Sans"
  }
})

ReactDOM.render(
  <ApolloProvider client={mbAPI}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
