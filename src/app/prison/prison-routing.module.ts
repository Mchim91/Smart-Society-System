import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrisonComponent } from './prison/prison.component';

const routes: Routes = [
  {
    path: 'prison', component: PrisonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrisonRoutingModule { }
