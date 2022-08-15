import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrimeOffendersComponent } from '../crime-offenders/crime-offenders/crime-offenders.component';
import { ResolverService } from '../crime-offenders/resolver.service';
import { OffendersComponent } from './offenders/offenders.component';

const routes: Routes = [
  {
    path: 'offenders', component: OffendersComponent

  },
  {path:'offenders/:id', component: CrimeOffendersComponent,
resolve:{crimeoffenders:ResolverService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffendersRoutingModule { }
