import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService, SystemService } from '@ssmcl-mfe/shared';

@Component({
  selector: 'ssmcl-mfe-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent {
  members: any;
  page = 1;
  name ='data'

  constructor(
    private memberService: MemberService,
    private listSerive: SystemService,
    private router: Router
  ) {
    this.listSerive.getlist('members', '').subscribe((data: any) => {
      console.log(data.data);
      this.members = data.data;
    });
  }

  view(data: any) {
    this.router.navigate(['masters/viewmember'], { queryParams: { ID: data } });
  }
}
