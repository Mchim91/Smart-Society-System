import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrimeOffendersComponent } from './crime-offenders/crime-offenders.component';

const routes: Routes = [
  {
    path: 'crimeOffenders', component: CrimeOffendersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrimeOffendersRoutingModule { }
