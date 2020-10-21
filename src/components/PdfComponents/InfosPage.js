import React, { Component } from 'react'
import { Page, Text, View, StyleSheet} from '@react-pdf/renderer';

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
    rowItensTitleTitle: {
        height: "100%",
        fontWeight: "bold",
        fontSize: 12,
        border: 1,
        flex: 1,
        backgroundColor: "#cdcdcd",
        padding: "5px 1px"
    }
});

function Car(data){
    return(
        <View id="infoItem" style={{flexDirection: "column", width: "100%", textAlign: "center"}}>
                <Text style={{fontWeight: "bold", fontSize: 14, backgroundColor: "#909090", border: 1, padding: "5px"}}>CAR</Text>
                {data.data.map(infos =>
                    <View key={"Car_" + infos.cod_imovel} id="info" style={{flexDirection: "column", textAlign: "center"}} wrap={false}>
                        <View style={{flexDirection: "row", textAlign: "center"}}>

                            <View style={{flex: 1, border: 1, justifyContent: "center"}}>
                                <Text style={{fontSize: 15}}>Nº CAR: {infos.cod_imovel}</Text>
                            </View>

                            <View style={{flexDirection: "column", textAlign: "center", flex: 1}}>

                                <View style={{flexDirection: "row", alignItems:"center", justifyContent: "center"}}>
                                    <Text style={{fontWeight: "bold", fontSize: 12, border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                        RESPONSÁVEL
                                    </Text>
                                    <Text style={{fontSize: 12, border: 1, border: 1, flex: 1, padding: "5px 1px"}}>{infos.dados_ca29}</Text>
                                </View>

                                <View style={{flexDirection: "row", justifyContent: "center"}}>
                                    <Text style={{fontWeight: "bold", fontSize: 12, height: "100%", border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                        CPF/CNPJ
                                    </Text>
                                    <Text style={{fontSize: 12, border: 1, height: "100%", border: 1, flex: 1, padding: "5px 1px"}}>{infos.dados_ca28}</Text>                                                
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
                )}
            </View>
    )
}

function SigefC(data){
    console.log(data)
    return(
        <View id="infoItem" style={{flexDirection: "column", width: "100%", textAlign: "center"}}>
                <Text style={{fontWeight: "bold", fontSize: 14, backgroundColor: "#909090", border: 1, padding: "5px"}}>SIGEF</Text>
                {data.data.map(infos =>
                    <View key={"SigefC" + infos.codigo_imo} id="info" style={{flexDirection: "column", textAlign: "center"}} wrap={false}>
                        <View style={{flexDirection: "row", textAlign: "center"}}>

                            <View style={{flex: 1, border: 1, justifyContent: "center"}}>
                                <Text style={{fontSize: 15}}>Nº SIGEF: {infos.codigo_imo}</Text>
                            </View>

                            <View style={{flexDirection: "column", textAlign: "center", flex: 1}}>

                                <View style={{flexDirection: "row", alignItems:"center", justifyContent: "center"}}>
                                    <Text style={{fontWeight: "bold", fontSize: 12, border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                        RESPONSÁVEL
                                    </Text>
                                    <Text style={{fontSize: 12, border: 1, border: 1, flex: 1, padding: "5px 1px"}}>{infos.detentor_n}</Text>
                                </View>

                                <View style={{flexDirection: "row", justifyContent: "center"}}>
                                    <Text style={{fontWeight: "bold", fontSize: 12, height: "100%", border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                        CPF/CNPJ
                                    </Text>
                                    <Text style={{fontSize: 12, border: 1, height: "100%", border: 1, flex: 1, padding: "5px 1px"}}>None</Text>                                                
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
                )}
            </View>
    )
}

function SigefR(data){
    return(
        <View id="infoItem" style={{flexDirection: "column", width: "100%", textAlign: "center"}} >
                <Text style={{fontWeight: "bold", fontSize: 14, backgroundColor: "#909090", border: 1, padding: "5px"}}>REGULARIZAÇÃO SIGEF</Text>
                {data.data.map(infos =>
                    <View key={"SigefR" + infos.codigo_imo} id="info" style={{flexDirection: "column", textAlign: "center"}} wrap={false}>
                        <View style={{flexDirection: "row", textAlign: "center"}}>

                            <View style={{flex: 1, border: 1, justifyContent: "center"}}>
                                <Text style={{fontSize: 15}}>Nº R. SIGEF: {infos.codigo_imo}</Text>
                            </View>

                            <View style={{flexDirection: "column", textAlign: "center", flex: 1}}>

                                <View style={{flexDirection: "row", alignItems:"center", justifyContent: "center"}}>
                                    <Text style={{fontWeight: "bold", fontSize: 12, height: "100%", border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                        RESPONSÁVEL
                                    </Text>
                                    <Text style={{fontSize: 12, border: 1, border: 1, flex: 1, padding: "5px 1px"}}>{infos.detentor_n}</Text>
                                </View>

                                <View style={{flexDirection: "row", justifyContent: "center"}}>
                                    <Text style={{fontWeight: "bold", fontSize: 12, height: "100%", border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                        CPF/CNPJ
                                    </Text>
                                    <Text style={{fontSize: 12, border: 1, height: "100%", border: 1, flex: 1, padding: "5px 1px"}}>None</Text>                                                
                                </View>

                                <View style={{flexDirection: "row", justifyContent: "center"}}>
                                    <Text style={{fontWeight: "bold", fontSize: 12, height: "100%", border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                        ÁREA (ha)
                                    </Text>
                                    <Text style={{fontSize: 12, border: 1, height: "100%", border: 1, flex: 1, padding: "5px 1px"}}>46.0</Text>
                                </View>

                                <View style={{flexDirection: "row", justifyContent: "center"}}>
                                    <Text style={{fontWeight: "bold", fontSize: 12, height: "100%", border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                        ÁREA (%)
                                    </Text>
                                    <Text style={{fontSize: 12, border: 1, height: "100%", border: 1, flex: 1, padding: "5px 1px"}}>57.0%</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            </View>
    )
}

function Embargo(data){
    return(
        <View id="infoItem" style={{flexDirection: "column", width: "100%", textAlign: "center"}}>
                <Text style={{fontWeight: "bold", fontSize: 14, backgroundColor: "#909090", border: 1, padding: "5px"}}>EMBARGO</Text>
                {data.data.map(infos =>
                    <View key={"Embargo_" + infos.codigo_imo} id="info" style={{flexDirection: "column", textAlign: "center"}} wrap={false}>
                        <View style={{flexDirection: "row", textAlign: "center"}}>

                            <View style={{flex: 1, border: 1, justifyContent: "center"}}>
                                <Text style={{fontSize: 15}}>Nº EMBARGO: {infos.codigo_imo}</Text>
                            </View>

                            <View style={{flexDirection: "column", textAlign: "center", flex: 1}}>

                                <View style={{flexDirection: "row", alignItems:"center", justifyContent: "center"}}>
                                    <Text style={{fontWeight: "bold", fontSize: 12, border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                        RESPONSÁVEL
                                    </Text>
                                    <Text style={{fontSize: 12, border: 1, border: 1, flex: 1, padding: "5px 1px"}}>{infos.nom_pessoa}</Text>
                                </View>

                                <View style={{flexDirection: "row", justifyContent: "center"}}>
                                    <Text style={{fontWeight: "bold", fontSize: 12, height: "100%", border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                        CPF/CNPJ
                                    </Text>
                                    <Text style={{fontSize: 12, border: 1, height: "100%", border: 1, flex: 1, padding: "5px 1px"}}>{infos.cpf_cnpj_i}</Text>                                                
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
                )}
            </View>
    )
}

function Snci(data){
    return(
        <View id="infoItem" style={{flexDirection: "column", width: "100%", textAlign: "center"}}>
                <Text style={{fontWeight: "bold", fontSize: 14, backgroundColor: "#909090", border: 1, padding: "5px"}}>SNCI</Text>
                {data.data.map(infos =>
                    <View key={"Snci_" + infos.codigo_imo} id="info" style={{flexDirection: "column", textAlign: "center"}} wrap={false}>
                        <View style={{flexDirection: "row", textAlign: "center"}}>

                            <View style={{flex: 1, border: 1, justifyContent: "center"}}>
                                <Text style={{fontSize: 15}}>Nº SNCI: {infos.codigo_imo}</Text>
                            </View>

                            <View style={{flexDirection: "column", textAlign: "center", flex: 1}}>

                                <View style={{flexDirection: "row", alignItems:"center", justifyContent: "center"}}>
                                    <Text style={{fontWeight: "bold", fontSize: 12, border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                        RESPONSÁVEL
                                    </Text>
                                    <Text style={{fontSize: 12, border: 1, border: 1, flex: 1, padding: "5px 1px"}}>{infos.nome_inter}</Text>
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
                )}
            </View>
    )
}

function Tl(data){
    return(
        <View id="infoItem" style={{flexDirection: "column", width: "100%", textAlign: "center"}}>
                <Text style={{fontWeight: "bold", fontSize: 14, backgroundColor: "#909090", border: 1, padding: "5px"}}>TERRAS LEGAIS</Text>
                {data.data.map(infos =>
                    <View key={"Tl_" + infos.identifica} id="info" style={{flexDirection: "column", textAlign: "center"}} wrap={false}>
                        <View style={{flexDirection: "row", textAlign: "center"}}>

                            <View style={{flex: 1, border: 1, justifyContent: "center"}}>
                                <Text style={{fontSize: 15}}>Nº TERRAS LEGAIS: {infos.identifica}</Text>
                            </View>

                            <View style={{flexDirection: "column", textAlign: "center", flex: 1}}>

                                <View style={{flexDirection: "row", alignItems:"center", justifyContent: "center"}}>
                                    <Text style={{fontWeight: "bold", fontSize: 12, border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                        RESPONSÁVEL
                                    </Text>
                                    <Text style={{fontSize: 12, border: 1, border: 1, flex: 1, padding: "5px 1px"}}>{infos.nome_deten}</Text>
                                </View>

                                <View style={{flexDirection: "row", justifyContent: "center"}}>
                                    <Text style={{fontWeight: "bold", fontSize: 12, height: "100%", border: 1, flex: 1, backgroundColor: "#cdcdcd", padding: "5px 1px"}}>
                                        CPF/CNPJ
                                    </Text>
                                    <Text style={{fontSize: 12, border: 1, height: "100%", border: 1, flex: 1, padding: "5px 1px"}}>{infos.cpf_detent}</Text>                                                
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
                )}
            </View>
    )
}


class InfosPage extends Component {
    
    render(){
        const car = this.props.data.car
        const sigef_c = this.props.data.sigef_c
        const sigef_r = this.props.data.sigef_r
        const embargo = this.props.data.embargo
        const tl = this.props.data.tl
        const snci = this.props.data.snci
        return (
            <Page size="A4" orientation="landscape" style={styles.page}>
                <View id="title" style={styles.title} fixed="true">
                    <Text style={{fontSize: 15}}>Laudo referente ao MAPBIOMAS 119038</Text>
                </View>
                <View id="infoTable" style={{ flexDirection: "column", margin: "20px auto"}}>
                    <View id="infoItem" style={{flexDirection: "column", width: "100%", textAlign: "center"}}>
                        <Text style={{fontWeight: 900, fontSize: 14, backgroundColor: "#909090", border: 1, padding: "5px"}}>ÁREA DESMATADA</Text>
                        <View id="info" style={{flexDirection: "row", textAlign: "center"}}>
                            <Text style={{fontSize: 12, border: 1, flex: 1}}>{this.props.area} ha</Text>
                        </View>
                    </View>
                    <Car data={car}/>
                    <SigefC data={sigef_c}/>
                    <SigefR data={sigef_r}/>
                    <Embargo data={embargo}/>
                    <Snci data={snci}/>
                    <Tl data={tl} />
                </View>
            </Page>
        )
    }
}

export default InfosPage