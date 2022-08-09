import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CauseofcrimeComponent } from './causeofcrime/causeofcrime.component';

const routes: Routes = [
  {
    path: 'causeofcrime', component: CauseofcrimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CauseOfCrimeRoutingModule { }
