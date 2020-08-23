import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import * as d3 from 'd3';
import * as d3Chromatic from 'd3-scale-chromatic';
import { HttpClient } from '@angular/common/http';
import { tickStep } from 'd3';

@Component({
  selector: 'lib-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, AfterViewInit {

  @Input() url: string;
  @Input() description: string;
  @Input() title: string;
  @Input() margin: any;
  @Input() width: number;
  @Input() height: number;
  @Input() prefixLabelName: string;
  @Input() radius: number;

  svg = null;
  info = null;
  // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.


  ngAfterViewInit(): void {
  }

  constructor(private http: HttpClient) {
    this.checkInputs();
    this.http.get(this.url).subscribe(res => {
      this.plotChart(res);
    }, err => {
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

  private checkInputs(): void {
    this.description = this.description ? this.description : 'PIE CHART DESCRIPTION';
    this.title = this.title ? this.title : 'PIE CHART TITLE';
    this.url = this.url ? this.url : 'https://raw.githubusercontent.com/diveshpanwar/d3-graph-data/master/pie-chart.json';
    this.margin = this.margin ? this.margin : 40;
    this.width = this.width ? this.width : 450;
    this.height = this.height ? this.height : 450;
    this.prefixLabelName = this.prefixLabelName ? this.prefixLabelName : null;
    this.radius = Math.min(this.width, this.height) / 2 - this.margin;
  }

  plotChart(data: any): void {
    // append the svg object to the div called 'my_dataviz'
    this.svg = d3.select('#pie-chart')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');

    // Add title to graph
    if (this.title) {
      d3.select('#pie-chart').append('div').append('text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('text-anchor', 'center')
        .style('font-size', '22px')
        .text(this.title);
    }

    // Add subtitle to graph
    if (this.description) {
      d3.select('#pie-chart').append('div').append('text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('text-anchor', 'center')
        .style('font-size', '14px')
        .style('fill', 'grey')
        .style('max-width', 400)
        .text(this.description);
    }


    // Create dummy data
    const datas = Object.keys(data);
    // set the color scale
    const color = d3.scaleOrdinal()
      .domain(datas)
      .range(['#e83e8c', '#fd7e14', '#ffc107', '#007bff', '#28a745']);

    // Compute the position of each group on the pie:
    const pie = d3.pie()
      .value((d: any) => d.value);
    const dataReady = pie(d3.entries(data));
    // Now I know that group A goes from 0 degrees to x degrees and so on.

    // shape helper to build arcs:
    const arcGenerator = d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius);

    const mouseover = (d) => {
      this.info = d;
    };
    const mouseleave = (d) => {
      this.info = null;
    };
    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    this.svg
      .selectAll('mySlices')
      .data(dataReady)
      .enter()
      .append('path')
      .attr('d', arcGenerator)
      .attr('fill', function (d) { return (color(d.data.key)); })
      .attr('stroke', 'black')
      .style('stroke-width', '2px')
      .style('opacity', 0.7)
      .on('mouseover', mouseover)
      .on('mouseleave', mouseleave);

    // Now add the annotation. Use the centroid method to get the best coordinates
    this.svg
      .selectAll('mySlices')
      .data(dataReady)
      .enter()
      .append('text')
      .html((d) => (this.prefixLabelName ? this.prefixLabelName : '') + d.data.key + ':' + d.data.value)
      .attr('transform', (d) => 'translate(' + arcGenerator.centroid(d) + ')')
      .style('text-anchor', 'middle')
      .style('font-size', 17);
  }

}
