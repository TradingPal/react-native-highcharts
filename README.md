# React-Native Highcharts

This is a react-native component for IOS and Android that uses [Highcharts](http://www.highcharts.com) where you send the configuration as a prop and the chart is rendered within a WebView

## Getting Started
```bat
npm install react-native-highcharts --save
```
## Demo
![](http://i.giphy.com/l3vRdWwXin1ooLCHS.gif)

## Basic example
**REMEMBER**  to declare the variable Highcharts='Highcharts'

```javascript
import ChartView from 'react-native-highcharts';
...
render() {
    var Highcharts='Highcharts';
    var conf={
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
        };

    const options = {
        global: {
            useUTC: false
        },
        lang: {
            decimalPoint: ',',
            thousandsSep: '.'
        }
    };

    return (
      <ChartView style={{height:300}} config={conf} options={options}></ChartView>
    );
}
```

## Props
| Prop          | Required      | Description  |
| ------------- |:-------------:| ------------:|
| config        | true          | Highcharts configuration [See the docs.>>](http://www.highcharts.com/docs/getting-started/your-first-chart)  |
| stock     | false      |   Default false; use Highstock |
| more     | false      |   Default false; use Highstock-more |
| heatMap   | false | Default false; use HeatMap |
| style | false      |   Style object to be passed onto the WebView |
| options | false      |   Pass global and lang options from Highcharts |
| guage | false      |   Import gauge library from highcharts |


props added to WebView

## NOTE
if not rendering in real device add this two props to the component
```javascript
javaScriptEnabled={true}
domStorageEnabled={true}
```

## Stuff used to make this:

 * [Highcharts](http://www.highcharts.com/) for making the chart

