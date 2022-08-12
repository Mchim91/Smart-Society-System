import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffendersRoutingModule } from './offenders-routing.module';
import { OffendersComponent } from './offenders/offenders.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OffendersComponent
  ],
  imports: [
    CommonModule,
    OffendersRoutingModule,SharedModule
  ],

  exports: []
})
export class OffendersModule { }
