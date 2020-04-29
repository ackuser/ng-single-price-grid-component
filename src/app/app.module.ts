import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SinglePriceGridComponent } from './single-price-grid/single-price-grid.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SinglePriceGridComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
