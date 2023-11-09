import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";
import {SignupComponent} from "../signup/signup.component";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {ForgotPasswordComponent} from "../forgot-password/forgot-password.component";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.checkToken();
  }

  loginAction(){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width = '550px';
    this.dialog.open(LoginComponent, dialogConfig)
  }

  signupAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    this.dialog.open(SignupComponent, dialogConfig);
  }

  forgotPasswordAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    this.dialog.open(ForgotPasswordComponent, dialogConfig);
  }

  checkToken(){
    if(localStorage.getItem('token') != null){
      this.router.navigate(['/online-banking/dashboard']);
      // this.loginService.checkToken().subscribe((response: any) => {
      //     this.router.navigate(['/online-banking/dashboard']);
      //   }, (error: any) => {
      //     console.log(error);
      //   }
      // );
    } else {
      alert('You have to log in');
      this.router.navigate(['/']);
    }

  }

}
