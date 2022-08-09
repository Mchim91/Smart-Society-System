import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrimesRoutingModule } from './crimes-routing.module';
import { CrimesComponent } from './crimes/crimes.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CrimesComponent
  ],
  imports: [
    CommonModule,
    CrimesRoutingModule,
    SharedModule
  ],

  exports: []
})
export class CrimesModule { }
