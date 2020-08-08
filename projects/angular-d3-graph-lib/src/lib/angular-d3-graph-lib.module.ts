import { NgModule } from '@angular/core';
import { AngularD3GraphLibComponent } from './angular-d3-graph-lib.component';
import { HeatMapComponent } from './components/heat-map/heat-map.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';



@NgModule({
  declarations: [AngularD3GraphLibComponent, HeatMapComponent, BarChartComponent],
  imports: [
  ],
  exports: [AngularD3GraphLibComponent, HeatMapComponent, BarChartComponent]
})
export class AngularD3GraphLibModule { }
