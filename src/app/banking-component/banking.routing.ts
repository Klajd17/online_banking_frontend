import {Routes} from "@angular/router";
import {RouteGuardService} from "../core/services/route-guard.service";
import {ManageAccountComponent} from "./account/components/manage-account/manage-account.component";

export const MaterialRoutes: Routes = [
  {
    path: 'account',
    component: ManageAccountComponent ,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin']
    }
  },
  {
    path: 'account',
    component: ManageAccountComponent ,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin']
    }
  },
  {
    path: 'account',
    component: ManageAccountComponent ,
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin']
    }
  }
];
