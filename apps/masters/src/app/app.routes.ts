import { Route } from '@angular/router';
import { LoansComponent } from './loans/loans.component';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
  },
];
