import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard, ManageService, SystemService, UserService } from '@ssmcl-mfe/shared';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ssmcl-mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ssmcl-host';
  username: any;
  transDate: any;
  logged = false;
  currentDate: any;

  constructor(
    private alert: ToastrService,
    private router: Router,
    private userService: UserService,
    private manageService: ManageService
  ) {
    this.manageService.currentDate.subscribe((data) => {
      this.currentDate = data;
      this.ngOnInit();
    });

    this.userService.getLoggedInName.subscribe((data) => {
      this.username = data.userid;
    });
  }

  ngOnInit() {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/login']);
    } else {
      this.userService.getheader({
        userid: localStorage.getItem('user'),
      });
    }

    if (this.currentDate.Status == 'Closed') {
      this.alert.warning(
        'Dayend completed you cannot post any transactions',
        'Warning',
        { timeOut: 2000 }
      );
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
