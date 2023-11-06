import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import { FullComponent } from './components/layouts/full/full.component';
import { HeaderComponent } from './components/layouts/full/header/header/header.component';
import { SidebarComponent } from './components/layouts/full/sidebar/sidebar.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    NavigationComponent,
    HomeComponent,
    FullComponent,
    HeaderComponent,
    SidebarComponent
  ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        MatIconModule,
        MatToolbarModule,
        MatDialogModule,
        MatInputModule,
        SharedModule,
        HttpClientModule,
    ]
})
export class CoreModule { }
