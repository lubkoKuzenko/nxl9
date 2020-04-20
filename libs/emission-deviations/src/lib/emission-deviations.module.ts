import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapEmissionViewComponent } from './map-emission-view/map-emission-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapEmissionViewComponent
      }
    ])
  ],
  declarations: [MapEmissionViewComponent],
  exports: [MapEmissionViewComponent]
})
export class EmissionDeviationsModule {}
