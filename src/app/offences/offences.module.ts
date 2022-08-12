import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { OffencesRoutingModule } from './offences-routing.module';
import { OffencesComponent } from './offences/offences.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OffencesComponent
  ],
  imports: [
    CommonModule,
    OffencesRoutingModule,
    MatListModule,
    SharedModule
  ],

  exports: []
})
export class OffencesModule { }
