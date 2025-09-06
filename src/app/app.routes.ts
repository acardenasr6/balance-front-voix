import { Routes } from '@angular/router';
import { AccountTypeComponent } from './components/account-type/account-type.component';
import { AccountComponent } from './components/account.component/account.component';
import { BalanceOverview } from './components/balance-overview/balance-overview';

export const routes: Routes = [
  {
    path: 'balance-overview',
    component: BalanceOverview // Cambia por el componente real de Analytics
  },
  {
    path: 'accounts/types',
    component: AccountTypeComponent // Cambia por el componente real de Overview
  },
  {
    path: 'accounts',
    component: AccountComponent 
  },
  {
    path: 'accounts/balance',
    component: AccountTypeComponent // Cambia por el componente real de Balance
  },
  {
    path: 'accounts/transactions',
    component: AccountTypeComponent // Cambia por el componente real de Transactions
  },
  {
    path: 'reports/financial',
    component: AccountTypeComponent // Cambia por el componente real de Financial Reports
  },
  {
    path: 'reports/export',
    component: AccountTypeComponent // Cambia por el componente real de Export Data
  },
  {
    path: 'settings/profile',
    component: AccountTypeComponent // Cambia por el componente real de Profile
  },
  {
    path: 'settings/preferences',
    component: AccountTypeComponent // Cambia por el componente real de Preferences
  },
  {
    path: '',
    redirectTo: 'dashboard/analytics',
    pathMatch: 'full'
  }
];