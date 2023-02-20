import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@ssmcl-mfe/shared';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ssmcl-mfe-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private userService: UserService, private alert: ToastrService) {}
}
