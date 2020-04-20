import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapEmissionViewComponent } from './map-emission-view/map-emission-view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MapEmissionViewComponent],
  exports: [MapEmissionViewComponent]
})
export class EmissionDeviationsModule {}
