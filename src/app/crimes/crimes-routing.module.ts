import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrimesComponent } from './crimes/crimes.component';

const routes: Routes = [
  {
    path: 'crimes', component: CrimesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrimesRoutingModule { }
