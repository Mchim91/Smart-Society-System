import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourtchargeComponent } from './courtcharge/courtcharge.component';

const routes: Routes = [
  {
    path: 'courtcharge', component: CourtchargeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourtChargeRoutingModule { }
