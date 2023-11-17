import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "../../services/login.service";
import {MatDialogRef} from "@angular/material/dialog";
import {GlobalConstants} from "../../../shared/cons/global-constants";
import {Router} from "@angular/router";
import {SnackbarService} from "../../services/snackbar.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {MOCK_TOKEN} from "../../../shared/components/mock-token";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  responseMessage:any;
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService,
              private snackbarService: SnackbarService, private dialogRef: MatDialogRef<LoginComponent>,
              private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.initLoginFG();
  }

  initLoginFG() {
    this.loginForm = this.loginService.initLoginFG();
  }

  handleSubmit(){
    this.ngxService.start();
    const formData = this.loginForm.value;
    this.loginService.login(formData).subscribe({
      next: (response: any) => {
        this.ngxService.stop();
        this.dialogRef.close();
        console.log(response)
        localStorage.setItem('token', MOCK_TOKEN);
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/online-banking/dashboard'])
      },
      error: (error) => {
        this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
      }
    });
  }

}
