import { formatDate } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { AccountsService, ManageService } from '@ssmcl-mfe/shared';
import { PdfComponent } from '@ssmcl-mfe/shared';
import jsPDF from 'jspdf';

@Component({
  selector: 'ssmcl-mfe-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  @ViewChild('content', { static: false }) el!: ElementRef;

  dataObject: any = {
    reportname: 'overduedeposits',
    data: [],
    asondate: localStorage.getItem('trandatestring'),
    fromdate: '',
    todate: '',
    title: 'Overdue deposits as on ',
    summary: [],
    properties: {},
  };
  rows: any;
  p = 1;
  currentDate: any;
  parsedDate = '01-01-2000';
  totalRecords: number | undefined;
  maxSize = 5;

  constructor(
    private accountsService: AccountsService,
    private manageService: ManageService
  ) {
    this.manageService.currentDate.subscribe((data) => {
      this.currentDate = data.TransactionDate;
      this.parsedDate = data.parsedDate;
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.getoverduedeposit();
  }

  getoverduedeposit() {
    const date = formatDate(this.parsedDate, 'MM-dd-yyyy', 'en-US', '+530');
    console.log(date);
    console.log(this.currentDate);
    this.accountsService
      .getoverduedeposits({
        glid: '',
        trandate: date,
      })
      .subscribe((data: any) => {
        console.log(data);
        this.rows = data.recordset;
        this.dataObject.data = this.rows;
        this.totalRecords = this.rows.length;
      });
  }

  // download() {
  //   let pdf = new jsPDF('p', 'pt', 'a4');
  //   pdf.html(this.el.nativeElement, {
  //     callback: (pdf) => {
  //       pdf.save('demo.pdf');
  //     },
  //   });
  // }
}
