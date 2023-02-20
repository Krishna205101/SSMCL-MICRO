import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { ManagedayComponent } from './manageday/manageday.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './admin/registration/registration.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { BackupComponent } from './admin/backup/backup.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ManageComponent,
    ManagedayComponent,
    AdminComponent,
    RegistrationComponent,
    UsersListComponent,
    BackupComponent,
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  // providers: [],
  // bootstrap: [ManageComponent],
})
export class ManageModule {}
