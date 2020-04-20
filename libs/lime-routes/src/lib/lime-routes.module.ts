import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapLimeViewComponent } from './map-lime-view/map-lime-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapLimeViewComponent
      }
    ])
  ],
  declarations: [MapLimeViewComponent],
  exports: [MapLimeViewComponent]
})
export class LimeRoutesModule {}
