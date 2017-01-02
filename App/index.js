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
const testAnnotations = [{
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
					"yAxis":0,
					"yValue":0.9692372093023256,
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
					"yAxis":0,
					"yValue":0.9687087209302325,
					"yValueEnd":0.9681645348837209
				}];
class ChartView extends Component {


    static defaultProps = {
        config: {
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
		},
	  options:{
            accessibility: {
                keyboardNavigation:{
                    enabled: false
                }
            },
            chart: {
                renderTo: 'container',
                backgroundColor: '#f4f4f4',
                resetZoomButton: {
                    theme: {
                        display: 'none'
                    }
                }
            },
            annotationsOptions: {
                enabledButtons: false
            },
            annotations: testAnnotations,
            xAxis:{

            },
            yAxis: {
                opposite: false,
            },
            title: {
                text: '',
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            navigator: {
                enabled: false
            },
            rangeSelector: {
                selected: 2,
				inputEnabled: false,
				buttonTheme: {
					visibility: 'hidden'
				},
				labelStyle: {
					visibility: 'hidden'
				}
            },
            scrollbar: {
                enabled: false
            },
            series: [{
                type: 'candlestick',
                name: 'AAPL Stock Price',
                data: 'data',
                dataGrouping: {
                    enabled: false,
                }
            }]
        }
    };

    constructor(props){
        super(props);
        this.state={
            init:`<html>
                    <style media="screen" type="text/css">
                    @import 'http://code.highcharts.com/css/highcharts.css';

                    .highcharts-background{
                        fill: #f4f4f4;
                    }
                    .highcharts-candlestick-series .highcharts-point {
                        stroke: #7a7a7a;
                        fill: #7a7a7a;
                    }
                    .highcharts-candlestick-series .highcharts-point-up {
                        stroke: #f7676c;
                        fill: #f7676c;
                    }
                    .highcharts-yaxis-grid .highcharts-grid-line{
                        stroke: #f6979a;
                        stroke-dasharray: 5;
                    }
                    .highcharts-input-group{
                        display: none;
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
                    <head>
                        <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
                        <script src="http://code.highcharts.com/stock/highstock.js"></script>
                        <script src="http://code.highcharts.com/stock/modules/exporting.js"></script>
						<script>
                        /* global $ Highcharts document window module:true */
						(function (factory) {
							if (typeof module === 'object' && module.exports) {
								module.exports = factory;
							} else {
								factory(Highcharts);
							}
						}(function (H) {
							'use strict';
							// Highcharts helper methods
							var UNDEFINED,
								ALIGN_FACTOR,
								Chart = H.Chart,
								extend = H.extend,
								merge = H.merge,
								each = H.each,
								inArray = (window.HighchartsAdapter && window.HighchartsAdapter.inArray) || H.inArray, // #52, since Highcharts 4.1.10 HighchartsAdapter is only provided by the Highcharts Standalone Framework
								addEvent = H.addEvent,
								removeEvent = H.removeEvent,
								isOldIE = H.VMLRenderer ? true : false;

							H.ALLOWED_SHAPES = ['path', 'rect', 'circle'];

							ALIGN_FACTOR = {
								top: 0,
								left: 0,
								center: 0.5,
								middle: 0.5,
								bottom: 1,
								right: 1
							};


							H.SVGRenderer.prototype.symbols.line = function (x, y, w, h) {
								var p = 2;
								return [
									'M', x + p, y + p, 'L', x + w - p, y + h - p
								];
							};

							H.SVGRenderer.prototype.symbols.text = function (x, y, w, h) {
								var p = 1;
								return [
									// 'M', 0, 0, 'L', 10, 0, 'M', 5, 0, 'L', 5, 5
									'M', x, y + p, 'L', x + w, y + p,
									'M', x + w / 2, y + p, 'L', x + w / 2, y + p + h
								];
							};
							// VML fallback
							if (H.VMLRenderer) {
								H.VMLRenderer.prototype.symbols.text = H.SVGRenderer.prototype.symbols.text;
								H.VMLRenderer.prototype.symbols.line = H.SVGRenderer.prototype.symbols.line;
							}


							// when drawing annotation, don't zoom/select place
							H.wrap(H.Pointer.prototype, 'drag', function (c, e) {
								if (!this.chart.annotations || this.chart.annotations.allowZoom) {
									c.call(this, e);
								}
							});

							// deselect active annotation
							H.wrap(H.Pointer.prototype, 'onContainerMouseDown', function (c, e) {
								c.call(this, e);
								if (this.chart.selectedAnnotation) {
									this.chart.selectedAnnotation.events.deselect.call(this.chart.selectedAnnotation, e);
								}
							});

							// utils for buttons
							var utils = {
								getRadius: function (e) {
									var ann = this,
										chart = ann.chart,
										bbox = chart.container.getBoundingClientRect(),
										x = e.clientX - bbox.left,
										y = e.clientY - bbox.top,
										xAxis = chart.xAxis[ann.options.xAxis],
										yAxis = chart.yAxis[ann.options.yAxis],
										dx = Math.abs(x - xAxis.toPixels(ann.options.xValue)),
										dy = Math.abs(y - yAxis.toPixels(ann.options.yValue)),
										radius = parseInt(Math.sqrt(dx * dx + dy * dy), 10);
									ann.shape.attr({
										r: radius
									});
									return radius;
								},
								getRadiusAndUpdate:	function (e) {
									var r = utils.getRadius.call(this, e);
									this.update({
										shape: {
											params: {
												r: r,
												x: -r,
												y: -r
											}
										}
									});
								},
								getPath: function (e) {
									var ann = this,
										chart = ann.chart,
										bbox = chart.container.getBoundingClientRect(),
										x = e.clientX - bbox.left,
										y = e.clientY - bbox.top,
										xAxis = chart.xAxis[ann.options.xAxis],
										yAxis = chart.yAxis[ann.options.yAxis],
										dx = x - xAxis.toPixels(ann.options.xValue),
										dy = y - yAxis.toPixels(ann.options.yValue);
										
									var path = ['M', 0, 0, 'L', parseInt(dx, 10), parseInt(dy, 10)];
									ann.shape.attr({
										d: path
									});
										
									return path;
								},
								getPathAndUpdate: function (e) {
									var ann = this,
										chart = ann.chart,
										path = utils.getPath.call(ann, e),
										xAxis = chart.xAxis[ann.options.xAxis],
										yAxis = chart.yAxis[ann.options.yAxis],
										x = xAxis.toValue(path[4] + xAxis.toPixels(ann.options.xValue)),
										y = yAxis.toValue(path[5] + yAxis.toPixels(ann.options.yValue));
										
									this.update({
										xValueEnd: x,
										yValueEnd: y,
										shape: {
											params: {
												d: path
											}
										}
									});
								},
								getRect: function (e) {
									var ann = this,
										chart = ann.chart,
										bbox = chart.container.getBoundingClientRect(),
										x = e.clientX - bbox.left,
										y = e.clientY - bbox.top,
										xAxis = chart.xAxis[ann.options.xAxis],
										yAxis = chart.yAxis[ann.options.yAxis],
										sx = xAxis.toPixels(ann.options.xValue),
										sy = yAxis.toPixels(ann.options.yValue),
										dx = x - sx,
										dy = y - sy,
										w = Math.round(dx) + 1,
										h = Math.round(dy) + 1,
										ret = {};
										
									ret.x = w < 0 ? w : 0;
									ret.width = Math.abs(w);
									ret.y = h < 0 ? h : 0;
									ret.height = Math.abs(h);
												
									ann.shape.attr({
										x: ret.x,
										y: ret.y,
										width: ret.width,
										height: ret.height
									});
									return ret;
								},
								getRectAndUpdate: function (e) {
									var rect = utils.getRect.call(this, e);
									this.update({
										shape: {
											params: rect
										}
									});
								},
								getText: function () {
									// do nothing
								},
								showInput: function (e) {
									var ann = this,
										chart = ann.chart,
										index = chart.annotationInputIndex = chart.annotationInputIndex ? chart.annotationInputIndex : 1,
										input = document.createElement('span'),
										button;
											
									input.innerHTML = '<input type="text" class="annotation-' + index + '" placeholder="Add text"><button class=""> Done </button>';
									input.style.position = 'absolute';
									input.style.left = e.pageX + 'px';
									input.style.top = e.pageY + 'px';
									
									document.body.appendChild(input);
									input.querySelectorAll('input')[0].focus();
									button = input.querySelectorAll('button')[0];
									button.onclick = function () {
										var parent = this.parentNode;
										
										ann.update({
											title: {
												text: parent.querySelectorAll('input')[0].value
											}
										});
										parent.parentNode.removeChild(parent);
									};
									chart.annotationInputIndex++;
								}
							};
									
							function defaultOptions(shapeType) {
								var shapeOptions,
									options;

								options = {
									xAxis: 0,
									yAxis: 0,
									shape: {
										params: {
											stroke: '#000000',
											fill: 'rgba(0,0,0,0)',
											'stroke-width': 2
										}
									},
									events: {
										click: function(){
											this.select();
										},
										dblclick: function(){
											this.deselect();
											this.destroy();
										}
									},
									selectionMarker: {
										'stroke-width': 1,
										stroke: 'black',
										fill: 'transparent',
										dashstyle: 'ShortDash',
										'shape-rendering': 'crispEdges'
									}
								};

								shapeOptions = {
									circle: {
										params: {
											x: 0,
											y: 0
										}
									}
								};

								if (shapeOptions[shapeType]) {
									options.shape = merge(options.shape, shapeOptions[shapeType]);
								}

								return options;
							}


							function defatultMainOptions() {
								var buttons = [],
									shapes = ['circle', 'line', 'square', 'text'],
									types = ['circle', 'path', 'rect', null],
									params = [{
										r: 0,
										fill: 'rgba(255,0,0,0.4)',
										stroke: 'black'
									}, {
										d: ['M', 0, 0, 'L', 10, 10],
										fill: 'rgba(255,0,0,0.4)',
										stroke: 'black'
									}, {
										width: 10,
										height: 10,
										fill: 'rgba(255,0,0,0.4)',
										stroke: 'black'
									}],
									steps = [utils.getRadius, utils.getPath, utils.getRect, utils.getText],
									stops = [utils.getRadiusAndUpdate, utils.getPathAndUpdate, utils.getRectAndUpdate, utils.showInput];
									
								each(shapes, function (s, i) {
									buttons.push({
										annotationEvents: {
											step: steps[i],
											stop: stops[i]
										},
										annotation: {
											anchorX: 'left',
											anchorY: 'top',
											xAxis: 0,
											yAxis: 0,
											shape: {
												type: types[i],
												params: params[i]
											}
										},
										symbol: {
											shape: s,
											size: 12,
											style: {
												'stroke-width': 2,
												'stroke': 'black',
												fill: 'red',
												zIndex: 121
											}
										},
										style: {
											fill: 'black',
											stroke: 'blue',
											strokeWidth: 2
										},
										size: 12,
										states: {
											selected: {
												fill: '#9BD'
											},
											hover: {
												fill: '#9BD'
											}
										}
									});
								});
								return {
									enabledButtons: true,
									buttons: buttons,
									buttonsOffsets: [0, 0]
								};
							}

							function isArray(obj) {
								return Object.prototype.toString.call(obj) === '[object Array]';
							}

							function isNumber(n) {
								return typeof n === 'number';
							}

							function defined(obj) {
								return obj !== UNDEFINED && obj !== null;
							}

							function translatePath(d, xAxis, yAxis, xOffset, yOffset) {
								var len = d.length,
									i = 0,
									path = [];

								while (i < len) {
									if (typeof d[i] === 'number' && typeof d[i + 1] === 'number') {
										path[i] = xAxis.toPixels(d[i]) - xOffset;
										path[i + 1] = yAxis.toPixels(d[i + 1]) - yOffset;
										i += 2;
									} else {
										path[i] = d[i];
										i += 1;
									}
								}

								return path;
							}

							function createGroup(chart, i, clipPath) {
								var group = chart.renderer.g('annotations-group-' + i);
								group.attr({
									zIndex: 7
								});
								group.add();
								group.clip(clipPath);
								return group;
							}

							function createClipPath(chart, y) {
								var clipBox = {
									x: y.left,
									y: y.top,
									width: y.width,
									height: y.height
								};
										
								return chart.renderer.clipRect(clipBox);
							}

							function attachEvents(chart) {
								function step(e) {
									var selected = chart.annotations.selected;
									chart.annotations.options.buttons[selected].annotationEvents.step.call(chart.drawAnnotation, e);
								}
								function drag(e) {
									var bbox = chart.container.getBoundingClientRect(),
										clickX = e.clientX - bbox.left,
										clickY = e.clientY - bbox.top;
									
									if (!chart.isInsidePlot(clickX - chart.plotLeft, clickY - chart.plotTop) || chart.annotations.allowZoom) {
										return;
									}
									
									var xAxis = chart.xAxis[0],
										yAxis = chart.yAxis[0],
										selected = chart.annotations.selected;
									
									var options = merge(chart.annotations.options.buttons[selected].annotation, {
										xValue: xAxis.toValue(clickX),
										yValue: yAxis.toValue(clickY),
										allowDragX: true,
										allowDragY: true
									});
									
									chart.addAnnotation(options);
									
									chart.drawAnnotation = chart.annotations.allItems[chart.annotations.allItems.length - 1];
									addEvent(document, 'mousemove', step);
								}
								
								function drop(e) {
									removeEvent(document, 'mousemove', step);
									
									// store annotation details
									if (chart.drawAnnotation) {
										var selected = chart.annotations.selected;
										chart.annotations.options.buttons[selected].annotationEvents.stop.call(chart.drawAnnotation, e);
									}
									chart.drawAnnotation = null;
								}
								addEvent(chart.container, 'mousedown', drag);
								addEvent(document, 'mouseup', drop);
							}

							function getButtonCallback(index, chart) {
								return function () {
									var self = chart.annotations.buttons[index][0];
									if (self.state === 2) {
										chart.annotations.selected = -1;
										chart.annotations.allowZoom = true;
										self.setState(0);
									} else {
										if (chart.annotations.selected >= 0) {
											chart.annotations.buttons[chart.annotations.selected][0].setState(0);
										}
										chart.annotations.allowZoom = false;
										chart.annotations.selected = index;
										self.setState(2);
									}
								};
							}


							function renderButton(chart, mainButton, i) {
								var userOffset = chart.annotations.options.buttonsOffsets,
									xOffset = chart.rangeSelector && chart.rangeSelector.inputGroup ? chart.rangeSelector.inputGroup.offset : 0,
									renderer = chart.renderer,
									symbol = mainButton.symbol,
									offset = 30,
									symbolSize = symbol.size,
									padding = 8 / 2, // since Highcahrts 5.0, padding = 8 is hardcoded
									buttonSize = mainButton.size - padding,
									x = chart.plotWidth + chart.plotLeft - ((i + 1) * offset) - xOffset - userOffset[0],
									y = chart.plotTop - (chart.rangeSelector ? 23 + buttonSize + padding : 0) + userOffset[1],
									callback = mainButton.events && mainButton.events.click ? mainButton.events.click : getButtonCallback(i, chart),
									selected = mainButton.states.selected,
									hovered = mainButton.states.hover,
									button,
									s;
									
								button = renderer.button('', x, y, callback, {}, hovered, selected).attr({ width: buttonSize, height: buttonSize, zIndex: 10 });
								s = renderer.symbol(
									symbol.shape,
									buttonSize - symbolSize / 2 + padding,
									buttonSize - symbolSize / 2 + padding,
									symbolSize,
									symbolSize
								).attr(symbol.style).add(button);
								
								button.attr(button.style).add();
								
								return [button, s];
							}

							function renderButtons(chart) {
								var buttons = chart.annotations.options.buttons;
								
								chart.annotations.buttons = chart.annotations.buttons || [];
								each(buttons, function (button, i) {
									chart.annotations.buttons.push(renderButton(chart, button, i));
								});
							}

							// Define annotation prototype
							var Annotation = function () { // eslint-disable-line
								this.init.apply(this, arguments);
							};

							Annotation.prototype = {
								/*
								* Initialize the annotation
								*/
								init: function (chart, options) {
									var shapeType = options.shape && options.shape.type;

									this.chart = chart;
									this.options = merge({}, defaultOptions(shapeType), options);
									this.userOptions = options;
								},

								/*
								* Render the annotation
								*/
								render: function (redraw) {
									var annotation = this,
										chart = this.chart,
										renderer = annotation.chart.renderer,
										group = annotation.group,
										title = annotation.title,
										shape = annotation.shape,
										options = annotation.options,
										titleOptions = options.title,
										shapeOptions = options.shape,
										allowDragX = options.allowDragX,
										allowDragY = options.allowDragY,
										hasEvents = annotation.hasEvents;

									function attachCustomEvents(element, events) {
										if (defined(events)) {
											for (var name in events) { // eslint-disable-line
												(function (n) {
													addEvent(element.element, n, function (e) {
														events[n].call(annotation, e);
													});
												})(name);
											}
										}
									}

									if (!group) {
										group = annotation.group = renderer.g();
										group.attr({ 'class': 'highcharts-annotation' });
									}

									if (!shape && shapeOptions && inArray(shapeOptions.type, H.ALLOWED_SHAPES) !== -1) {
										shape = annotation.shape = shapeOptions.type === 'rect' ? renderer[options.shape.type]().attr(shapeOptions.params) : renderer[options.shape.type](shapeOptions.params);
										shape.add(group);
									}

									if (!title && titleOptions) {
										title = annotation.title = renderer.label(titleOptions);
										title.add(group);
									}
									if ((allowDragX || allowDragY) && !hasEvents) {
										$(group.element).on('mousedown', function (e) {
											annotation.events.storeAnnotation(e, annotation, chart);
											annotation.events.select(e, annotation);
										});
										addEvent(document, 'mouseup', function (e) {
											annotation.events.releaseAnnotation(e, chart);
										});
										
										attachCustomEvents(group, options.events);
									} else if (!hasEvents) {
										$(group.element).on('mousedown', function (e) {
											annotation.events.select(e, annotation);
										});
										attachCustomEvents(group, options.events);
									}

									this.hasEvents = true;
									
									group.add(chart.annotations.groups[options.yAxis]);
									
									// link annotations to point or series
									annotation.linkObjects();
									
									if (redraw !== false) {
										annotation.redraw();
									}
								},

								/*
								* Redraw the annotation title or shape after options update
								*/
								redraw: function (redraw) {
									var options = this.options,
										chart = this.chart,
										group = this.group,
										title = this.title,
										shape = this.shape,
										linkedTo = this.linkedObject,
										xAxis = chart.xAxis[options.xAxis],
										yAxis = chart.yAxis[options.yAxis],
										width = options.width,
										height = options.height,
										anchorY = ALIGN_FACTOR[options.anchorY],
										anchorX = ALIGN_FACTOR[options.anchorX],
										shapeParams,
										linkType,
										series,
										bbox,
										x,
										y;

									if (linkedTo) {
										linkType = (linkedTo instanceof H.Point) ? 'point' : (linkedTo instanceof H.Series) ? 'series' : null;

										if (linkType === 'point') {
											options.x = linkedTo.plotX + chart.plotLeft;
											options.y = linkedTo.plotY + chart.plotTop;
											series = linkedTo.series;
										} else if (linkType === 'series') {
											series = linkedTo;
										}

										// #48 - series.grouping and series.stacking may reposition point.graphic
										if (series.pointXOffset) {
											options.x += series.pointXOffset + (linkedTo.shapeArgs.width / 2 || 0);
										}
										group.attr({
											visibility: series.group.attr('visibility')
										});
									}


									// Based on given options find annotation pixel position
									// what is minPointOffset? Doesn't work in 4.0+
									x = (defined(options.xValue) ? xAxis.toPixels(options.xValue /* + xAxis.minPointOffset */) : options.x);
									y = defined(options.yValue) ? yAxis.toPixels(options.yValue) : options.y;
									if (chart.inverted && defined(options.xValue) && defined(options.yValue)) {
										var tmp = x; x = y; y = tmp;
									}

									if (isNaN(x) || isNaN(y) || !isNumber(x) || !isNumber(y)) {
										return;
									}


									if (title) {
										var attrs = options.title;
										if (isOldIE) {
											title.attr({
												text: attrs.text
											});
										} else {
											title.attr(attrs);
										}
										title.css(options.title.style);
									}

									if (shape) {
										shapeParams = extend({}, options.shape.params);
										if (options.shape.units === 'values') {
											var realXAxis = chart.inverted ? yAxis : xAxis;
											var realYAxis = chart.inverted ? xAxis : yAxis;

											// For ordinal axis, required are x&Y values - #22
											if (defined(shapeParams.x) && shapeParams.width) {
												shapeParams.width = xAxis.toPixels(shapeParams.width + shapeParams.x) - xAxis.toPixels(shapeParams.x);
												shapeParams.x = xAxis.toPixels(shapeParams.x);
											} else if (shapeParams.width) {
												shapeParams.width = realXAxis.toPixels(shapeParams.width) - realXAxis.toPixels(0);
											} else if (defined(shapeParams.x)) {
												shapeParams.x = xAxis.toPixels(shapeParams.x);
											}

											if (defined(shapeParams.y) && shapeParams.height) {
												shapeParams.height = -yAxis.toPixels(shapeParams.height + shapeParams.y) + yAxis.toPixels(shapeParams.y);
												shapeParams.y = yAxis.toPixels(shapeParams.y);
											} else if (shapeParams.height) {
												shapeParams.height = -realYAxis.toPixels(shapeParams.height) + realYAxis.toPixels(0);
												shapeParams.height *= chart.inverted ? -1 : 1;
											} else if (defined(shapeParams.y)) {
												shapeParams.y = yAxis.toPixels(shapeParams.y);
											}

											if (options.shape.type === 'path') {
												shapeParams.d = translatePath(shapeParams.d, xAxis, yAxis, x, y);
											}
										}
										if (defined(options.yValueEnd) && defined(options.xValueEnd)) {
											shapeParams.d = shapeParams.d || options.shape.d || ['M', 0, 0, 'L', 0, 0];
											shapeParams.d[4] = xAxis.toPixels(options.xValueEnd) - xAxis.toPixels(options.xValue);
											shapeParams.d[5] = yAxis.toPixels(options.yValueEnd) - yAxis.toPixels(options.yValue);
										}

										// move the center of the circle to shape x/y
										if (options.shape.type === 'circle') {
											shapeParams.x += shapeParams.r;
											shapeParams.y += shapeParams.r;
										}
										shape.attr(shapeParams);
									}

									group.bBox = null;

									// If annotation width or height is not defined in options use bounding box size
									if (!isNumber(width)) {
										bbox = group.getBBox();
										width = bbox.width;
									}

									if (!isNumber(height)) {
										// get bbox only if it wasn't set before
										if (!bbox) {
											bbox = group.getBBox();
										}

										height = bbox.height;
									}
									// Calculate anchor point
									if (!isNumber(anchorX)) {
										anchorX = ALIGN_FACTOR.center;
									}

									if (!isNumber(anchorY)) {
										anchorY = ALIGN_FACTOR.center;
									}

									// Translate group according to its dimension and anchor point
									x = x - width * anchorX;
									y = y - height * anchorY;
									
									if (this.selectionMarker) {
										this.events.select({}, this);
									}
									
									if (redraw && chart.animation && defined(group.translateX) && defined(group.translateY)) {
										group.animate({
											translateX: x,
											translateY: y
										});
									} else {
										group.translate(x, y);
									}
								},

								/*
								* Destroy the annotation
								*/
								destroy: function () {
									var annotation = this,
										chart = this.chart,
										allItems = chart.annotations.allItems,
										index = allItems.indexOf(annotation);

									chart.activeAnnotation = null;
									
									if (index > -1) {
										allItems.splice(index, 1);
										chart.options.annotations.splice(index, 1); // #33
									}

									each(['title', 'shape', 'group'], function (element) {
										if (annotation[element] && annotation[element].destroy) {
											annotation[element].destroy();
											annotation[element] = null;
										} else if (annotation[element]) {
											annotation[element].remove();
											annotation[element] = null;
										}
									});

									annotation.group = annotation.title = annotation.shape = annotation.chart = annotation.options = annotation.hasEvents = null;
								},

								/*
								* Show annotation, only for non-linked annotations
								*/
								show: function () {
									if (!this.linkedObject) {
										this.visible = true;
										this.group.attr({
											visibility: 'visible'
										});
									}
								},

								/*
								* Hide annotation, only for non-linked annotations
								*/
								hide: function () {
									if (!this.linkedObject) {
										this.visible = false;
										this.group.attr({
											visibility: 'hidden'
										});
									}
								},

								/*
								* Update the annotation with a given options
								*/
								update: function (options, redraw) {
									var annotation = this,
										chart = this.chart,
										allItems = chart.annotations.allItems,
										index = allItems.indexOf(annotation),
										o = merge(this.options, options);
											
									if (index >= 0) {
										chart.options.annotations[index] = o; // #33
									}
															
									this.options = o;

									// update link to point or series
									this.linkObjects();

									this.render(redraw);
									return this;
								},
								/*
								* API select & deselect:
								*/
								select: function () {
									this.events.select(null, this);
									return this;
								},
								deselect: function () {
									this.events.deselect(null, this);
									this.chart.selectedAnnotation = null;
									return this;
								},


								linkObjects: function () {
									var annotation = this,
										chart = annotation.chart,
										linkedTo = annotation.linkedObject,
										linkedId = linkedTo && (linkedTo.id || linkedTo.options.id),
										options = annotation.options,
										id = options.linkedTo;

									if (!defined(id)) {
										annotation.linkedObject = null;
									} else if (!defined(linkedTo) || id !== linkedId) {
										annotation.linkedObject = chart.get(id);
									}
								},
								events: {
									select: function (e, ann) {
										var chart = ann.chart,
											prevAnn = chart.selectedAnnotation,
											box,
											padding = 10;
										
										if (prevAnn && prevAnn !== ann) {
											prevAnn.deselect();
										}
									
										if (!ann.selectionMarker) {
											box = ann.group.getBBox();
											
											ann.selectionMarker = chart.renderer.rect(
												box.x - padding / 2,
												box.y - padding / 2,
												box.width + padding,
												box.height + padding
											).attr(ann.options.selectionMarker);
											ann.selectionMarker.add(ann.group);
										}
										chart.selectedAnnotation = ann;
									},
									deselect: function () {
										if (this.selectionMarker && this.group) {
											this.selectionMarker.destroy();
											this.selectionMarker = false;
											this.group.bBox = null;
										}
									},
									destroyAnnotation: function (event, annotation) {
										annotation.destroy();
									},
									translateAnnotation: function (event, chart) {
										event.stopPropagation();
										event.preventDefault();
										if (chart.activeAnnotation) {
											var bbox = chart.container.getBoundingClientRect(),
												clickX = event.clientX - bbox.left,
												clickY = event.clientY - bbox.top;
													
											if (!chart.isInsidePlot(clickX - chart.plotLeft, clickY - chart.plotTop)) {
												return;
											}
											var note = chart.activeAnnotation;
													
											var x = note.options.allowDragX ? event.clientX - note.startX + note.group.translateX : note.group.translateX,
												y = note.options.allowDragY ? event.clientY - note.startY + note.group.translateY : note.group.translateY;
										
											note.transX = x;
											note.transY = y;
											note.group.attr({
												transform: 'translate(' + x + ',' + y + ')'
											});
											note.hadMove = true;
										}
									},
									storeAnnotation: function (event, annotation, chart) {
										if (!chart.annotationDraging) {
											event.stopPropagation();
											event.preventDefault();
										}
										if ((!isOldIE && event.button === 0) || (isOldIE && event.button === 1)) {
											var posX = event.clientX,
												posY = event.clientY;
											chart.activeAnnotation = annotation;
											chart.activeAnnotation.startX = posX;
											chart.activeAnnotation.startY = posY;
											chart.activeAnnotation.transX = 0;
											chart.activeAnnotation.transY = 0;
											// translateAnnotation(event);
											addEvent(document, 'mousemove', function (e) {
												annotation.events.translateAnnotation(e, chart);
											});
											// addEvent(chart.container, 'mouseleave', releaseAnnotation); TO BE OR NOT TO BE?
										}
									},
									releaseAnnotation: function (event, chart) {
										event.stopPropagation();
										event.preventDefault();
										if (chart.activeAnnotation && (chart.activeAnnotation.transX !== 0 || chart.activeAnnotation.transY !== 0)) {
											var note = chart.activeAnnotation,
												x = note.transX,
												y = note.transY,
												options = note.options,
												xVal = options.xValue,
												yVal = options.yValue,
												xValEnd = options.xValueEnd,
												yValEnd = options.yValueEnd,
												allowDragX = options.allowDragX,
												allowDragY = options.allowDragY,
												xAxis = note.chart.xAxis[note.options.xAxis],
												yAxis = note.chart.yAxis[note.options.yAxis],
												newX = xAxis.toValue(x),
												newY = yAxis.toValue(y);
											
											if (x !== 0 || y !== 0) {
												if (allowDragX && allowDragY) {
													note.update({
														xValue: defined(xVal) ? newX : null,
														yValue: defined(yVal) ? newY : null,
														xValueEnd: defined(xValEnd) ? xValEnd - xVal + newX : null,
														yValueEnd: defined(yValEnd) ? yValEnd - yVal + newY : null,
														x: defined(xVal) ? null : x,
														y: defined(yVal) ? null : y
													}, false);
												} else if (allowDragX) {
													note.update({
														xValue: defined(xVal) ? newX : null,
														yValue: defined(yVal) ? yVal : null,
														xValueEnd: defined(xValEnd) ? xValEnd - xVal + newX : null,
														yValueEnd: defined(yValEnd) ? yValEnd : null,
														x: defined(xVal) ? null : x,
														y: defined(yVal) ? null : note.options.y
													}, false);
												} else if (allowDragY) {
													note.update({
														xValue: defined(xVal) ? xVal : null,
														yValue: defined(yVal) ? newY : null,
														xValueEnd: defined(xValEnd) ? xValEnd : null,
														yValueEnd: defined(yValEnd) ? yValEnd - yVal + newY : null,
														x: defined(xVal) ? null : note.options.x,
														y: defined(yVal) ? null : y
													}, false);
												}
											}
											chart.activeAnnotation = null;
											chart.redraw(false);
										} else {
											chart.activeAnnotation = null;
										}
									}
								}
							};
							// Add annotations methods to chart prototype
							extend(Chart.prototype, {
								/*
								* Unified method for adding annotations to the chart
								*/
								addAnnotation: function (options, redraw) {
									var chart = this,
										annotations = chart.annotations.allItems,
										item,
										i,
										iter,
										len;

									if (!isArray(options)) {
										options = [options];
									}

									len = options.length;

									for (iter = 0; iter < len; iter++) {
										item = new Annotation(chart, options[iter]);
										i = annotations.push(item);
										if (i > chart.options.annotations.length) {
											chart.options.annotations.push(options[iter]); // #33
										}
										item.render(redraw);
									}
								},

								/*
								* Redraw all annotations, method used in chart events
								*/
								redrawAnnotations: function () {
									var chart = this,
										yAxes = chart.yAxis,
										yLen = yAxes.length,
										ann = chart.annotations,
										userOffset = ann.options.buttonsOffsets,
										i = 0,
										clip, y;

										
									for (; i < yLen; i++) {
										y = yAxes[i];
										clip = ann.clipPaths[i];
										
										if (clip) {
											clip.attr({
												x: y.left,
												y: y.top,
												width: y.width,
												height: y.height
											});
										} else {
											var clipPath = createClipPath(chart, y);
											ann.clipPaths.push(clipPath);
											ann.groups.push(createGroup(chart, i, clipPath));
										}
									}
											
									each(chart.annotations.allItems, function (annotation) {
										annotation.redraw();
									});
									each(chart.annotations.buttons, function (button, j) {
										var	xOffset = chart.rangeSelector && chart.rangeSelector.inputGroup ? chart.rangeSelector.inputGroup.offset : 0,
											x = chart.plotWidth + chart.plotLeft - ((j + 1) * 30) - xOffset - userOffset[0];
										button[0].attr({
											x: x
										});
									});
								}
							});


							// Initialize on chart load
							Chart.prototype.callbacks.push(function (chart) {
								var options = chart.options.annotations,
									yAxes = chart.yAxis,
									yLen = yAxes.length,
									clipPaths = [],
									groups = [],
									i = 0,
									y, c;

								for (; i < yLen; i++) {
									y = yAxes[i];
									c = createClipPath(chart, y);
									clipPaths.push(c);
									groups.push(createGroup(chart, i, c));
								}

								if (!chart.annotations) {
									chart.annotations = {};
								}
								
								if (!chart.options.annotations) {
									chart.options.annotations = [];
								}
								
								// initialize empty array for annotations
								if (!chart.annotations.allItems) {
									chart.annotations.allItems = [];
								}

								// allow zoom or draw annotation
								chart.annotations.allowZoom = true;
								
								// link chart object to annotations
								chart.annotations.chart = chart;

								// link annotations group element to the chart
								chart.annotations.groups = groups;
								
								// add clip path to annotations
								chart.annotations.clipPaths = clipPaths;

								if (isArray(options) && options.length > 0) {
									chart.addAnnotation(chart.options.annotations);
								}
								chart.annotations.options = merge(defatultMainOptions(), chart.options.annotationsOptions ? chart.options.annotationsOptions : {});
								
								if (chart.annotations.options.enabledButtons) {
									renderButtons(chart);
									attachEvents(chart);
								} else {
									chart.annotations.buttons = [];
								}

								// update annotations after chart redraw
								addEvent(chart, 'redraw', function () {
									chart.redrawAnnotations();
								});
							});

							if (!Array.prototype.indexOf) {
								Array.prototype.indexOf = function (searchElement) { // eslint-disable-line
									if (this === null) {
										throw new TypeError();
									}
									var t = Object(this);
									var len = t.length >>> 0;
									if (len === 0) {
										return -1;
									}
									var n = 0;
									if (arguments.length > 1) {
										n = Number(arguments[1]);
										if (n !== n) { // shortcut for verifying if it's NaN
											n = 0;
										} else if (n !== 0 && n !== Infinity && n !== -Infinity) {
											n = (n > 0 || -1) * Math.floor(Math.abs(n));
										}
									}
									if (n >= len) {
										return -1;
									}
									var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
									for (; k < len; k++) {
										if (k in t && t[k] === searchElement) {
											return k;
										}
									}
									return -1;
								};
							}
						}));
                        </script>
                        <script>
                        $(function () {
							var now = new Date();
							var halfHour = new Date();

							halfHour.setTime(now.getTime()- 1000*60*60);
							now = Math.round(now.getTime()/1000);
							halfHour = Math.round(halfHour.getTime()/1000);
							
                            $.getJSON("http://www.tradingpal.com/api/instruments/`+this.props.config.symbol+
							`/chart?serverID=3&till=`+this.props.config.notes.chart.till+
							`&period=`+this.props.config.notes.chart.period+
							`&from=`+this.props.config.notes.chart.from+`", function (data) {
								data = Object.keys(data).map(function(key, index) {
											return [data[key].time*1000,data[key].open,data[key].high,data[key].low,data[key].close];
										});
								console.log(data);
                                Highcharts.stockChart('container', `,
            end:`               );
                            });
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
        var config = JSON.stringify(this.props.options, function (key, value) {//create string of json but if it detects function it uses toString()
			
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