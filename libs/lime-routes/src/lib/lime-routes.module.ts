import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapLimeViewComponent } from './map-lime-view/map-lime-view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MapLimeViewComponent],
  exports: [MapLimeViewComponent]
})
export class LimeRoutesModule {}
