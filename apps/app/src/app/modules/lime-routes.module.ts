import { NgModule } from '@angular/core';

import { LimeRoutesModule } from '@nxl9/lime-routes';

@NgModule({
  imports: [LimeRoutesModule],
  exports: [LimeRoutesModule]
})
export class LazyLimeRoutesModule {}
