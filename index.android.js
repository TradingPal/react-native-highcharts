/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import ChartView from './App/index.js';
import * as firebase from 'firebase';
//remove
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class chartWebView extends Component {
  constructor(props){
    super(props);
    this.state={
      loading: false,
      conf:{}
    };
  }
  componentWillMount(){
    var optAnnotations=[];
    var dataRef = firebaseApp.database().ref("annotations");
    dataRef.on('value', (snap)=>{
      snap.forEach((child)=>{
        optAnnotations.push(child.val());
      });
      this.setState({loading: true});
    });

    this.setState({conf:{
			"symbol":"AUDCAD",
			"market":"Forex",
			"system":"-KUrkIm_pxcACN_ONuWd",
			"sl":0.96782,
			"tp":0.96957,
			"price":0.968,
			"order_type":"buy",
			"provider":"Forex",
			"notes":{
				"annotations":[{
					"allowDragX":false,
					"allowDragY":true,
					"anchorX":"left",
					"anchorY":"top",
					"selectionMarker":{
						"stroke-width":1,
						"stroke":"black",
						"fill":"transparent",
						"dashstyle":"ShortDash",
						"shape-rendering":"crispEdges"
					},
					"shape":{
						"params":{
							"stroke":"#7F0000",
							"fill":"transparent",
							"stroke-width":2,
							"stroke-dasharray":20,
							"d":["M",0,0,"L",316210.6666666666,0]
						},
						"type":"path"
					},
					"xAxis":0,
					"xValue":1482366420000,
					"xValueEnd":1483115340000,
					"yAxis":0,
					"yValue":0.96782,
					"yValueEnd":0.96782
				},{
					"allowDragX":false,
					"allowDragY":true,
					"anchorX":"left",
					"anchorY":"top",
					"selectionMarker":{
						"stroke-width":1,
						"stroke":"black",
						"fill":"transparent",
						"dashstyle":"ShortDash",
						"shape-rendering":"crispEdges"
					},
					"shape":{
						"params":{
							"stroke":"#66A366",
							"fill":"transparent",
							"stroke-width":2,
							"stroke-dasharray":20,
							"d":["M",0,0,"L",316210.6666666666,0]
						},
						"type":"path"
					},
					"xAxis":0,
					"xValue":1482366420000,
					"xValueEnd":1483115340000,
					"yAxis":0,
					"yValue":0.96957,
					"yValueEnd":0.96957
				},{
					"allowDragX":true,
					"allowDragY":true,
					"anchorX":"left",
					"anchorY":"top",
					"selectionMarker":{
						"stroke-width":1,
						"stroke":"black",
						"fill":"transparent",
						"dashstyle":"ShortDash",
						"shape-rendering":"crispEdges"
					},
					"shape":{
						"params":{
							"stroke":"#7a7a7a",
							"fill":"#7a7a7a",
							"stroke-width":2,
							"d":["M",0,0,"L",378.99999996202246,140.0000000000005]
						},
						"type":"path"
					},
					"xAxis":0,
					"xValue":1483113148421.0527,
					"xValueEnd":1483114046052.6316,
					"yAxis":0,"yValue":0.9692372093023256,
					"yValueEnd":0.9685046511627907
				},{
					"allowDragX":true,
					"allowDragY":true,
					"anchorX":"left",
					"anchorY":"top",
					"selectionMarker":{
						"stroke-width":1,
						"stroke":"black",
						"fill":"transparent",
						"dashstyle":"ShortDash",
						"shape-rendering":"crispEdges"
					},
					"shape":{
						"params":{
							"stroke":"#7a7a7a"
							,"fill":"#7a7a7a",
							"stroke-width":2,
							"d":["M",0,0,"L",400.9999999728733,104.00000000000156]
						},
						"type":"path"
					},
					"xAxis":0,
					"xValue":1483113060789.4736,
					"xValueEnd":1483114010526.3157,
					"yAxis":0,"yValue":0.9687087209302325,
					"yValueEnd":0.9681645348837209
				}],
				"description":"hEJFlkwajfre",
				"strategy":"Análisis técnico",
				"characteristic":70,
				"chart":{
					"from":1483111800,
					"till":1483115340,
					"period":1
				}
			}
		}});
  }
  
  render() {
    if(this.state.loading){
      return (
        <ChartView style={{flex:1}} config={this.state.conf}></ChartView>
      );
    }
    return (
      <ActivityIndicator/>
    );
  }
}
AppRegistry.registerComponent('chartWebView', () => chartWebView);
