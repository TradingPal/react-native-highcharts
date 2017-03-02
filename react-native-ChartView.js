import React, { Component, PropTypes, } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
    Image,
    Dimensions
} from 'react-native';

const win = Dimensions.get('window');

let init = `<html>
        <head>
            <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
            <style media="screen" type="text/css">
                html, body {
                    margin: 0,
                    padding: 0,
                    width: 100%;
                    height: 100%;
                }

                #container {
                    width:100%;
                    height:100%;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                    position:absolute;
                }
            </style>
        </head>
        <body>
            <div id="container"></div>
            <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
            <script src="https://code.highcharts.com/highcharts.js"></script>
            <script src="https://code.highcharts.com/modules/exporting.js"></script>
            <script>
                var chart = Highcharts.chart('container', `,
let end =  `    );

                chart.reflow();

                setTimeout(function() {chart.reflow()}, 0);
                setTimeout(function() {chart.reflow()}, 100);
            </script>
        </body>
    </html>`,

class ChartWeb extends Component {
    constructor(props){
        super(props);

        this.state = {
            height: win.height,
            width: win.width,
        }
    }

    // used to resize on orientation of display
    reRenderWebView(e) {
        this.setState({
            height: e.nativeEvent.layout.height,
            width: e.nativeEvent.layout.width,
        })
    }

    render() {
        let config = JSON.stringify(this.props.config, function (key, value) {//create string of json but if it detects function it uses toString()
            return (typeof value === 'function') ? value.toString() : value;
        });

        config = config.replace(/\\n/g, " ");//remove \n in string = ""
        config = config.replace(/\"([^(\")"]+)\":/g, "$1: ");//remove {"chart":"chart"} = {chart:"chart"}
        config = config.replace(/\"function/g, "function");//remove {chart:"function ...} = {chart:function ...}
        config = config.replace(/}\"/g, "}");//remove {chart:function(){}"} = {chart:function(){}} 
        
        let concatHTML = `${init}${config}${end}`;

        return (
            <WebView
                onLayout={this.reRenderWebView}
                style={[styles.full, this.props.style]}
                source={{ html: concatHTML, baseUrl: 'web/' }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                scalesPageToFit={false}
                scrollEnabled={false}
                automaticallyAdjustContentInsets={false}
            />
        );
    };
};

var styles = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: "transparent"
    }
});

module.exports = ChartWeb;
