import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { ManageCardsComponent } from './components/manage-cards/manage-cards.component';


@NgModule({
  declarations: [
    ManageCardsComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule
  ]
})
export class CardModule { }
