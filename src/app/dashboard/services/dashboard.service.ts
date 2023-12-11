import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserModel} from "../../core/models/models";
import {Observable} from "rxjs";
import {DashboardModel} from "../models/dashboard";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private url = environment.API_HOST;

  constructor(private httpClient: HttpClient) { }

  public getDashboardData(): Observable<DashboardModel> {
    return this.httpClient.get<DashboardModel>(this.url + 'dashboard/');
  }
}
