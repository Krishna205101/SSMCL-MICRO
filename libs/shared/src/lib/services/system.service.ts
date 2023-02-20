import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../components/app.config';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  private systems = new BehaviorSubject<any>([]);
  private organisation = new BehaviorSubject<any>([]);
  private states = new BehaviorSubject<any>([]);
  private relations = new BehaviorSubject<any>([]);

  public systemDefaults = this.systems.asObservable();
  public organisationDetails = this.organisation.asObservable();
  public shareStates = this.systems.asObservable();
  public shareRelations = this.systems.asObservable();

  constructor(private http: HttpClient) {
    this.getsystemdefault('');
    this.getorganisationdetails();
    this.getlist('states', '').subscribe((data: any) => {
      this.states.next(data.data);
    });
    this.getlist('relations', '').subscribe((data: any) => {
      this.relations.next(data.data);
    });
  }

  getsystemdefault(sysname: any) {
    this.http
      .post(AppSettings.API_ENDPOINT + '/system/getsystemdefault', {
        sysname: sysname,
      })
      .toPromise()
      .then((data: any) => {
        this.systems.next(data.recordset);
      });
  }

  getorganisationdetails() {
    this.http
      .post(AppSettings.API_ENDPOINT + '/system/getorganisationdetails', {})
      .toPromise()
      .then((data: any) => {
        this.organisation.next(data.recordset[0]);
      });
  }

  // getlist(ptype: any, pcondition: any) {
  //   var params = { params: { type: ptype, condition: encodeURI(pcondition) } };
  //   this.http
  //     .get(AppSettings.API_ENDPOINT + '/autolist', params)
  //     .toPromise()
  //     .then((data: any) => {
  //       if (ptype == 'states') {
  //         this.states.next(data.data);
  //       } else {
  //         this.relations.next(data.data);
  //       }
  //     });
  // }

  getlist(ptype: any, pcondition: any) {
    var params = { params: { type: ptype, condition: encodeURI(pcondition) } };
    // console.log(params)
    return this.http.get(AppSettings.API_ENDPOINT + '/autolist', params);
  }
}
