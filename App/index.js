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
const Highcharts='Highcharts';

class ChartView extends Component {

    static defaultProps = {
        config: {
            chart: {
                type: "spline",
                animation: Highcharts.svg, // don"t animate in old IE
                marginRight: 10,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: "Live random data"
            },
            xAxis: {
                type: "datetime",
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: "Value"
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: "#808080"
                }]
            },
            tooltip: {
                formatter: function () {
                    return "<b>" + this.series.name + "</b><br/>" +
                        Highcharts.dateFormat("%Y-%m-%d %H:%M:%S", this.x) + "<br/>" +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: "Random data",
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                } ())
            }]
        }
    };

    constructor(props){
        super(props);
        this.state={
            init:`<html>
                    <style media="screen" type="text/css">
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
                    <head>
                        <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
                        <script src="https://code.highcharts.com/highcharts.js"></script>
                        <script src="https://code.highcharts.com/modules/exporting.js"></script>
                        <script>
                        $(function () {
                            Highcharts.chart('container', `,
            end:`           );
                        });
                        </script>
                    </head>
                    <body>
                        <div id="container">
                        </div>
                    </body>
                </html>`,
            Wlayout:{
                height:win.height,
                width:win.width
            }
        }
    }

    re_renderWebView(e) {//re_render is used to resize on orientation of display
        this.setState({
            Wlayout: {
                height: e.nativeEvent.layout.height,
                width: e.nativeEvent.layout.width,
            }
        })
    }

    render() {
        var config = JSON.stringify(this.props.config, function (key, value) {//create string of json but if it detects function it uses toString()
            return (typeof value === 'function') ? value.toString() : value;
        });

        config = config.replace(/\\n/g, " ");//remove \n in string = ""
        config = config.replace(/\"([^(\")"]+)\":/g, "$1: ");//remove {"chart":"chart"} = {chart:"chart"}
        config = config.replace(/\"function/g, "function");//remove {chart:"function ...} = {chart:function ...}
        config = config.replace(/}\"/g, "}");//remove {chart:function(){}"} = {chart:function(){}} 
        var concatHTML = this.state.init + config + this.state.end;
        return (
            <View style={this.props.style}>
                <WebView
                    onLayout={this.re_renderWebView}
                    style={styles.full}
                    source={{ html: concatHTML, baseUrl: 'web/' }}
                    javaScriptEnabled={true}
                />
            </View>
        );
    };
};

var styles = StyleSheet.create({
    full: {
        flex: 1,
    }
});

module.exports = ChartView;