import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {AccountModel} from "../models/account-model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = environment.API_HOST;
  constructor(private httpClient:HttpClient) { }

  add(data: AccountModel) {
    return this.httpClient.post(this.url + 'accounts/add', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  update(id: number, data: AccountModel) {
    return this.httpClient.patch(`${this.url}/update/${id}`, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  getAccounts(): Observable<AccountModel[]> {
    return this.httpClient.get<AccountModel[]>(`${this.url}accounts/all`);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.url}delete/${id}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

}
