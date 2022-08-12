import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { CourtChargeRoutingModule } from './court-charge-routing.module';
import { CourtchargeComponent } from './courtcharge/courtcharge.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CourtchargeComponent
  ],
  imports: [
    CommonModule,
    CourtChargeRoutingModule,
    SharedModule,
    MatListModule
  ],

  exports: []
})
export class CourtChargeModule { }
