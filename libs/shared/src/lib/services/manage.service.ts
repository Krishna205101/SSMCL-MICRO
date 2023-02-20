import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppSettings } from '../components/app.config';

@Injectable({
  providedIn: 'root',
})
export class ManageService {
  private date = new BehaviorSubject<any>('01-01-2000');

  public currentDate = this.date.asObservable();

  constructor(private http: HttpClient) {
    this.getcurrentday();
  }

  getcurrentday() {
    this.http
      .post(AppSettings.API_ENDPOINT + '/manage/getcurrentday', {})
      .toPromise()
      .then((data: any) => {
        var datearr = data.recordset[0].TransactionDate.split('-');
        var dtstring = datearr[1] + ' ' + datearr[0] + ' ' + datearr[2];
        let d = { ...data.recordset[0], parsedDate: new Date(dtstring) };
        console.log(d);
        this.date.next(d);
      });
  }

  daybegin(trandate: any) {
    var trandateobj = { trandate: trandate };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/manage/daybegin',
      trandateobj
    );
  }

  dayend(trandate: any) {
    var trandateobj = { trandate: trandate };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/manage/dayend',
      trandateobj
    );
  }

  backupdb() {
    console.log('In backup');
    var trandateobj = { userid: localStorage.getItem('userid') };
    return this.http.post(
      AppSettings.API_ENDPOINT + '/admin/backupdb',
      trandateobj
    );
  }
}
