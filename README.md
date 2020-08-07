# AngularD3Graphs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## HEAT MAP <lib-heat-map>
This component will generate a heat map. It has following properties:
* url [Input: string] : The url to a csv file, can be remote or local
* description [Input: string] : The description to show on the heat map
* title [Input: string] : the title of the heat map
* margin [Input: objet] : the margins for the svg heat map, default { top: 80, right: 25, bottom: 30, left: 40 };
* width [Input: number] : the width of the heat map
* height [Input: number] : the height of the heat map