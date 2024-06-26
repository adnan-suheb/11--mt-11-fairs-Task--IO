import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FairsDashComponent } from './shared/component/fairs-dash/fairs-dash.component';
import { FairsCardComponent } from './shared/component/fairs-card/fairs-card.component';
import { FairsDetailsComponent } from './shared/component/fairs-details/fairs-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FairsDashComponent,
    FairsCardComponent,
    FairsDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
