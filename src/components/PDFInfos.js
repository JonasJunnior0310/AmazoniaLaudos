import React, { Component } from 'react'


// function car(){
//     ID: "COD_IMOVEL",
//     names: "dados_ca29",
//     cpf_cnpj: "dados_ca28"
// // }

// // function sigef(){
//     ID: "codigo_imo",
//     names: "detentor_n",
//     cpf_cnpj : "detentor_c"
// // }

// // function rsigef(){
//     ID: "codigo_imo",
//     names: "detentor_n",
//     cpf_cnpj : "detentor_c"
// // }

// // function tl(){
//     ID: "identifica",
//     names: "nome_deten",
//     cpf_cnpj: "cpf_detent"
// // }

// // function embargo(){
//     ID : "numero_tad",
//     names: "nom_pessoa",
//     cpf_cnpj : "cpf_cnpj_i"
// // }

// // function snci(){
//     ID: "codigo_imo",
//     names: "nome_inter",
// // }

class INFOS extends Component {
    constructor(props){
        super(props)

        this.state = {
            car: false,
            sigef: false,
            sigefr: false,
            embargo: false,
            tl: false,
            snci: false
        }
    }

    render(){
        return (
        <h1>{this.props.test}</h1>
            // <Page size="A4" orientation="landscape" style={styles.page}>
            //     <View id="title" style={styles.title} fixed="true">
            //         <Text style={{fontSize: 15}}>Laudo referente ao MAPBIOMAS 32</Text>
            //     </View>
            //     <View id="infoTable" style={{ flexDirection: "column", margin: "20px auto"}}>
            //         <View id="infoItem" style={{flexDirection: "column", width: "100%", textAlign: "center"}}>
            //             <Text style={{fontWeight: 900, fontSize: 14, backgroundColor: "#909090", border: 1, padding: "5px"}}>ÁREA DESMATADA</Text>
            //             <View id="info" style={{flexDirection: "row", textAlign: "center"}}>
            //             <Text style={{fontSize: 12, border: 1, flex: 1}}>81.0 ha</Text>
            //             </View>
            //         </View>
            //     </View>
            // </Page>
        )
    }
}

export default INFOS