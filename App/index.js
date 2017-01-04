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
const data='data';
class ChartView extends Component {


    static defaultProps = {
       
	  config:{
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE 
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
                text: 'Live random data'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
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
                name: 'Random data',
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
                }())
            }]
        }
    };

    constructor(props){
        super(props);
        this.state={
            init:`<html>
                    <head>
                        <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
                        <script src="http://code.highcharts.com/stock/highstock.js"></script>
                        <script src="http://code.highcharts.com/stock/modules/exporting.js"></script>
						
                        <script>
                        $(function () {
                                Highcharts.stockChart('container', `,
            end:`               );
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
			
			if(key == "annotations"){
				//return JSON.stringify(value);
				//console.log(value);
				return JSON.stringify(value);
			}
			if(typeof value === 'function'){
				return value.toString();
			}

			return value;
            //return (typeof value === 'function') ? value.toString() : value;
        });
		
        config = config.replace(/\\n/g, " "); //remove \n in string = ""
        config = config.replace(/\"([^(\")"]+)\":/g, "$1: "); //remove {"chart":"chart"} = {chart:"chart"}
        config = config.replace(/\"function/g, "function"); //remove {chart:"function ...} = {chart:function ...}
        config = config.replace(/}\"/g, "}"); //remove {chart:function(){}"} = {chart:function(){}} 
        config = config.replace("\"data\"","data"); //data to show "data" = data 
        config = config.replace(/stroke-width/g,"\'stroke-width\'"); //used for annotations stroke-width = 'stroke-width'
	config = config.replace(/stroke-dasharray/g,"\'stroke-dasharray\'"); //used for annotations stroke-dasharray = 'stroke-dasharray'
	config = config.replace(/shape-rendering/g,"\'shape-rendering\'"); //used for annotations shape-rendering = 'shape-rendering'
	config = config.replace(/\\/g,''); //replace /allow/: = allow:
	config = config.replace(/\"\[\{/g,'[{'); //replace annotationc "[{ = [{
	config = config.replace(/\}\]\"/g,'}]'); //replace }]" = }]
        var concatHTML = this.state.init + config + this.state.end;
		//console.log(config);
		console.log(concatHTML);
        return (
            <View style={this.props.style}>
                <WebView
                    onLayout={this.re_renderWebView}
                    style={styles.full}
                    source={{ html: concatHTML, baseUrl:"/web"}}
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
