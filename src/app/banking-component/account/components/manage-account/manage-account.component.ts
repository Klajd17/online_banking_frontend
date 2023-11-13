import {Component, OnInit, ViewChild} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {MatDialog} from "@angular/material/dialog";
import {SnackbarService} from "../../../../core/services/snackbar.service";
import {Router} from "@angular/router";
import {AccountModel} from "../../models/account-model";
import {MatTableDataSource} from "@angular/material/table";
import {GlobalConstants} from "../../../../shared/cons/global-constants";
import {AccountModule} from "../../account.module";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent implements OnInit {
  displayedColumns: string[] = ['accountNumber','accountType','balance', 'edit'];
  accountList: AccountModel[] = [];
  dataSource: any;
  responseMessage: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private accountService: AccountService, private ngxService: NgxUiLoaderService, private dialog: MatDialog,
              private snackbarService: SnackbarService, private router: Router) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.tableData();
  }

  tableData() {
    this.accountService.getAccounts().subscribe({
      next: (response: AccountModel[]) => {
        this.ngxService.stop();
        this.accountList = response;
        console.log(this.accountList);

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

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleEditAction(element:any) {

  }
}
