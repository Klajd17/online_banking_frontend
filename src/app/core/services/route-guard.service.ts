import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {ActivatedRouteSnapshot, Router} from "@angular/router";
import {SnackbarService} from "./snackbar.service";
import {GlobalConstants} from "../../shared/cons/global-constants";
import { jwtDecode } from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(public auth: AuthService, public router: Router, private snackbarService: SnackbarService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean{
    let expectedRoleArray = route.data;
    expectedRoleArray = expectedRoleArray['expectedRole'];
    const token: any = localStorage.getItem('token');
    let tokenPayload: any;
    try{
      tokenPayload = jwtDecode(token);
    }
    catch (err){
      localStorage.clear();
      this.router.navigate(['/']);
    }
    let checkRole = false;
    for(let i = 0; i < expectedRoleArray['length']; i++){
      if (expectedRoleArray[i] === tokenPayload.role){
        checkRole = true;
      }
    }
    // tslint:disable-next-line:triple-equals
    if (tokenPayload.role == 'user' || tokenPayload.role == 'admin'){
      if (this.auth.isAuthenticated() && checkRole){
        return true;
      }
      this.snackbarService.openSnackBar(GlobalConstants.unathorized, GlobalConstants.error);
      this.router.navigate(['/online-banking/dashboard']);
      return false;
    }
    else{
      this.router.navigate(['/']);
      localStorage.clear();
      return false;
    }
  }
}
