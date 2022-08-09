import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BailRoutingModule } from './bail-routing.module';
import { BailComponent } from './bail/bail.component';


@NgModule({
  declarations: [
    BailComponent
  ],
  imports: [
    CommonModule,
    BailRoutingModule
  ],

  exports: []
})
export class BailModule { }
