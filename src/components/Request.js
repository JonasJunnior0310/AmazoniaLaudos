import React, { Component } from 'react';
import { Font } from '@react-pdf/renderer';
import { Query } from 'react-apollo';
import Structure from './PdfComponents/Structure'
import { request, apiData } from './PdfComponents/Queries'
import parse from 'wellknown'
import { YOUR_CLIENT_ID } from '../constants'

import ee from '@google/earthengine'

import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";

var runAnalysis = function() {
    ee.initialize(null, null, function() {
      // ... run analysis ...
    }, function(e) {
      console.error('Initialization error: ' + e);
    });
  };

const link = new HttpLink({
    uri : "http://localhost:8080/v1/graphql"
  
  })
const cache = new InMemoryCache()  

const hasura = new ApolloClient({
    link: link,
    cache
})

Font.register({
    family: 'Open Sans',
    fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 }
    ]
    });

class PDF extends Component {
    constructor(props){
        super(props)

        this.state = {
            imagesData : {
                imgBefore_date : null,
                imgAfter_date : null,
                imgBefore_name: null,
                imgAfter_name: null,
                imgBefore_url: null,
                imgAfter_url: null,
                dataOn: false
            },
            imagesDataDummies : {
                dummy1: null,
                dummy2: null,
                dataOn: false
            },
            // carData : {
            //     exists: null,
            //     id: null,
            //     ppl: null,
            //     cpf_cnpj: null
            // },
            // sigefRData: {
            //     exists: null,
            //     id: null,
            //     ppl: null,
            //     cpf_cnpj: null
            // },
            // sigefCData: {
            //     exists: null,
            //     id: null,
            //     ppl: null,
            //     cpf_cnpj: null
            // },
            // tlData: {
            //     exists: null,
            //     id: null,
            //     ppl: null,
            //     cpf_cnpj: null
            // },
            // embargoData: {
            //     exists: null,
            //     id: null,
            //     ppl: null,
            //     cpf_cnpj: null
            // },
            // snciData: {
            //     exists: null,
            //     id: null,
            //     ppl: null
            // },
            alertData: {
                area: null,
                geom: null,
                imgBefore_url: null,
                imgAfter_url: null
            }                
        }
    }

    componentDidMount(){    

        ee.data.authenticateViaOauth(YOUR_CLIENT_ID, async () => {
            await ee.initialize()
            var image = new ee.Image('users/jonasImazon/10499');
            this.setState({
                imagesDataDummies : {dummy1 : image.getThumbURL({format: 'png'}),dummy2 : image.getThumbURL({format: 'png'}), dataOn: true}
            })
            ;}
        );

        // ee.data.authenticateViaOauth(YOUR_CLIENT_ID, async () => {
        //     await ee.initialize()
        //     var image = new ee.Image('users/jonasImazon/10499');
        //     this.setState({
        //         imagesDataDummies : {dummy2 : image.getThumbURL({format: 'png'})}
        //     })
        //     ;}
        // );

        

        this.props.client.query({
            query: apiData,
        }).then(res => this.setState({
            alertData : {
                area : res.data.alertReport.areaHa,
                geom : parse(res.data.alertReport.alertGeomWkt),
            }
        }))

        // hasura.watchQuery({
        //     query: request,
        //     variables: {'intersection' : this.state.geom},
        //     pollInterval : 1000
        // }).then(res => console.log(res.data))

        fetch("http://alerta-workspace.mapbiomas.org/api/alerts/119038/images", {
            method: "get",
            headers : new Headers({'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcGJpb21hcy53b3Jrc3BhY2UxMEBnbWFpbC5jb20iLCJpZCI6NSwiaWF0IjoxNjAyNzEyNzk1LCJleHAiOjMxMTA0MDAwMTYwMjcxMjc3MH0.zztW2p61PtCHSDWbfqN5tYcBjWOxPmO1i5XWQO4iOh8'})
        }).then(res => res.json())
        .then(res => this.setState({
            imagesData : {imgBefore_date : res.data.images[0].acquiredAt,
                            imgAfter_date : res.data.images[1].acquiredAt,
                            imgBefore_name: res.data.images[0].name,
                            imgAfter_name: res.data.images[1].name,
                            imgBefore_url: res.data.images[0].geeUrl,
                            imgAfter_url: res.data.images[1].geeUrl,
                            dataOn: true
                        }
        }))
    }

    componentWillUnmount(){
        clearTimeout()
    }

    
    render(){    
        if (this.state.imagesDataDummies.dataOn){
            return (
                <Query query={request} client={hasura}>
                    {
                        ({loading, error, data}) => {
                            if(loading) return <p>Fetching...</p>
                            if(error) return console.log(error)
                            
                            return (
                                <Structure data={this.state.imagesData} dummy={this.state.imagesDataDummies} infos={data} alertInfo={this.state.alertData.area}/>
                            )
                        }
                    }
                    
                </Query>
            )    
        }
        return(
            <p>Fetching data...</p>
        )
    }
}

export default PDF