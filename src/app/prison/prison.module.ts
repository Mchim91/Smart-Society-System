import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrisonRoutingModule } from './prison-routing.module';
import { PrisonComponent } from './prison/prison.component';


@NgModule({
  declarations: [
    PrisonComponent
  ],
  imports: [
    CommonModule,
    PrisonRoutingModule
  ],

  exports: []
})
export class PrisonModule { }
