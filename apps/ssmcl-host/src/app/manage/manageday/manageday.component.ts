import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ManageService, TransactionService } from '@ssmcl-mfe/shared';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ssmcl-mfe-manageday',
  templateUrl: './manageday.component.html',
  styleUrls: ['./manageday.component.css'],
})
export class ManagedayComponent {
  currentDate: any;
  model = false;

  constructor(
    private manageService: ManageService,
    private alert: ToastrService,
    private transactionsService: TransactionService
  ) {
    this.getcurrentDate();
  }

  getcurrentDate() {
    this.manageService.currentDate.subscribe((data) => {
      console.log(data);
      this.currentDate = data;
      if (data.Status == 'Closed') {
        this.model = true;
      } else {
        this.model = false;
      }
    });
  }

  beginTransactions() {
    this.manageService
      .daybegin(
        formatDate(
          this.currentDate.TransactionDate,
          'dd-MM-yyyy',
          'en-US',
          '+530'
        )
      )
      .subscribe((data: any) => {
        if (data.result == 'Success') {
          console.log(data);
          this.alert.success(data.message, 'Success', { timeOut: 2000 });
          this.manageService.getcurrentday();
          this.getcurrentDate();
        } else {
          this.alert.error(data.message, 'Error', { timeOut: 2000 });
        }
      });
  }

  endTransactions() {
    var condition = { status: "= 'N'" };
    this.transactionsService
      .fetchTransactions(condition)
      .subscribe((data: any) => {
        // If there are any pending transactions then
        // abort dayend
        if (data.data.length > 0) {
          this.alert.warning(
            'There are pending transactions you cannot perform dayend',
            'warning',
            { timeOut: 2000 }
          );
        } else {
          this.manageService
            .dayend(
              formatDate(
                this.currentDate.parsedDate,
                'dd-MM-yyyy',
                'en-US',
                '+530'
              )
            )
            .subscribe((data: any) => {
              console.log(data);
              if (data.result == 'Success') {
                this.manageService.backupdb().subscribe((data: any) => {
                  if (data.result == 'Success') {
                    this.alert.success(data.message);
                  } else {
                    this.alert.warning('Backup data task failed', 'warning');
                  }
                });

                this.alert.success(data.message, 'Success');
                this.manageService.getcurrentday();
                this.getcurrentDate();
              } else {
                this.alert.error(data.message);
              }
            });
        }
      });
  }
}
