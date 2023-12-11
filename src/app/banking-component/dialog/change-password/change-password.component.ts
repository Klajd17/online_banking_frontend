import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../core/services/login.service";
import {MatDialogRef} from "@angular/material/dialog";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {SnackbarService} from "../../../core/services/snackbar.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm : FormGroup = new FormGroup({});
  responseMessage: any;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService,
              public dialogRef: MatDialogRef<ChangePasswordComponent>,
              private ngxService: NgxUiLoaderService,
              private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.initChangePasswordFG();
  }

  validateSubmit() {
    if (this.changePasswordForm.controls['newPassword'].value !== this.changePasswordForm.controls['confirmPassword'].value) {
      return true;
    } else {
      return true;
    }
  }

  initChangePasswordFG(){
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    });
  }

  handleChangePasswordSubmit(){

  }


}
