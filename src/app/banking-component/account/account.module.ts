import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ManageAccountComponent } from './components/manage-account/manage-account.component';
import {RouterModule} from "@angular/router";
import {MaterialRoutes} from "../banking.routing";
// import {SharedModule} from "../../shared/shared.module";
// import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatPaginatorModule} from "@angular/material/paginator";
import { AccountComponent } from './dialogs/account/account.component';
import { TransactionDialogComponent } from './dialogs/transaction-dialog/transaction-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ManageAccountComponent,
    AccountComponent,
    TransactionDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    AccountRoutingModule,
    // MatCardModule,
    // SharedModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
