import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, } from '@angular/material/list';

import { OffendersRoutingModule } from './offenders-routing.module';
import { OffendersComponent } from './offenders/offenders.component';
import { SharedModule } from '../shared/shared.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    OffendersComponent,
  ],
  imports: [
    CommonModule,
    OffendersRoutingModule,
    SharedModule,
    MatListModule,MatSlideToggleModule
  ],

  exports: [],
})
export class OffendersModule { }
