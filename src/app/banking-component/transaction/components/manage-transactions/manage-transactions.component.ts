import {Component, OnInit, ViewChild} from '@angular/core';
import {AccountModel} from "../../../account/models/account-model";
import {MatPaginator} from "@angular/material/paginator";
import {AccountService} from "../../../account/services/account.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SnackbarService} from "../../../../core/services/snackbar.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {GlobalConstants} from "../../../../shared/cons/global-constants";
import {AccountComponent} from "../../../account/dialogs/account/account.component";
import {TransactionDialogComponent} from "../../../account/dialogs/transaction-dialog/transaction-dialog.component";
import {TransactionModel} from "../../models/transaction-model";
import {TransactionService} from "../../services/transaction.service";

@Component({
  selector: 'app-manage-transactions',
  templateUrl: './manage-transactions.component.html',
  styleUrls: ['./manage-transactions.component.scss']
})
export class ManageTransactionsComponent implements OnInit {

  displayedColumns: string[] = ['transactionId','transactionType','amount','currency','fromAccountId','toAccountId', 'edit'];
  transactionList: TransactionModel[] = [];
  dataSource: any;
  responseMessage: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private transactionService: TransactionService, private ngxService: NgxUiLoaderService, private dialog: MatDialog,
              private snackbarService: SnackbarService, private router: Router) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.tableData();
  }

  tableData() {
    this.transactionService.getTransactions().subscribe({
      next: (response: TransactionModel[]) => {
        this.ngxService.stop();
        this.transactionList = response;
        console.log(this.transactionList);

        // Use MatTableDataSource with paginator
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
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

  handleAddAction(){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width = '550px';
    this.dialog.open(AccountComponent, dialogConfig)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleEditAction(element:any) {

  }

  handleTransaction(){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.width = '550px';
    this.dialog.open(TransactionDialogComponent, dialogConfig)
  }

}
