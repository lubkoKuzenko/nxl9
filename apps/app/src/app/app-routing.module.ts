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
    loadChildren: () =>
      import('./modules/lime-routes.module').then(m => m.LazyLimeRoutesModule)
  },
  {
    path: 'speed',
    loadChildren: () =>
      import('./modules/speed-deviation.module').then(
        m => m.LazySpeedDeviationsModule
      )
  },
  {
    path: 'emission',
    loadChildren: () =>
      import('./modules/emission-deviation.module').then(
        m => m.LazyEmissionDeviationsModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
