import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorrectionCentersRoutingModule } from './correction-centers-routing.module';
import { CorrectioncentersComponent } from './correctioncenters/correctioncenters.component';


@NgModule({
  declarations: [
    CorrectioncentersComponent
  ],
  imports: [
    CommonModule,
    CorrectionCentersRoutingModule
  ],

  exports: []
})
export class CorrectionCentersModule { }
