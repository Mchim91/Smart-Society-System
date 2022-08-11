import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffendersComponent } from './offenders/offenders.component';

const routes: Routes = [
  {
    path: 'offenders', component: OffendersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffendersRoutingModule { }
