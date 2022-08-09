import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BailComponent } from './bail/bail.component';

const routes: Routes = [
  { path: 'bail', component: BailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BailRoutingModule { }
