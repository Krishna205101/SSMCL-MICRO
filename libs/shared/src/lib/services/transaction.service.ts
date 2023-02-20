import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppSettings } from '../components/app.config';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  insertTransaction(transactions: any) {
    var transactionobj = {
      transactionobj: JSON.parse(JSON.stringify(transactions)),
    };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/transactions/createtransaction',
      transactionobj
    );
  }
  fetchTransactions(condition: any) {
    var conditionobj = { conditionobj: JSON.parse(JSON.stringify(condition)) };

    return this.http.post(
      AppSettings.API_ENDPOINT + '/transactions/fetchtransactions',
      conditionobj
    );
  }
  getstatement(condition: any) {
    var conditionobj = { conditionobj: JSON.parse(JSON.stringify(condition)) };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/transactions/accountstatement',
      conditionobj
    );
  }
  approvetransactions(approvedtransactions: any) {
    var transactionobj = {
      transactionobj: JSON.parse(JSON.stringify(approvedtransactions)),
    };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/transactions/approvetransaction',
      transactionobj
    );
  }
  getbulkinteresttable(interestobj: any) {
    // example api getinteresttable(6,'A','01-01-2018','03-31-2018',callback)
    var condition = { conditionobj: JSON.parse(JSON.stringify(interestobj)) };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/intcal/getinteresttable',
      condition
    );
  }
  //getinterestlog
  getinterestlog() {
    //  console.log('In interest log')
    return this.http.post(
      AppSettings.API_ENDPOINT + '/intcal/getinterestlog',
      {}
    );
  }
  postinterest(interestcalarray: any) {
    var conditinobj = {
      interestobj: JSON.parse(JSON.stringify(interestcalarray)),
    };
    console.log(conditinobj);
    return this.http.post(
      AppSettings.API_ENDPOINT + '/intcal/postinterest',
      conditinobj
    );
  }

  depositinterestpayment(postingobject: any) {
    //   console.log('Posting interest')
    return this.http.post(
      AppSettings.API_ENDPOINT + '/transactions/depositinterestpayment',
      postingobject
    );
  }

  depositclosing(tranarrayobj: any) {
    //   console.log('Posting interest')
    return this.http.post(
      AppSettings.API_ENDPOINT + '/transactions/depositclosing',
      tranarrayobj
    );
  }
  getdepositroi(condition: any) {
    var conditionobj = { conditionobj: JSON.parse(JSON.stringify(condition)) };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/intcal/getdepositroi',
      conditionobj
    );
  }
  gettotalintpaidfdr(condition: any) {
    var conditionobj = { conditionobj: JSON.parse(JSON.stringify(condition)) };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/intcal/totalintpaidfdr',
      conditionobj
    );
  }
  changestatus(obj: any) {
    var conditionobj = JSON.parse(JSON.stringify(obj));
    return this.http.post(
      AppSettings.API_ENDPOINT + '/transactions/changestatus',
      conditionobj
    );
  }

  postloantransaction(obj: any) {
    var conditionobj = { interesttranobj: JSON.parse(JSON.stringify(obj)) };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/intcal/postloantransaction',
      conditionobj
    );
  }

  getintapplieddates() {
    return this.http.post(
      AppSettings.API_ENDPOINT + '/intcal/getintapplieddates',
      {}
    );
  }
  //getproducthistory
  getproducthistory(obj: any) {
    var conditionobj = JSON.parse(JSON.stringify(obj));
    return this.http.post(
      AppSettings.API_ENDPOINT + '/intcal/getproducthistory',
      conditionobj
    );
  }
  //getdividendlist
  getdividendlist(obj: any) {
    var conditionobj = JSON.parse(JSON.stringify(obj));
    return this.http.post(
      AppSettings.API_ENDPOINT + '/intcal/getdividendlist',
      conditionobj
    );
  }
  //pendinglientransactions
  getpendinglientransactions() {
    return this.http.post(
      AppSettings.API_ENDPOINT + '/transactions/getpendinglientransactions',
      {}
    );
  }
  //approvelien
  approvelien(securityid: any) {
    var conditionobj = JSON.parse(JSON.stringify({ securityid: securityid }));
    return this.http.post(
      AppSettings.API_ENDPOINT + '/transactions/approvelien',
      conditionobj
    );
  }
}
