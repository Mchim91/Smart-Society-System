import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorrectionCentersRoutingModule } from './correction-centers-routing.module';
import { CorrectioncentersComponent } from './correctioncenters/correctioncenters.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CorrectioncentersComponent
  ],
  imports: [
    CommonModule,
    CorrectionCentersRoutingModule,
    SharedModule
  ],

  exports: []
})
export class CorrectionCentersModule { }
