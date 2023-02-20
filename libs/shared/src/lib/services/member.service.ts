import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../components/app.config';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private http: HttpClient) {}

  getmemberdetails(memberid: any) {
    console.log('Get a member details')
    return this.http.post(
      AppSettings.API_ENDPOINT + '/member/getsinglememberdata',
      { memberid: memberid }
    );
  }

  createmember(memberobj: any) {
    console.log('Create member');
    return this.http.post(
      AppSettings.API_ENDPOINT + '/member/createmember',
      memberobj
    );
  }

  approvemember(memberid: any) {
    console.log('Approve Member')
    return this.http.post(AppSettings.API_ENDPOINT + '/member/approvemember', {
      id: memberid,
    });
  }

  getmembers(type: any) {
    console.log('Get All Members',type)
    return this.http.post(AppSettings.API_ENDPOINT + '/member/getmemberlist', {
      type: type,
    });
  }

  savecertificates(obj: any) {
    return this.http.post(
      AppSettings.API_ENDPOINT + '/member/savecertificates',
      obj
    );
  }

  checkcertificateexists(obj: any) {
    console.log('Service', obj);
    return this.http.post(
      AppSettings.API_ENDPOINT + '/member/checkcertificateexists',
      obj
    );
  }

  savedividenddetails(obj: any) {
    console.log('Service', obj);
    return this.http.post(
      AppSettings.API_ENDPOINT + '/member/savedividenddetails',
      obj
    );
  }
}
