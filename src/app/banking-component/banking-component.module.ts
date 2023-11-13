import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './dialog/confirmation/confirmation.component';
import { ChangePasswordComponent } from './dialog/change-password/change-password.component';
import {SharedModule} from "../shared/shared.module";
import {MaterialRoutes} from "./banking.routing";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ConfirmationComponent,
    ChangePasswordComponent
  ],
    imports: [
      CommonModule,
      SharedModule,
      RouterModule.forChild(MaterialRoutes),
    ]
})
export class BankingComponentModule { }
