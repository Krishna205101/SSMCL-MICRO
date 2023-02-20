import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MemberService } from '@ssmcl-mfe/shared';

@Component({
  selector: 'ssmcl-mfe-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.css'],
})
export class ViewMemberComponent implements OnInit {
  id: any;
  member: any;

  constructor(private router: Router, private memberService: MemberService) {
    this.id = this.router.getCurrentNavigation()?.extras.state;
    if (this.id) {
      this.getmemberDetails(this.id.id);
    } else {
      this.router.navigate(['masters/members']).catch((err) => {
        this.router.navigate(['/members']);
      });
    }
  }

  getmemberDetails(id: any) {
    console.log(id);
    this.memberService.getmemberdetails(id).subscribe((data: any) => {
      console.log(data);
      this.member = data.recordset;
    });
  }

  ngOnInit(): void {
    // this.router.queryParams.subscribe(params => {
    //   console.log(params)
    // });
  }
}
