import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { SharedModule} from "../shared/shared.module";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
  imports: [
    CommonModule,
    // FlexLayoutModule,
    RouterModule.forChild(DashboardRoutes),
    SharedModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
