import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { setContext } from 'apollo-link-context'

import wkx from 'wkx'

const link = new HttpLink({
    uri : "http://localhost:8080/v1/graphql"
  
  })
const cache = new InMemoryCache()
  
const hasuraAPI = new ApolloClient({
link: link,
cache
})

function Car(){
    const carInfo = gql`
    {
        car (limit: 1){
            cod_imovel
            dados_ca29
            dados_ca28
        }
    }
    `
    return (
        <Query query={carInfo} client={hasuraAPI}>
            {({loading, error, data}) => {

                if(loading) return "Carregando..."
                if(error) return 0
                
                return (
                    <div>
                    <p>{data.car.cod_imovel}</p>
                    <p>{data.car.dados_ca29}</p>
                    <p>{data.car.dados_ca28}</p>
                    </div>
                )
            }}
        </Query>
    )
    // ID: "COD_IMOVEL",
    // names: "dados_ca29",
    // cpf_cnpj: "dados_ca28"
}

function csigef(){
    const csigefInfo = gql`{

    }`
    // ID: "codigo_imo",
    // names: "detentor_n",
    // cpf_cnpj : "detentor_c"
}

function rsigef(){
    const rsigefInfos = `{

    }`
    // ID: "codigo_imo",
    // names: "detentor_n",
    // cpf_cnpj : "detentor_c"
}

function tl(){
    const tlInfos = gql`{

    }`
    // ID: "identifica",
    // names: "nome_deten",
    // cpf_cnpj: "cpf_detent"
}

function embargo(){
    const embargoInfos = gql`{

    }`
    // ID : "numero_tad",
    // names: "nom_pessoa",
    // cpf_cnpj : "cpf_cnpj_i"
}

function snci(){
    const snciInfos = gql`{

    }`
    // ID: "codigo_imo",
    // names: "nome_inter",
}

function imageInfos(){
    const imgInfos = gql`{

    }`
}

function AlertInfos(){
    const alertInfo = gql`{
        alertReport(alertId: 119038){
            areaHa
            alertGeomWkt
        }
    }
    `
    return (
        <Query query={alertInfo}>
            {({loading, error, data}) => {

                if(loading) return "Carregando..."
                if(error) return 0

                // var geom = wkx.Geometry.parse(data.alertReport.alertGeomWkt).toGeoJSON()
                var area = data.alertReport.areaHa

                // this.setState({
                //     alertGeo : JSON.stringify(geom)
                // })

                return (
                    <h1>{area}</h1>
                )
            }}
        </Query>
    )
}

class Test extends Component {

    constructor(props){
        super(props)

        this.state = {
            alertGeo : null
        }
    }

    render(){    
        return(
            <div>
                <AlertInfos></AlertInfos>
                <Car></Car>
            </div>
        )

    }
}

export default Test