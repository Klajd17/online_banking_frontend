import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() { }
  private sharedValue: any;

  setLoginValue(value: any): void {
    this.sharedValue = value;
  }

  getLoginValue(): any {
    return this.sharedValue;
  }
}
