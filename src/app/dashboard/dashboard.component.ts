import { Component, OnInit } from '@angular/core';
import {UserModel} from "../core/models/models";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {MatDialog} from "@angular/material/dialog";
import {SnackbarService} from "../core/services/snackbar.service";
import {Router} from "@angular/router";
import {DashboardService} from "./services/dashboard.service";
import {AccountModel} from "../banking-component/account/models/account-model";
import {GlobalConstants} from "../shared/cons/global-constants";
import {DashboardModel} from "./models/dashboard";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // @ts-ignore
  user: UserModel = JSON.parse(localStorage.getItem('user'));
  dashboardData: any;
  responseMessage: any;
  constructor(private dashboardService: DashboardService, private ngxService: NgxUiLoaderService, private dialog: MatDialog,
              private snackbarService: SnackbarService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.user)
    this.getDashboardData()
  }

  getDashboardData() {
    this.ngxService.start();

    this.dashboardService.getDashboardData().subscribe({
      next: (response: DashboardModel) => {
        this.ngxService.stop();
        this.dashboardData = response;
        console.log(this.dashboardData);
      },
      error: (error) => {
        this.ngxService.stop();

        if (error.status === 401) {
        } else if (error.error?.message) {
          this.responseMessage = error.error.message;
        } else {
          this.responseMessage = 'An error occurred. Please try again later.';
        }

        this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
      }
    });
  }



}
