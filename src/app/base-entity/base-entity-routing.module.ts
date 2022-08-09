import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseentityComponent } from './baseentity/baseentity.component';

const routes: Routes = [
  { path: 'baseentity', component:BaseentityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseEntityRoutingModule { }
