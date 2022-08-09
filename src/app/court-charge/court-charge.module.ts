import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourtChargeRoutingModule } from './court-charge-routing.module';
import { CourtchargeComponent } from './courtcharge/courtcharge.component';


@NgModule({
  declarations: [
    CourtchargeComponent
  ],
  imports: [
    CommonModule,
    CourtChargeRoutingModule
  ],

  exports: []
})
export class CourtChargeModule { }
