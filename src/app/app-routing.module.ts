import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./core/components/login/login.component";
import {SignupComponent} from "./core/components/signup/signup.component";
import {HomeComponent} from "./core/components/home/home.component";
import {FullComponent} from "./core/components/layouts/full/full.component";
import {RouteGuardService} from "./core/services/route-guard.service";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},

  {
    path: 'online-banking',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/online-banking/dashboard',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren:
          () => import('./banking-component/banking-component.module').then(m => m.BankingComponentModule),
        canActivate: [RouteGuardService],
        data:{
          expectedRole:['admin','user']
        }
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [RouteGuardService],
        data:{
          expectedRole:['admin']
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
