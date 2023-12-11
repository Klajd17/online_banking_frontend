import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../../../core/services/login.service";
import {SnackbarService} from "../../../../core/services/snackbar.service";
import {MatDialogRef} from "@angular/material/dialog";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {AccountService} from "../../services/account.service";
import {GlobalConstants} from "../../../../shared/cons/global-constants";
import {AccountModule} from "../../account.module";
import {AccountModel} from "../../models/account-model";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountForm: FormGroup = new FormGroup({});
  responseMessage: any;
  // @ts-ignore
  user:any = JSON.parse(localStorage.getItem('user'));
  balance:any = 0.00;

  constructor(private formBuilder: FormBuilder, private router: Router, private accountService: AccountService,
              private snackbarService: SnackbarService, private dialogRef: MatDialogRef<AccountComponent>,
              private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.initCreateAccountFG();
    console.log(this.user.userId)
  }

  handleAccountSubmit(){
    this.ngxService.start();
    const formData = { ...this.accountForm.value, userId: this.user.userId ,balance: this.balance};
    this.accountService.add(formData).subscribe({
      next: (response: any) => {
        this.ngxService.stop();
        this.dialogRef.close();
        console.log(response)
        this.responseMessage = response.message;
        this.snackbarService.openSnackBar(this.responseMessage, 'success');
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

  initCreateAccountFG(){
    this.accountForm = this.formBuilder.group({
      accountName: [null, [Validators.required]],
      currency: [null, [Validators.required]],
      accountType: [null, [Validators.required]],
    });
  }
}
