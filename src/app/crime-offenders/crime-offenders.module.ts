import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrimeOffendersRoutingModule } from './crime-offenders-routing.module';
import { CrimeOffendersComponent } from './crime-offenders/crime-offenders.component';


@NgModule({
  declarations: [
    CrimeOffendersComponent
  ],
  imports: [
    CommonModule,
    CrimeOffendersRoutingModule
  ],

  exports: []
})
export class CrimeOffendersModule { }
