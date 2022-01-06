import { NgModule } from '@angular/core';

import { EmissionDeviationsModule } from '@nxl9/emission-deviations';

@NgModule({
  imports: [EmissionDeviationsModule],
  exports: [EmissionDeviationsModule],
})
export class LazyEmissionDeviationsModule {}
