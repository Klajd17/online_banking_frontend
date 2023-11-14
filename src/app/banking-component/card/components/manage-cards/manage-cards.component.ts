import { Component, OnInit } from '@angular/core';
import {CardService} from "../../services/card.service";
import {AccountModel} from "../../../account/models/account-model";
import {MatTableDataSource} from "@angular/material/table";
import {GlobalConstants} from "../../../../shared/cons/global-constants";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {MatDialog} from "@angular/material/dialog";
import {SnackbarService} from "../../../../core/services/snackbar.service";
import {Router} from "@angular/router";
import {CardModule} from "../../card.module";

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.component.html',
  styleUrls: ['./manage-cards.component.scss']
})
export class ManageCardsComponent implements OnInit {
  cardsList:CardModule[]=[];
  responseMessage:any;
  constructor(private cardService: CardService,private ngxService: NgxUiLoaderService, private dialog: MatDialog,
              private snackbarService: SnackbarService, private router: Router) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.getAllCards();
  }

  getAllCards(){
    this.cardService.getCards().subscribe({
      next: (response: CardModule[]) => {
        this.ngxService.stop();
        this.cardsList = response;
        console.log(this.cardsList);
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
