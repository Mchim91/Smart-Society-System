import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrisonwardComponent } from './prisonward/prisonward.component';

const routes: Routes = [
  {
    path: 'prisonward', component: PrisonwardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrisonWardRoutingModule { }
