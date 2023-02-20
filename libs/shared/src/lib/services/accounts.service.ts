import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../components/app.config';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private http: HttpClient) {}

  createaccount(account: any) {
    var accountobj = { accountobj: JSON.parse(JSON.stringify(account)) };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/accounts/saveaccount',
      accountobj
    ); // used only for miscellaneous accounts
  }
  saveaccountfull(account: any) {
    var accountobj = { accountobj: JSON.parse(JSON.stringify(account)) };
    console.log(accountobj);
    return this.http.post(
      AppSettings.API_ENDPOINT + '/accounts/saveaccountfull',
      accountobj
    ); //saveaccountfull
  }
  getaccounts(conditionobj: any) {
    var condition = { conditionobj: JSON.parse(JSON.stringify(conditionobj)) };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/accounts/getaccounts',
      condition
    );
  }
  getbalances(conditionobj: any) {
    var condition = { conditionobj: JSON.parse(JSON.stringify(conditionobj)) };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/accounts/fetchaccountbalances',
      condition
    );
  }

  getpendingaccounts() {
    //   console.log('Fetching pending accounts')
    return this.http.post(
      AppSettings.API_ENDPOINT + '/accounts/getpendingaccounts',
      {}
    );
  }
  approveaccount(approvalobj: any) {
    // approvalobj must be like {ID:1}
    var condition = { approvalobj: JSON.parse(JSON.stringify(approvalobj)) };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/accounts/approveaccount',
      condition
    );
  }
  getaccountdetails(accountobj: any) {
    var condition = { accountobj: JSON.parse(JSON.stringify(accountobj)) };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/accounts/getaccountdetails',
      condition
    );
  }

  getoverdueloans(conditionobj: any) {
    var condition = JSON.parse(JSON.stringify(conditionobj));
    return this.http.post(
      AppSettings.API_ENDPOINT + '/accounts/getoverdueloans',
      condition
    );
  }

  getoverduedeposits(conditionobj: any) {
    var condition = { conditionobj: JSON.parse(JSON.stringify(conditionobj)) };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/accounts/getoverduedeposits',
      condition
    );
  }

  getinterestpayments(conditionobj: any) {
    var condition = { conditionobj: JSON.parse(JSON.stringify(conditionobj)) };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/accounts/getdepositinterestpayments',
      condition
    );
  }

  getaccountbalance(accountid: any) {
    var condition = { accountid: accountid };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/accounts/getaccountbalance',
      condition
    );
  }

  correctstatement(accountid: any) {
    var condition = { accountid: accountid };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/accounts/correctstatement',
      condition
    );
  }
  
  //object.accountid,object.lastinterestpaiddate,object.nextinterestpaymentdue
  updateinterestpaiddate(obj: any) {
    var conditionobj = JSON.parse(JSON.stringify(obj));
    return this.http.post(
      AppSettings.API_ENDPOINT + '/accounts/updateinterestpaiddate',
      conditionobj
    );
  }
  // renewdeposit

  renewdeposit(obj: any) {
    var conditionobj = JSON.parse(JSON.stringify(obj));
    return this.http.post(
      AppSettings.API_ENDPOINT + '/accounts/renewdeposit',
      conditionobj
    );
  }

  getaccountsummary(obj: any) {
    console.log('Calling summary');
    var conditionobj = JSON.parse(JSON.stringify(obj));
    return this.http.post(
      AppSettings.API_ENDPOINT + '/accounts/accountsummary',
      conditionobj
    );
  }
  getliendetails(depositid: any) {
    console.log('Calling summary');
    var conditionobj = JSON.parse(JSON.stringify({ depositid: depositid }));
    return this.http.post(
      AppSettings.API_ENDPOINT + '/accounts/getliendetails',
      conditionobj
    );
  }
}
