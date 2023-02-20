import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '@ssmcl-mfe/shared';

export const appRoutes: Route[] = [
  {
    path: 'reports',
    loadChildren: () =>
      import('reports/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'approvals',
    loadChildren: () =>
      import('approvals/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'transactions',
    loadChildren: () =>
      import('transactions/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'masters',
    loadChildren: () =>
      import('masters/Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'manage',
    loadChildren: () =>
      import('./manage/manage.module').then((m) => m.ManageModule),
    canActivate: [AuthGuard],
  },
];
