import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpeedDeviationsModule } from '@nxl9/speed-deviations';
import { EmissionDeviationsModule } from '@nxl9/emission-deviations';
import { LimeRoutesModule } from '@nxl9/lime-routes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SpeedDeviationsModule,
    EmissionDeviationsModule,
    LimeRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
