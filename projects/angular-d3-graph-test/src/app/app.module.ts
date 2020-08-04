import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularD3GraphLibModule } from 'projects/angular-d3-graph-lib/src/lib/angular-d3-graph-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularD3GraphLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
