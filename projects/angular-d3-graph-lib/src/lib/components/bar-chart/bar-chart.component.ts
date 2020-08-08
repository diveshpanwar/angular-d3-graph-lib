import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'lib-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, AfterContentInit {
  // input parameters
  @Input() url: string;
  @Input() description: string;
  @Input() title: string;
  @Input() margin: any;
  @Input() width: number;
  @Input() height: number;
  @Input() barColor: string;
  @Input() keyColumnName: string;
  @Input() valueColumnName: string;
  @Input() xlow: number;
  @Input() xhigh: number;
  @Input() ylow: number;
  @Input() yhigh: number;

  svg = null;

  ngAfterContentInit() {
    // append the svg object to the body of the page
    this.svg = d3.select('#bar-chart')
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  constructor() {
    this.checkInputs();
    d3.csv(this.url).then(data => {

      // sort data
      data.sort((b: any, a: any) => {
        return a.Value - b.Value;
      });

      // X axis
      const x = d3.scaleBand()
        .range([this.xlow, this.xhigh])
        .domain(data.map((d) => d[this.keyColumnName]))
        .padding(0.2);
      this.svg.append('g')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end');

      // Add Y axis
      const y = d3.scaleLinear()
        .domain([this.ylow, this.yhigh])
        .range([this.height, 0]);
      this.svg.append('g')
        .call(d3.axisLeft(y));

      // Bars
      this.svg.selectAll('mybar')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d) => x(d[this.keyColumnName]))
        .attr('y', (d) => y(d[this.valueColumnName]))
        .attr('width', x.bandwidth())
        .attr('height', (d) => this.height - y(d[this.valueColumnName]))
        .attr('fill', this.barColor);

      // Add title to graph
      if (this.title) {
        this.svg.append('text')
          .attr('x', 0)
          .attr('y', -40)
          .attr('text-anchor', 'center')
          .style('font-size', '22px')
          .text(this.title);
      }

      // Add subtitle to graph
      if (this.description) {
        this.svg.append('text')
          .attr('x', 0)
          .attr('y', -20)
          .attr('text-anchor', 'center')
          .style('font-size', '14px')
          .style('fill', 'grey')
          .style('max-width', 400)
          .text(this.description);
      }
    });
  }

  ngOnInit(): void {
  }

  private checkInputs(): void {
    this.description = this.description ? this.description : null;
    this.title = this.title ? this.title : null;
    this.url = this.url ? this.url : 'https://raw.githubusercontent.com/diveshpanwar/d3-graph-data/master/bar-chart.csv';
    this.margin = this.margin ? this.margin : { top: 60, right: 30, bottom: 70, left: 60 };
    this.width = this.width ? this.width : 400 - this.margin.left - this.margin.right;
    this.height = this.height ? this.height : 460 - this.margin.top - this.margin.bottom;
    this.barColor = this.barColor ? this.barColor : '#69b3a2';
    this.keyColumnName = this.keyColumnName ? this.keyColumnName : 'Country';
    this.valueColumnName = this.valueColumnName ? this.valueColumnName : 'Value';
    this.xlow = this.xlow ? this.xlow : 0;
    this.xhigh = this.xhigh ? this.xhigh : this.width;
    this.ylow = this.ylow ? this.ylow : 0;
    this.yhigh = this.yhigh ? this.yhigh : 13000;
  }

}
