# AngularD3Graphs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Dependencies
* d3: ^5.16.0,
* @types/d3: ^5.7.2

## Module
Import AngularD3GraphLibModule module in AppModule 


## HEAT MAP <lib-heat-map>
![HEAT MAP](https://raw.githubusercontent.com/diveshpanwar/d3-graph-data/master/heat-map.png)<br/>
This component will generate a heat map. It has following properties:
* url [Input: string] : The url to a csv file, can be remote or local, default url is [https://raw.githubusercontent.com/diveshpanwar/d3-graph-data/master/heat-map.csv](https://raw.githubusercontent.com/diveshpanwar/d3-graph-data/master/heat-map.csv)
* description [Input: string] : The description to show on the heat map
* title [Input: string] : the title of the heat map
* margin [Input: objet] : the margins for the svg heat map, default { top: 80, right: 25, bottom: 30, left: 40 };
* width [Input: number] : the width of the heat map, default 400 - margin-left - margin-right
* height [Input: number] : the height of the heat map, default 460 - margin.top - margin.bottom
* groupColumnName [Input: string] : the group column name in the csv data, default 'group' *CASE SENSITIVE*
* variableColumnName [Input: string] : the variable column name in the csv data, default 'variable' *CASE SENSITIVE*
* valueColumnName [Input: string] : the value column name in the csv data, default 'value' *CASE SENSITIVE*

## Bar Chart <lib-bar-chart>
![Bar Chart](https://raw.githubusercontent.com/diveshpanwar/d3-graph-data/master/bar-chart.png)<br/>
This component will generate a bar chart. It has following properties:
* url [Input: string] : The url to a csv file, can be remote or local, default csv url is [https://raw.githubusercontent.com/diveshpanwar/d3-graph-data/master/bar-chart.csv](https://raw.githubusercontent.com/diveshpanwar/d3-graph-data/master/bar-chart.csv)
* description [Input: string] : The description to show on the bar chart
* title [Input: string] : the title of the bar chart
* margin [Input: objet] : the margins for the svg bar chart, default { top: 80, right: 25, bottom: 30, left: 40 };
* width [Input: number] : the width of the bar chart, default 400 - margin-left - margin-right
* height [Input: number] : the height of the bar chart, default 460 - margin.top - margin.bottom
* barColor [Input: string] : Hexa Decimal Code or color Name for the color of each bar, default color is '#432456'
* keyColumnName [Input: string] : the key column name in the csv data, default 'Country' *CASE SENSITIVE*
* valueColumnName [Input: string] : the value column name in the csv data, default 'Value' *CASE SENSITIVE*