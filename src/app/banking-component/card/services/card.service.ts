import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AccountModel} from "../../account/models/account-model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  url = environment.API_HOST;
  constructor(private httpClient:HttpClient) { }

  getCards(): Observable<AccountModel[]> {
    return this.httpClient.get<AccountModel[]>(`${this.url}cards/all`);
  }
}
