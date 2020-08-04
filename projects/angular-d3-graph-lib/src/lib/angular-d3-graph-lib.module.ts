import { NgModule } from '@angular/core';
import { AngularD3GraphLibComponent } from './angular-d3-graph-lib.component';
import { HeatMapComponent } from './components/heat-map/heat-map.component';



@NgModule({
  declarations: [AngularD3GraphLibComponent, HeatMapComponent],
  imports: [
  ],
  exports: [AngularD3GraphLibComponent, HeatMapComponent]
})
export class AngularD3GraphLibModule { }
