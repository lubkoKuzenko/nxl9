import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lime',
  },
  {
    path: 'lime',
    loadChildren: () =>
      import('./modules/lime-routes.module').then(
        (m) => m.LazyLimeRoutesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
