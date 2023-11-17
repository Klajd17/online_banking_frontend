import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../../core/models/models";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  // @ts-ignore
  user: UserModel = JSON.parse(localStorage.getItem('user'));
  constructor() { }

  ngOnInit(): void {
  }

}
