import React, { Component } from 'react';
import { Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

import ImagesPage from './ImagesPage'
import InfosPage from './InfosPage';
import RefPage from './RefPage'
import DocPage from './DocumentPage'
// Font.register({
//     family: 'Open Sans',
//     fonts: [
//     { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
//     { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 }
//     ]
//     });

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


class Structure extends Component {
    render() {        
        return( 
            <PDFViewer style={styles.represention}>
                <Document>
                    <ImagesPage data={this.props.data} dummy={this.props.dummy}/>
                    <InfosPage data={this.props.infos} area={this.props.alertInfo}/>
                    <RefPage />
                    <DocPage />
                </Document>
            </PDFViewer>              
        )
    }
}

export default Structure