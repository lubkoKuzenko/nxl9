import { NgModule } from '@angular/core';

import { SpeedDeviationsModule } from '@nxl9/speed-deviations';

@NgModule({
  imports: [SpeedDeviationsModule],
  exports: [SpeedDeviationsModule]
})
export class LazySpeedDeviationsModule {}
