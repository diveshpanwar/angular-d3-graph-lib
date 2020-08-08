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
* xlow [Input: number] : the number less than or equal to lowest value x can assume, default 0
* xhigh [Input: number] : the number higher than or equal to highest value x can assume, default width
* ylow [Input: number] : the number less than or equal to lowest value y can assume, default height
* yhigh [Input: number] : the number higher than or equal to highest value y can assume, default 0
* tooltipLabel [Input: string] : the prefix of the tooltip

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
* xlow [Input: number] : the number less than or equal to lowest value x can assume, default 0
* xhigh [Input: number] : the number higher than or equal to highest value x can assume, default width
* ylow [Input: number] : the number less than or equal to lowest value y can assume, default 0
* yhigh [Input: number] : the number higher than or equal to highest value y can assume, default 13000

## Bubble Chart <lib-bubble-chart>
![Bubble Chart](https://raw.githubusercontent.com/diveshpanwar/d3-graph-data/master/bubble-chart.png)<br/>
This component will generate a bubble chart. It has following properties:
* url [Input: string] : The url to a csv file, can be remote or local, default csv url is [https://raw.githubusercontent.com/diveshpanwar/d3-graph-data/master/bubble-chart.csv](https://raw.githubusercontent.com/diveshpanwar/d3-graph-data/master/bubble-chart.csv)
* columnOneName [Input: string] : the name of the first column name in the csv, default *gdpPercap - Refer to the sample csv*
* columnTwoName [Input: string] : the name of the second column name in the csv, default *lifeExp - Refer to the sample csv*
* columnThreeName [Input: string] : the name of the third column name in the csv, default *pop - Refer to the sample csv*
* columnFourName [Input: string] : the name of the fourth column name in the csv, default *continent [Also used as domainList]- Refer to the sample csv*
* columnFiveName [Input: string] : the name of the fifth column name in the csv, default *country - Refer to the sample csv*
* description [Input: string] : The description to show on the bubble chart
* title [Input: string] : the title of the bubble chart
* margin [Input: objet] : the margins for the svg bubble chart, default { top: 80, right: 25, bottom: 30, left: 40 };
* width [Input: number] : the width of the bubble chart, default 400 - margin-left - margin-right
* height [Input: number] : the height of the bubble chart, default 460 - margin.top - margin.bottom
* xlow [Input: number] : the number less than or equal to lowest value x can assume, default 0
* xhigh [Input: number] : the number higher than or equal to highest value x can assume, default width
* ylow [Input: number] : the number less than or equal to lowest value y can assume, default 0
* yhigh [Input: number] : the number higher than or equal to highest value y can assume, default 13000
* xTooltipLabel [Input: string] : Prefix of tooltip for Value x, default Country
* yTooltipLabel [Input: string] : Prefix of tooltip for Value y, default Life Expectency
* domainList [Input: string[] ] : the array fo strings to define the color scheme of the bubbles, default *column four unique values, continent - Refer to the sample csv*
