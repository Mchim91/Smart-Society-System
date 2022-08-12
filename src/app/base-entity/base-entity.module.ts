import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseEntityRoutingModule } from './base-entity-routing.module';
import { BaseentityComponent } from './baseentity/baseentity.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BaseentityComponent
  ],
  imports: [
    CommonModule,
    BaseEntityRoutingModule,
    SharedModule
  ],

  exports: []
})
export class BaseEntityModule { }
