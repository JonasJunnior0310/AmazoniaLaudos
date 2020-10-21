import React, { Component } from 'react'
import { Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    represention: {
        width: "100%",
        height: "100vh"
    },
    page: {
        fontFamily: "Open Sans",
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    title: {
        fontWeight: 900,
        margin: "20px",
        textAlign: "center",
        fontSize: 15
    },
    rowContainer: {
        flexDirection: 'row',
        width: "100%",
        textAlign: "center"
    },
    Subcontainer: {
        flex: 1,
    },
    image: {
        margin: "auto",
        width: "70%"
    },
    legendContainer: {
        width: "50%",
        flexDirection:"column",
        margin: "15px 0px"
    },
});

class RefPage extends Component {
    
    render(){
        return (
            <Page size="A4" orientation="landscape" style={styles.page}>
                        <View id="title" style={styles.title} fixed="true">
                            <Text>Laudo referente ao MAPBIOMAS 119038</Text>
                        </View>
                        <View  style={{flexDirection: "row", height: "70%", padding: "0px 30px"}}>
                            <View  style={{flex: 1, justifyContent: "center", alignContent: "center"}}>
                                <Image src="./30km_ref_2.png"></Image>
                            </View>
                            <View  style={{flexDirection: "column", flex: 1, justifyContent: "center", alignContent: "center"}}>
                                <View  style={{flexDirection: "column", padding: "0px 10px"}}>
                                    <Text style={{fontSize: 12, fontWeight: "bold"}}>
                                        FONTE DE DADOS:
                                    </Text>
                                    <Text style={{fontSize: 8, marginBottom: "5px", fontWeight: "bold", textDecoration: "underline"}}>
                                        Sistema de coordenadas Geodésicas
                                    </Text>
                                    <Text style={{fontSize: 8, marginBottom: "5px"}}>
                                        DATUM Horizontal: SIRGAS-2000 (EPSG: 4674)
                                    </Text>
                                    <Text style={{fontSize: 8, marginBottom: "5px"}}>
                                        Cálculo de área: Projeção Equivalente de Albers (SRORG: 7390)
                                    </Text>
                                    <Text style={{fontSize: 8, marginBottom: "5px"}}>
                                        PRODES: http://www.dpi.inpe.br/prodesdigital/prodes.php
                                        Período: 01-Ago-2017 a 31-Jul-2018
                                        Classe: Desmatamento
                                    </Text>
                                    <Text style={{fontSize: 8, marginBottom: "5px"}}>
                                        IMAGENS ORBITAIS: http://earthexplorer.usgs.gov/
                                    </Text>
                                    <Text style={{fontSize: 8, marginBottom: "5px"}}>
                                        Mapa de Fundo: http://www.gdal.org/frmt_wms.html
                                    </Text>
                                    <Text style={{fontSize: 8, marginBottom: "5px", fontWeight: "bold", textDecoration: "underline"}}>
                                        Fontes de Referência:
                                    </Text>
                                    <Text style={{fontSize: 8, marginBottom: "5px"}}>
                                        CAR: http://www.car.gov.br/publico/imoveis/index
                                    </Text>
                                    <Text style={{fontSize: 8, marginBottom: "5px"}}>
                                        SIGEF e SNCI: http://acervofundiario.incra.gov.br/geodownload/geodados.php
                                    </Text>
                                    <Text style={{fontSize: 8, marginBottom: "5px"}}>
                                        TERRA LEGAL: http://i3geo.mda.gov.br/i3geo/datadownload.htm
                                    </Text>
                                    <Text style={{fontSize: 8, marginBottom: "5px"}}>
                                        Dados de Embargos: http://siscom.ibama.gov.br/geoserver/web
                                    </Text>
                                </View>
                                <View  style={{flexDirection: "column", padding: "0px 10px", paddingTop: "30px"}}>
                                    <Text style={{fontSize: 8, marginBottom: "5px", fontWeight: "bold"}}>
                                        Info: Área desmatada à {'>'} 30km de distância da Unidade de conservação mais proxima
                                    </Text>
                                    <Text style={{fontSize: 8, marginBottom: "5px", fontWeight: "bold"}}>
                                        Info: Área desmatada à {'>'} 30km de distância da Terra Índigena mais proxima
                                    </Text>
                                    <Text style={{fontSize: 8, marginBottom: "5px", fontWeight: "bold"}}>
                                    Info: Área desmatada está dentro da Gleba
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View  style={{flexDirection: "row"}}>
                            <View style={{flexDirection: "column", flex: 1, marginLeft: "60px", marginTop: "10px"}}>
                                <View style={{flexDirection: "row"}}>
                                <View  style={{flexDirection: "row", flex: 1, justifyContent: "flex-start", alignContent: "center"}}>
                                        <View style={{border: '3', borderColor: "#ff0000", height:"20px", width: "20px"}}></View>
                                        <Text style={{fontSize: 8, margin: "auto 5px"}}>Localização do MAPBIOMAS 32</Text>
                                    </View>
                                    <View style={{flexDirection: "row", flex: 1, justifyContent: "flex-start", alignContent: "center"}}>
                                        <View style={{border: '3', borderColor: "#ff0000", height:"20px", width: "20px"}}></View>
                                        <Text style={{fontSize: 8, margin: "auto 5px"}}>Unidade de conservação Federal</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: "row"}}>
                                    <View  style={{flexDirection: "row", flex: 1, justifyContent: "flex-start", alignContent: "center"}}>
                                        <View style={{border: '3', borderColor: "#ff0000", height:"20px", width: "20px"}}></View>
                                        <Text style={{fontSize: 8, margin: "auto 5px"}}>Unidade de Conservação Estadual</Text>
                                    </View>
                                    <View style={{flexDirection: "row", flex: 1, justifyContent: "flex-start", alignContent: "center"}}>
                                        <View style={{border: '3', borderColor: "#ff0000", height:"20px", width: "20px"}}></View>
                                        <Text style={{fontSize: 8, margin: "auto 5px"}}>Terras Indígenas</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: "row"}}>
                                    <View  style={{flexDirection: "row", flex: 1, justifyContent: "flex-start", alignContent: "center"}}>
                                        <View style={{borderBottom: '3', borderColor: "#ff0000", width: "20px", marginBottom: "8px"}}></View>
                                        <Text style={{fontSize: 8, margin: "auto 5px"}}>Limite de estados</Text>
                                    </View>
                                    <View style={{flexDirection: "row", flex: 1, justifyContent: "flex-start", alignContent: "center"}}>
                                        <View style={{borderBottom: '3', borderColor: "#ff0000", width: "20px", marginBottom: "8px"}}></View>
                                        <Text style={{fontSize: 8, margin: "auto 5px"}}>Estradas principais</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: "row"}}>
                                    <View  style={{flexDirection: "row", flex: 1, justifyContent: "flex-start", alignContent: "center"}}>
                                        <View style={{borderBottom: '3', borderColor: "#ff0000", width: "20px", marginBottom: "8px"}}></View>
                                        <Text style={{fontSize: 8, margin: "auto 5px"}}>Drenagem</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flexDirection: "column", flex: 1, justifyContent: "flex-end", alignItems: "flex-end"}}>
                                <Image src="./" style={{width: "20%", margin: "50px 20px 0px 0px"}}></Image>
                            </View>
                        </View>
                    </Page>
        )
    }
}

export default RefPage