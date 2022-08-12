import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrimeOffendersRoutingModule } from './crime-offenders-routing.module';
import { CrimeOffendersComponent } from './crime-offenders/crime-offenders.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CrimeOffendersComponent
  ],
  imports: [
    CommonModule,
    CrimeOffendersRoutingModule,
    SharedModule
  ],

  exports: []
})
export class CrimeOffendersModule { }
