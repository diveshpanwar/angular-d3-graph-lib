import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularD3GraphLibComponent } from './angular-d3-graph-lib.component';
import { HeatMapComponent } from './components/heat-map/heat-map.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BubbleChartComponent } from './components/bubble-chart/bubble-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { DensityChartComponent } from './components/density-chart/density-chart.component';



@NgModule({
  declarations: [
    AngularD3GraphLibComponent,
    HeatMapComponent,
    BarChartComponent,
    BubbleChartComponent,
    PieChartComponent,
    DensityChartComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    AngularD3GraphLibComponent,
    HeatMapComponent,
    BarChartComponent,
    BubbleChartComponent,
    PieChartComponent,
    DensityChartComponent
  ]
})
export class AngularD3GraphLibModule { }
