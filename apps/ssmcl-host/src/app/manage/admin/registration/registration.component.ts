import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@ssmcl-mfe/shared';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ssmcl-mfe-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(private userService: UserService, private alert: ToastrService) {}

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    userid: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(4),
      Validators.required,
    ]),
  });

  register(val: any) {
    var userobj = {
      userobj: {
        userid: val.userid,
        username: val.username,
        password: val.password,
        email: val.email,
        isDirector: 1,
      },
    };
    this.userService.createUser(userobj).subscribe((data: any) => {
      console.log(data);
      if (data.Status) {
        this.alert.error('User registration Failed', 'Error', {
          timeOut: 2000,
        });
      } else {
        this.form.reset()
        this.alert.success('User Registration Successful', 'Success', {
          timeOut: 2000,
        });
      }
    });
  }
}
