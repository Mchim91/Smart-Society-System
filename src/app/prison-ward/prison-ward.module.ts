import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrisonWardRoutingModule } from './prison-ward-routing.module';
import { PrisonwardComponent } from './prisonward/prisonward.component';


@NgModule({
  declarations: [
    PrisonwardComponent
  ],
  imports: [
    CommonModule,
    PrisonWardRoutingModule
  ],

  exports: []
})
export class PrisonWardModule { }
