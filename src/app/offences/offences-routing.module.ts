import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffencesComponent } from './offences/offences.component';

const routes: Routes = [
  {
    path: 'offences', component: OffencesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffencesRoutingModule { }
