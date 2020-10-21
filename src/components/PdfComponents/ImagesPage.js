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

class ImagesPage extends Component {
    render(){
        var dataInfo = new Date()

        const dateBefore = this.props.data.imgBefore_date
        const dateAfter = this.props.data.imgAfter_date

        const nameBefore = this.props.data.imgBefore_name
        const nameAfter = this.props.data.imgAfter_name
        console.log(this.props.dummy.dummy2)
        return(
            <Page size="A4" orientation="landscape" style={styles.page}>
                        <View id="title" style={styles.title} fixed="true">
                            <Text>Laudo referente ao MAPBIOMAS 119038</Text>
                        </View>

                        <View style={styles.rowContainer}>
                            <Text style={[styles.Subcontainer, {fontWeight: 900, fontSize: 13}]}>{dateBefore}</Text>
                            <Text style={[styles.Subcontainer, {fontWeight: 900, fontSize: 13}]}>{dateAfter}</Text>
                        </View>

                        <View style={styles.rowContainer}>
                            <Text style={[styles.Subcontainer, {fontSize: 9}]}>PLANETSCOPE - {nameBefore}</Text>
                            <Text style={[styles.Subcontainer, {fontSize: 9}]}>PLANETSCOPE - {nameAfter}</Text>
                        </View>

                        <View style={styles.rowContainer}>
                            <View style={styles.Subcontainer}>
                                <Image src={this.props.dummy.dummy1} style={styles.image}></Image>
                            </View>
                            <View style={styles.Subcontainer}>
                                <Image src={this.props.dummy.dummy2} style={styles.image}></Image>
                            </View>
                        </View>

                        <View style={{width: "100%", height: "100%", flexDirection:"row"}}>
                            
                            {/*ESPAÇO DAS LEGENDAS*/}
                            <View style={styles.legendContainer}>
                                <View style={[styles.rowContainer, {textAlign: "left"}]}>
                                    <View style={{border: '3', borderColor: "#ff0000", height:"20px", width: "20px", margin: "2px 0px 2px 50px"}}></View>
                                    <Text style={{fontSize: 8, margin: "auto 5px"}}>ÁREA DESMATADA REFINADA A PARTIR DO ALERTA MAPBIOMAS 119038</Text>
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
                            <View style={{width: "50%", flexDirection:"column", margin: "15px 0px", alignItems:"flex-end"}} fixed>
                                <Image src='./' style={{width: "22%" , margin: "35px 25px 5px 0px"}}></Image>
                                <Text style={{width: "22%", fontSize: 9, margin: "0px 25px", textAlign:"center"}}>Criado em</Text>
                                <Text style={{width: "22%", fontSize: 9, margin: "0px 25px", textAlign:"center"}}>{dataInfo.toLocaleDateString()} {dataInfo.toLocaleTimeString()}</Text>
                            </View>

                        </View>
                    </Page>
        )
    }
}

export default ImagesPage