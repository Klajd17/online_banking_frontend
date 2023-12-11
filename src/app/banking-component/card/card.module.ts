import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { ManageCardsComponent } from './components/manage-cards/manage-cards.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    ManageCardsComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class CardModule { }
