import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoansComponent } from './loans/loans.component';
import { DepositsComponent } from './deposits/deposits.component';
import { SavingsComponent } from './savings/savings.component';
import { MembersComponent } from './members/members.component';
import { GlheadComponent } from './glhead/glhead.component';
import { MiscellaneousAccountsComponent } from './miscellaneous-accounts/miscellaneous-accounts.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ViewMemberComponent } from './view-member/view-member.component';

@NgModule({
  declarations: [
    AppComponent,
    LoansComponent,
    DepositsComponent,
    SavingsComponent,
    MembersComponent,
    GlheadComponent,
    MiscellaneousAccountsComponent,
    ViewMemberComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
