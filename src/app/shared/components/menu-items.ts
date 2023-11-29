import {Injectable} from '@angular/core';

export interface Menu{
  state: string;
  name: string;
  icon: string;
  role: string;
}

const MENUITEMS = [
  {state: 'dashboard', name: 'Dashboard', icon: 'dashboard', role: ''},
  {state: 'account', name: 'Accounts', icon: 'account_balance', role: 'ADMIN'},
  {state: 'transaction', name: 'Transactions History', icon: 'inventory_2', role: 'ADMIN'},
  {state: 'card', name: 'Manage Cards', icon: 'credit_card', role: 'ADMIN'},
];

@Injectable()
export class MenuItems{
  getMenuitem(): Menu[]{
    return MENUITEMS;
  }
}
