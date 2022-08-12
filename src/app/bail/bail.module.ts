import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { BailRoutingModule } from './bail-routing.module';
import { BailComponent } from './bail/bail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BailComponent
  ],
  imports: [
    CommonModule,
    BailRoutingModule,
    MatListModule,
    SharedModule
  ],

  exports: []
})
export class BailModule { }
