import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffendersRoutingModule } from './offenders-routing.module';
import { OffendersComponent } from './offenders/offenders.component';


@NgModule({
  declarations: [
    OffendersComponent
  ],
  imports: [
    CommonModule,
    OffendersRoutingModule
  ],

  exports: []
})
export class OffendersModule { }
