import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrisonComponent } from './prison/prison/prison.component';
import { ModalComponent } from './shared/modal/modal.component';

const routes: Routes = [{path:'',component:PrisonComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

