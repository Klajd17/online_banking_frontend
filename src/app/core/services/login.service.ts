import { Injectable } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserModel} from "../models/models";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.API_HOST;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }


  public signUp(user: UserModel): Observable<any> {
    return this.httpClient.post(this.url + 'users/register', user, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    });
  }

  public login(data: any) {
    return this.httpClient.post(this.url + 'users/login', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  initLoginFG(): FormGroup {
    return this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

}


