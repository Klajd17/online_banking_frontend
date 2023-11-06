import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgxUiLoaderModule} from "ngx-ui-loader";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    NgxUiLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
