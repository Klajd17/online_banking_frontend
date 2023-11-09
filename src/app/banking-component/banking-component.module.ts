import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './dialog/confirmation/confirmation.component';
import { ChangePasswordComponent } from './dialog/change-password/change-password.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    ConfirmationComponent,
    ChangePasswordComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
    ]
})
export class BankingComponentModule { }
