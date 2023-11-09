import { Injectable } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserModel} from "../models/models";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {GlobalConstants} from "../../shared/cons/global-constants";

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
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      // 17
    });
  }

  public forgotPassword(data: any) {
    return this.httpClient.post(this.url + 'users/forgotPassword', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    });
  }

  checkToken(){

  }



  initLoginFG(): FormGroup {
    return this.fb.group({
      username: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      password: [null, [Validators.required]]
    });
  }

}


