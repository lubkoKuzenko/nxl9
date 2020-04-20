import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'lime',
    loadChildren: './modules/lime-routes.module#LazyLimeRoutesModule'
  },
  {
    path: 'speed',
    loadChildren: './modules/speed-deviation.module#LazySpeedDeviationsModule'
  },
  {
    path: 'emission',
    loadChildren:
      './modules/emission-deviation.module#LazyEmissionDeviationsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
