import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseEntityRoutingModule } from './base-entity-routing.module';
import { BaseentityComponent } from './baseentity/baseentity.component';


@NgModule({
  declarations: [
    BaseentityComponent
  ],
  imports: [
    CommonModule,
    BaseEntityRoutingModule
  ],

  exports: []
})
export class BaseEntityModule { }
