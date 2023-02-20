import { Component } from '@angular/core';
import { UserService } from '@ssmcl-mfe/shared';

@Component({
  selector: 'ssmcl-mfe-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  users: any;
  page = 1;
  totalRecords : number | undefined

  constructor(private userService: UserService) {
    this.userService
      .userList({ userid: localStorage.getItem('user') })
      .subscribe((data: any) => {
        console.log(data.data);
        this.users = data.data;
        this.totalRecords = data.data.length
      });
  }
}
