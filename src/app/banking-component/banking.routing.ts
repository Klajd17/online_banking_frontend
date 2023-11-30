import {Routes} from "@angular/router";
import {RouteGuardService} from "../core/services/route-guard.service";
import {ManageAccountComponent} from "./account/components/manage-account/manage-account.component";
import {ManageTransactionsComponent} from "./transaction/components/manage-transactions/manage-transactions.component";
import {ManageCardsComponent} from "./card/components/manage-cards/manage-cards.component";

export const MaterialRoutes: Routes = [
  {
    path: 'account',
    component: ManageAccountComponent ,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['ADMIN','USER']
    }
  },
  {
    path: 'transaction',
    component: ManageTransactionsComponent ,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['ADMIN','USER']
    }
  },
  {
    path: 'card',
    component: ManageCardsComponent ,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['ADMIN','USER']
    }
  }
];
