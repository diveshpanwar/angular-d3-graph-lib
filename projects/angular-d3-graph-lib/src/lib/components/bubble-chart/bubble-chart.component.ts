import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'lib-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  // styleUrls: ['./bubble-chart.component.css'],
  styles: ['.title{color: green; font - weight: bold;}']
})
export class BubbleChartComponent implements OnInit, AfterViewInit {
  @Input() svg = null;
  @Input() description: string;
  @Input() title: string;
  @Input() margin: any;
  @Input() width: number;
  @Input() height: number;
  @Input() url: string;
  @Input() xlow: number;
  @Input() xhigh: number;
  @Input() ylow: number;
  @Input() yhigh: number;
  @Input() columnOneName: string;
  @Input() columnTwoName: string;
  @Input() columnThreeName: string;
  @Input() columnFourName: string;
  @Input() columnFiveName: string;
  @Input() xTooltipLabel: string;
  @Input() yTooltipLabel: string;
  @Input() domainList: string[];

  ngAfterViewInit(): void {
    this.svg = d3.select('#bubble-chart')
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  constructor() {
    this.checkInputs();
    d3.csv(this.url).then(
      data => {

        // Add X axis
        const x = d3.scaleLinear()
          .domain([this.xlow, this.xhigh])
          .range([0, this.width]);
        this.svg.append('g')
          .attr('transform', 'translate(0,' + this.height + ')')
          .call(d3.axisBottom(x));

        // Add Y axis
        const y = d3.scaleLinear()
          .domain([this.ylow, this.yhigh])
          .range([this.height, 0]);
        this.svg.append('g')
          .call(d3.axisLeft(y));

        // Add a scale for bubble size
        const z = d3.scaleLinear()
          .domain([200000, 1310000000])
          .range([4, 40]);

        // Add a scale for bubble color
        const myColor = d3.scaleOrdinal()
          .domain(this.domainList)
          .range(d3.schemeSet2);

        // -1- Create a tooltip div that is hidden by default:
        const tooltip = d3.select('#bubble-chart')
          .append('div')
          .style('opacity', 0)
          .attr('class', 'tooltip')
          .style('background-color', 'black')
          .style('border-radius', '5px')
          .style('padding', '10px')
          .style('color', 'white')
          .style('position', 'absolute');

        // -2- Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
        const xTooltipLabel = this.xTooltipLabel;
        const columnFiveName = this.columnFiveName;
        const yTooltipLabel = this.yTooltipLabel;
        const columnTwoName = this.columnTwoName;
        const showTooltip = function (d) {
          tooltip
            .transition()
            .duration(200);
          tooltip
            .style('opacity', 1)
            .html(xTooltipLabel + ': ' + d[columnFiveName] + '<br/> ' + yTooltipLabel + ': ' + d[columnTwoName])
            .style('left', (d3.mouse(this)[0] + 30) + 'px')
            .style('top', (d3.mouse(this)[1] + 30) + 'px');
        };

        const moveTooltip = function (d) {
          tooltip
            .style('left', (d3.mouse(this)[0] + 30) + 'px')
            .style('top', (d3.mouse(this)[1] + 30) + 'px');
        };

        const hideTooltip = (d) => {
          tooltip
            .transition()
            .duration(200)
            .style('opacity', 0);
        };

        // Add dots
        this.svg.append('g')
          .selectAll('dot')
          .data(data)
          .enter()
          .append('circle')
          .attr('class', 'bubbles')
          .attr('cx', (d) => x(d[this.columnOneName]))
          .attr('cy', (d) => y(d[this.columnTwoName]))
          .attr('r', (d) => z(d[this.columnThreeName]))
          .style('fill', (d) => myColor(d[this.columnFourName]))
          // -3- Trigger the functions
          .on('mouseover', showTooltip)
          .on('mousemove', moveTooltip)
          .on('mouseleave', hideTooltip);


        // Add title to graph
        if (this.title) {
          d3.select('#bubble-chart').append('div')
            .attr('class', 'bubble-chart-title')
            .append('text')
            .attr('x', 0)
            .attr('y', 0)
            .attr('text-anchor', 'center')
            .style('font-size', '22px')
            .text(this.title);
        }

        // Add subtitle to graph
        if (this.description) {
          d3.select('#bubble-chart')
            .append('div')
            .attr('class', 'bubble-chart-subtitle')
            .append('text')
            .attr('x', 0)
            .attr('y', 0)
            .attr('text-anchor', 'center')
            .style('font-size', '14px')
            .style('fill', 'grey')
            .style('max-width', 400)
            .text(this.description);
        }

      }
    );
  }

  ngOnInit(): void {
  }

  private checkInputs(): void {
    this.description = this.description ? this.description : null;
    this.title = this.title ? this.title : null;
    this.url = this.url ? this.url : 'https://raw.githubusercontent.com/diveshpanwar/d3-graph-data/master/bubble-chart.csv';
    this.margin = this.margin ? this.margin : { top: 50, right: 20, bottom: 30, left: 50 };
    this.width = this.width ? this.width : 500 - this.margin.left - this.margin.right;
    this.height = this.height ? this.height : 520 - this.margin.top - this.margin.bottom;
    this.xlow = this.xlow ? this.xlow : 0;
    this.xhigh = this.xhigh ? this.xhigh : 12000;
    this.ylow = this.ylow ? this.ylow : 35;
    this.yhigh = this.yhigh ? this.yhigh : 90;
    // this.barColor = this.barColor ? this.barColor : '#69b3a2';
    this.columnOneName = this.columnOneName ? this.columnOneName : 'gdpPercap';
    this.columnTwoName = this.columnTwoName ? this.columnTwoName : 'lifeExp';
    this.columnThreeName = this.columnThreeName ? this.columnThreeName : 'pop';
    this.columnFourName = this.columnFourName ? this.columnFourName : 'continent';
    this.columnFiveName = this.columnFiveName ? this.columnFiveName : 'country';
    this.xTooltipLabel = this.xTooltipLabel ? this.xTooltipLabel : 'Country';
    this.yTooltipLabel = this.yTooltipLabel ? this.yTooltipLabel : 'Life Expectency';
    this.domainList = this.domainList ? this.domainList : ['Asia', 'Europe', 'Americas', 'Africa', 'Oceania'];
  }

}
