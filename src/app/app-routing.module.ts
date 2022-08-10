import { NgModule } from '@angular/core';
import { MatSidenavContent } from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [{path:'',component:DashboardHomeComponent}
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
