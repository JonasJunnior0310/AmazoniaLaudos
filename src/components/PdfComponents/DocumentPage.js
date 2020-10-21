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

class DocPage extends Component {
    
    render(){
        return (
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
                    </Page>
        )
    }
}

export default DocPage