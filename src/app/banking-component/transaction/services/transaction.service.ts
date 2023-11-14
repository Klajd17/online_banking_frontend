import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {AccountModel} from "../../account/models/account-model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {TransactionModel} from "../models/transaction-model";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url = environment.API_HOST;
  constructor(private httpClient:HttpClient) { }

  add(data: TransactionModel) {
    return this.httpClient.post(this.url + 'transactions/add/', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  update(id: number, data: TransactionModel) {
    return this.httpClient.patch(`${this.url}/update/${id}`, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  getTransactions(): Observable<TransactionModel[]> {
    return this.httpClient.get<TransactionModel[]>(`${this.url}transactions/all`);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.url}delete/${id}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
}
