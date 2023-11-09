import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ManageAccountComponent } from './components/manage-account/manage-account.component';
import {RouterModule} from "@angular/router";
import {MaterialRoutes} from "../banking.routing";


@NgModule({
  declarations: [
    ManageAccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    AccountRoutingModule
  ]
})
export class AccountModule { }
