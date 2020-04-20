import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapSpeedViewComponent } from './map-speed-view/map-speed-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MapSpeedViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapSpeedViewComponent
      }
    ])
  ],
  exports: [MapSpeedViewComponent]
})
export class SpeedDeviationsModule {}
