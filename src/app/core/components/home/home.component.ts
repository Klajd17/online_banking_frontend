import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";
import {SignupComponent} from "../signup/signup.component";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
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
     alert('Forgot Password')
    //Loader Test
    // this.ngxService.start()
  }

}
