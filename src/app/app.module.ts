import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { StartingViewComponent } from './starting-view/starting-view.component';
import { OverviewAttractionsComponent } from './overview-attractions/overview-attractions.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    StartingViewComponent,
    OverviewAttractionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
