import { Component, OnInit } from '@angular/core';
import {UserModel} from "../core/models/models";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // @ts-ignore
  user: UserModel = JSON.parse(localStorage.getItem('user'));
  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

}
