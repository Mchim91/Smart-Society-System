import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrisonWardRoutingModule } from './prison-ward-routing.module';
import { PrisonwardComponent } from './prisonward/prisonward.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PrisonwardComponent
  ],
  imports: [
    CommonModule,
    PrisonWardRoutingModule,SharedModule
  ],

  exports: []
})
export class PrisonWardModule { }
