import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrectioncentersComponent } from './correctioncenters/correctioncenters.component';

const routes: Routes = [
  {
    path:'correctioncenters', component: CorrectioncentersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorrectionCentersRoutingModule { }
