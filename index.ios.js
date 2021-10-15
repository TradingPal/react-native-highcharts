/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * Issue - How to display loading animation before showing chart
 * Solution by @BismarkAmanor
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, ActivityIndicator } from "react-native";
import ChartView from "./App/index.js";

export default class chartWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false, //BismarkAmanor- default timer state
    };
  }

  // BismarkAmanor- executing timer function when app is rendered
  componentDidMount() {
    this.setTimeout(() => {
      this.setTimePassed();
    }, 1000);
  }

  render() {
    var Highcharts = "Highcharts";
    var conf = {
      chart: {
        type: "spline",
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
          load: function () {
            // set up the updating of the chart each second
            var series = this.series[0];
            setInterval(function () {
              var x = new Date().getTime(), // current time
                y = Math.random();
              series.addPoint([x, y], true, true);
            }, 1000);
          },
        },
      },
      title: {
        text: "Live random data",
      },
      xAxis: {
        type: "datetime",
        tickPixelInterval: 150,
      },
      yAxis: {
        title: {
          text: "Value",
        },
        plotLines: [
          {
            value: 0,
            width: 1,
            color: "#808080",
          },
        ],
      },
      tooltip: {
        formatter: function () {
          return (
            "<b>" +
            this.series.name +
            "</b><br/>" +
            Highcharts.dateFormat("%Y-%m-%d %H:%M:%S", this.x) +
            "<br/>" +
            Highcharts.numberFormat(this.y, 2)
          );
        },
      },
      legend: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      series: [
        {
          name: "Random data",
          data: (function () {
            // generate an array of random data
            var data = [],
              time = new Date().getTime(),
              i;

            for (i = -19; i <= 0; i += 1) {
              data.push({
                x: time + i * 1000,
                y: Math.random(),
              });
            }
            return data;
          })(),
        },
      ],
    };

    // BismarkAmanor- Update timer state
    setTimePassed = () => {
      this.setState({ timePassed: true });
    };

    // BismarkAmanor- display loading animation if timePassed state is false
    if (this.state.timePassed) {
      return <ActivityIndicator size="small" color="#0000ff" />;
    } else {
      return (
        <ChartView style={{ flex: 1 }} config={conf} stock={false}></ChartView>
      );
    }
  }
}
AppRegistry.registerComponent("chartWebView", () => chartWebView);
