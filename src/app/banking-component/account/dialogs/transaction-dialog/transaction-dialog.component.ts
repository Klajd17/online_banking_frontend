import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AccountService} from "../../services/account.service";
import {SnackbarService} from "../../../../core/services/snackbar.service";
import {MatDialogRef} from "@angular/material/dialog";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {GlobalConstants} from "../../../../shared/cons/global-constants";
import {TransactionStatus, TransactionType} from "../../models/transaction-create-model";
import {TransactionService} from "../../../transaction/services/transaction.service";

@Component({
  selector: 'app-transaction-dialog',
  templateUrl: './transaction-dialog.component.html',
  styleUrls: ['./transaction-dialog.component.scss']
})
export class TransactionDialogComponent implements OnInit {
  transactionForm: FormGroup = new FormGroup({});
  protected readonly Object = Object;
  transactionTypes = Object.values(TransactionType) as string[];
  transactionStatuses = Object.values(TransactionStatus) as string[];
  responseMessage: any;
  step: number = 1;
  // @ts-ignore
  user:any = JSON.parse(localStorage.getItem('user'));
  balance:any = 0.00;

  constructor(private formBuilder: FormBuilder, private router: Router, private transactionService: TransactionService,
              private snackbarService: SnackbarService, private dialogRef: MatDialogRef<TransactionDialogComponent>,
              private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.initCreateTransactionFG();
    console.log(this.user.userId)
  }

  handleTransactionSubmit(){
    this.ngxService.start();
    const formData = { ...this.transactionForm.value, userId: this.user.userId};
    this.transactionService.add(formData).subscribe({
      next: (response: any) => {
        this.ngxService.stop();
        this.dialogRef.close();
        console.log(response.message)
        this.responseMessage = response.message;
        this.snackbarService.openSnackBar(this.responseMessage, 'success');
      },
      error: (error) => {
        console.error('Error:',JSON.stringify(error) );
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

  initCreateTransactionFG(){
    this.transactionForm = this.formBuilder.group({
      userId: [this.user.userId, Validators.required],
      fromAccountId: [null, Validators.required],
      toAccountId: [null, Validators.required],
      amount: [null, [Validators.required, Validators.min(0)]],
      currency: [null, Validators.required],
      transactionType: [null, Validators.required],
      status: [null, Validators.required],
    });
  }

  nextStep() {
    this.step = 2;
  }

  prevStep() {
    this.step = 1;
    console.log(this.step)
  }
}
