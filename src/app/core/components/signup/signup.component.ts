import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {SnackbarService} from "../../services/snackbar.service";
import {MatDialogRef} from "@angular/material/dialog";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {GlobalConstants} from "../../../shared/cons/global-constants";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({});
  responseMessage: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService,
              private snackbarService: SnackbarService, private dialogRef: MatDialogRef<SignupComponent>,
              private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.initSignUpFg();
  }

  initSignUpFg(){
    this.signupForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      fullName: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      address: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      phoneNumber: [null, [Validators.required, Validators.pattern(GlobalConstants.contactNumberRegex)]],
      password: [null, [Validators.required]]
    });
  }

  handleSubmit() {
    this.ngxService.start();
    const formData = this.signupForm.value;
    this.loginService.signUp(formData).subscribe({
      next: (response: any) => {
        this.ngxService.stop();
        this.dialogRef.close();
        console.log(response)
        this.responseMessage = response;
        this.snackbarService.openSnackBar(this.responseMessage, 'success');
        this.router.navigate(['/']);
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
