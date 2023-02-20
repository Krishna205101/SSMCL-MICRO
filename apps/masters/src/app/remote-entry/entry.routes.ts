import { Route } from '@angular/router';
import { DepositsComponent } from '../deposits/deposits.component';
import { GlheadComponent } from '../glhead/glhead.component';
import { LoansComponent } from '../loans/loans.component';
import { MembersComponent } from '../members/members.component';
import { MiscellaneousAccountsComponent } from '../miscellaneous-accounts/miscellaneous-accounts.component';
import { SavingsComponent } from '../savings/savings.component';
import { ViewMemberComponent } from '../view-member/view-member.component';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      { path: 'loans', component: LoansComponent },
      { path: 'deposits', component: DepositsComponent },
      { path: 'savings', component: SavingsComponent },
      { path: 'members', component: MembersComponent },
      { path: 'glhead', component: GlheadComponent },
      {
        path: 'miscellaneousaccounts',
        component: MiscellaneousAccountsComponent,
      },

      {
        path: '',
        redirectTo: 'loans',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'viewmember',
    component: ViewMemberComponent,
  },
];
