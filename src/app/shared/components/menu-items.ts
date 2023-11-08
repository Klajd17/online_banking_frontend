import {Injectable} from '@angular/core';

export interface Menu{
  state: string;
  name: string;
  icon: string;
  role: string;
}

const MENUITEMS = [
  {state: 'dashboard', name: 'Dashboard', icon: 'dashboard', role: ''},
  {state: 'accounts', name: 'Manage Accounts', icon: 'account_balance', role: 'admin'},
  {state: 'transactions', name: 'Manage Transactions', icon: 'inventory_2', role: 'admin'},
  {state: 'cards', name: 'Manage Cards', icon: 'credit_card', role: 'admin'},
];

@Injectable()
export class MenuItems{
  getMenuitem(): Menu[]{
    return MENUITEMS;
  }
}
