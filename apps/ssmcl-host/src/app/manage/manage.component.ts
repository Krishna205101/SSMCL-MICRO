import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ssmcl-mfe-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent {
  constructor(private route : Router){

  }

}
