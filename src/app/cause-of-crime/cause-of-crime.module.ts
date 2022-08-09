import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CauseOfCrimeRoutingModule } from './cause-of-crime-routing.module';
import { CauseofcrimeComponent } from './causeofcrime/causeofcrime.component';


@NgModule({
  declarations: [
    CauseofcrimeComponent
  ],
  imports: [
    CommonModule,
    CauseOfCrimeRoutingModule
  ],
  exports: []
})
export class CauseOfCrimeModule { }
