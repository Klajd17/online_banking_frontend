import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatIconModule,
  ]
})
export class CoreModule { }
