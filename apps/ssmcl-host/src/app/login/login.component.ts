import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@ssmcl-mfe/shared';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ssmcl-mfe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  loginform = new FormGroup({
    userid: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private userService: UserService,
    private alertService: ToastrService,
    private router: Router
  ) {}

  login(user: any) {
    var userobj = { userobj: { userid: user.userid, password: user.password } };
    this.userService.login(userobj).subscribe((data: any) => {
      console.log(data);
      if (data.result == 'Success') {
        localStorage.clear();
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', user.userid);
        this.userService.getheader({
          userid: user.userid,
          trandate: '',
        });
        this.router.navigate(['/dashboard']);
      } else {
        this.alertService.error('Invalid userid and password');
        localStorage.clear();
      }
    });
  }
}
