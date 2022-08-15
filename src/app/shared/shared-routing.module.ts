import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { CrimeOffendersComponent } from '../crime-offenders/crime-offenders/crime-offenders.component';
import { OffendersComponent } from '../offenders/offenders/offenders.component';


const routes: Routes = [
  // {path: 'offenders/:id', component: AppComponent,}
  ]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
