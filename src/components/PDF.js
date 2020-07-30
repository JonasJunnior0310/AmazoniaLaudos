import React, { Component } from 'react';
import { PDFViewer } from '@react-pdf/renderer'
import { Page, Text, View, Document, StyleSheet, Image, Font, Canvas } from '@react-pdf/renderer';

Font.register({
    family: 'Open Sans',
    fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 }
    ]
    });

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

class PDF extends Component {

    render(){        
        var dataInfo = new Date()

        return(
            <PDFViewer style={styles.represention}>
                <Document>
                    <Page size="A4" orientation="landscape" style={styles.page}>
                        <View id="title" style={styles.title} fixed="true">
                            <Text>Laudo referente ao MAPBIOMAS {this.props.alertNumber}</Text>
                        </View>

                        <View style={styles.rowContainer}>
                            <Text style={[styles.Subcontainer, {fontWeight: 900, fontSize: 13}]}>15/06/2016 - 12:42:13</Text>
                            <Text style={[styles.Subcontainer, {fontWeight: 900, fontSize: 13}]}>20/07/2019 - 13:43:32</Text>
                        </View>

                        <View style={styles.rowContainer}>
                            <Text style={[styles.Subcontainer, {fontSize: 9}]}>SENTINEL - S2A_MSIL1C_20160615T134212_N0204_R124_T22MHA_20160615T134213</Text>
                            <Text style={[styles.Subcontainer, {fontSize: 9}]}>SENTINEL - S2A_MSIL1C_20190720T134221_N0208_R124_T22MHA_20190720T200722</Text>
                        </View>

                        <View style={styles.rowContainer}>
                            <View style={styles.Subcontainer}>
                                <Image src="./Antes_0.png" style={styles.image}></Image>
                            </View>
                            <View style={styles.Subcontainer}>
                                <Image src="./Depois_1.png" style={styles.image}></Image>
                            </View>
                        </View>

                        <View style={{width: "100%", height: "100%", flexDirection:"row"}}>
                            
                            {/*ESPAÇO DAS LEGENDAS*/}
                            <View style={styles.legendContainer}>
                                <View style={[styles.rowContainer, {textAlign: "left"}]}>
                                    <View style={{border: '3', borderColor: "#ff0000", height:"20px", width: "20px", margin: "2px 0px 2px 50px"}}></View>
                                    <Text style={{fontSize: 8, margin: "auto 5px"}}>ÁREA DESMATADA REFINADA A PARTIR DO ALERTA MAPBIOMAS-32</Text>
                                </View>
                                <View style={[styles.rowContainer, {textAlign: "left"}]}>
                                    <View style={{border: '3', borderColor: "#00ffff", height:"20px", width: "20px", margin: "2px 0px 2px 50px"}}></View>
                                    <Text style={{fontSize: 8, margin: "auto 5px"}}>CAR</Text>
                                </View>
                                <View style={[styles.rowContainer, {textAlign: "left"}]}>
                                    <View style={{border: '3', borderColor: "#f781bf", height:"20px", width: "20px", margin: "2px 0px 2px 50px"}}></View>
                                    <Text style={{fontSize: 8, margin: "auto 5px"}}>SIGEF</Text>
                                </View>
                            </View>

                            {/*ESPAÇO DA LOGO E DATA*/}
                            <View style={{width: "50%", flexDirection:"column", margin: "15px 0px", alignItems:"flex-end"}}>
                                <Image src='./mpf.png' style={{width: "22%" , margin: "35px 25px 5px 0px"}}></Image>
                                <Text style={{width: "22%", fontSize: 9, margin: "0px 25px", textAlign:"center"}}>Criado em</Text>
                                <Text style={{width: "22%", fontSize: 9, margin: "0px 25px", textAlign:"center"}}>{dataInfo.toLocaleDateString()} {dataInfo.toLocaleTimeString()}</Text>
                            </View>

                        </View>
                    </Page>

                    {/* <Page size="A4" orientation="landscape" style={styles.page}>
                        <View id="title" style={styles.title} fixed="true">
                            <Text style={{fontSize: 15}}>Laudo referente ao MAPBIOMAS 32</Text>
                        </View>
                        <View id="infoTable" style={{ flexDirection: "column", margin: "20px auto"}}>
                            <View id="infoItem" style={{flexDirection: "column", width: "100%", textAlign: "center"}}>
                                <Text style={{fontWeight: 900, fontSize: 14, backgroundColor: "#909090", border: 1, padding: "5px"}}>ÁREA DESMATADA</Text>
                                <View id="info" style={{flexDirection: "row", textAlign: "center"}}>
                                    <Text style={{fontSize: 12, border: 1, flex: 1}}>81.0 ha</Text>
                                </View>
                            </View>
                            <View id="infoItem" style={{flexDirection: "column", width: "100%", textAlign: "center"}}>
                                <Text style={{fontWeight: "bold", fontSize: 14, backgroundColor: "#909090", border: 1, padding: "5px"}}>SIGEF</Text>
                                <View id="info" style={{flexDirection: "column", textAlign: "center"}}>
                                    <View style={{flexDirection: "row", textAlign: "center"}}>

                                        <View style={{flex: 1, border: 1, justifyContent: "center"}}>
                                            <Text style={{fontSize: 20}}>Nº SIGEF: 511101028490</Text>
                                        </View>

                                        <View style={{flexDirection: "column", textAlign: "center", flex: 1}}>

                                            <View style={{flexDirection: "row", alignItems:"center", justifyContent: "center"}}>
                                                <Text style={{fontWeight: "bold", fontSize: 12, border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                                    RESPONSÁVEL
                                                </Text>
                                                <Text style={{fontSize: 12, border: 1, border: 1, flex: 1, padding: "5px 1px"}}>ANGELINO ARAÚJO DA SILVA </Text>
                                            </View>

                                            <View style={{flexDirection: "row", justifyContent: "center"}}>
                                                <Text style={{fontWeight: "bold", fontSize: 12, height: "100%", border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                                    CPF/CNPJ
                                                </Text>
                                                <Text style={{fontSize: 12, border: 1, height: "100%", border: 1, flex: 1, padding: "5px 1px"}}>6116809987</Text>                                                
                                            </View>

                                            <View style={{flexDirection: "row", justifyContent: "center"}}>
                                                <Text style={{fontWeight: "bold", fontSize: 12, height: "100%", border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                                    ÁREA (ha)
                                                </Text>
                                                <Text style={{fontSize: 12, border: 1, height: "100%", border: 1, flex: 1, padding: "5px 1px"}}>46.0</Text>
                                            </View>

                                            <View style={{flexDirection: "row", justifyContent: "center"}}>
                                                <Text style={{fontWeight: "bold", height: "100%", fontSize: 12, border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                                    ÁREA (%)
                                                </Text>
                                                <Text style={{fontSize: 12, border: 1, height: "100%", border: 1, flex: 1, padding: "5px 1px"}}>57.0%</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Page>
                    <Page size="A4" orientation="landscape" style={styles.page}>
                        <View id="title" style={styles.title} fixed="true">
                            <Text>Laudo referente ao MAPBIOMAS 32</Text>
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
                                <Image src="./mpf2.png" style={{width: "20%", margin: "50px 20px 0px 0px"}}></Image>
                            </View>
                        </View>
                    </Page>
                    <Page size="A4" orientation="portrait" style={[styles.page, {alignItems: "center"}]} >
                        <View id="title" style={[styles.title, {width: "80%", flexDirection: "row", borderBottom: 2, alignItems: "center"}]} fixed="true">
                            <Image src="./mpf2.png" style={{width: "20%"}}></Image>
                            <Text style={{width: "100%", position: "absolute"}}>Laudo referente ao MAPBIOMAS 32</Text>
                        </View>
                        <View style={[styles.title, {width: "80%", fontSize: 10,flexDirection: "column", height: "100%", alignItems: "center"}]}>
                            <Text style={{fontSize: 12, width: "100%", textAlign: "justify", marginBottom: "5px"}}>
                                Metodologia Utilizada
                            </Text>
                            <Text style={{width: "100%", textAlign: "justify", marginBottom: "10px"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at nunc purus. Curabitur sit amet magna non tellus mollis interdum.
                                Aenean convallis libero venenatis felis bibendum consequat. Phasellus vehicula ipsum vel arcu vulputate malesuada.
                                Proin ultrices massa mi, nec egestas turpis lacinia et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer pretium sollicitudin mollis. Phasellus vestibulum nisl non consectetur malesuada. Mauris consectetur eu enim in lacinia.
                                Vestibulum eu fermentum sem, ac maximus risus.
                            </Text>
                            <Text style={{width: "100%", textAlign: "justify", marginBottom: "10px"}}>
                                Praesent ornare vitae ante sed condimentum.
                                Aliquam eu orci sollicitudin, vestibulum ante sed, feugiat neque. Suspendisse eu viverra mi.
                                Phasellus egestas imperdiet quam sit amet vehicula. Pellentesque sed ligula vel nisl porttitor mattis consequat in tortor.
                                Ut nec justo tincidunt, euismod elit vitae, tincidunt arcu.
                                Nullam sollicitudin sodales risus. Donec efficitur maximus odio, eu sodales nunc. Aliquam nec nulla lectus.
                                Morbi id vehicula nibh. Vivamus rhoncus nibh vel blandit suscipit.
                            </Text>
                            <Text style={{width: "100%", textAlign: "justify", marginBottom: "10px"}}>
                                Donec vitae tempus felis. Curabitur elementum ipsum in leo congue elementum. Aenean aliquam, orci eu interdum rhoncus, purus orci lacinia felis, sed fermentum felis dolor vitae metus.
                                Integer felis mauris, varius quis nibh eget, scelerisque feugiat lorem.
                                Aliquam id odio malesuada, scelerisque turpis in, sodales nunc.
                                Quisque porttitor odio gravida consequat fermentum.
                                Etiam eu magna sed turpis placerat maximus. In pharetra rutrum malesuada.
                            </Text>
                            <Text style={{width: "100%", textAlign: "justify", marginBottom: "10px"}}>
                                Nam sed tortor quam. Vestibulum dictum tellus nec lorem dignissim, blandit mollis quam pretium.
                                Donec lacinia mollis cursus. Donec mi arcu, pellentesque in velit id, mollis suscipit lacus.
                                Aenean urna sem, pulvinar at justo in, consequat vestibulum magna.
                                Fusce id risus in nibh pharetra sollicitudin. Ut quis porta augue.
                                Phasellus non eleifend sapien.
                            </Text>
                            <Text style={{width: "100%", textAlign: "justify", marginBottom: "10px"}}>
                                Morbi tincidunt ante ac diam faucibus euismod.
                                Suspendisse id diam ligula. Integer quis ornare erat.
                                Aliquam id sapien eleifend, iaculis neque ut, mattis metus.
                                Donec nisi neque, laoreet quis massa at, convallis porta sem. Mauris sit amet faucibus ipsum.
                                Curabitur at nisl nulla. In luctus cursus urna, id convallis diam euismod a.
                                Proin laoreet fringilla eleifend. Phasellus lacinia a tortor ac dignissim.
                                Integer mattis fermentum nunc non pharetra. Praesent non rutrum augue. 
                                Morbi bibendum purus sit amet lacus venenatis sollicitudin.
                                Proin sodales justo nunc, eget mollis velit elementum sit amet. Sed a felis nisl.
                            </Text>
                        </View>
                    </Page> */}
                </Document>
            </PDFViewer>
        )
    }
}

export default PDF