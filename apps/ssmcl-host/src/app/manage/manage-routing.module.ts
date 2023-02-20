import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@ssmcl-mfe/shared';
import { AdminComponent } from './admin/admin.component';
import { ManageComponent } from './manage.component';
import { ManagedayComponent } from './manageday/manageday.component';
import { RegistrationComponent } from './admin/registration/registration.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { BackupComponent } from './admin/backup/backup.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    children: [
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: 'registration',
            component: RegistrationComponent,
          },
          {
            path: 'usersList',
            component: UsersListComponent,
          },
          {
            path: 'backUp',
            component: BackupComponent,
          },
          {
            path: '',
            redirectTo: 'registration',
            pathMatch: 'full',
          },
        ],
        canActivate: [AuthGuard],
      },
      {
        path: 'manageday',
        component: ManagedayComponent,
        canActivate: [AuthGuard],
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
