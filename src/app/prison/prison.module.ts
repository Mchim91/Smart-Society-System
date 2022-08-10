import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrisonRoutingModule } from './prison-routing.module';
import { PrisonComponent } from './prison/prison.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PrisonComponent
  ],
  imports: [
    CommonModule,
    PrisonRoutingModule,SharedModule
  ],

  exports: []
})
export class PrisonModule { }
