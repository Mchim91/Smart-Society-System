import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffencesRoutingModule } from './offences-routing.module';
import { OffencesComponent } from './offences/offences.component';


@NgModule({
  declarations: [
    OffencesComponent
  ],
  imports: [
    CommonModule,
    OffencesRoutingModule
  ],

  exports: []
})
export class OffencesModule { }
