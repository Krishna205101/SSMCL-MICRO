import { Directive, EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../components/app.config';
import { BehaviorSubject } from 'rxjs';

@Directive()
@Injectable({
  providedIn: 'root',
})
export class UserService {
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {}

  getheader(obj: any) {
    this.getLoggedInName.emit(obj);
  }

  createUser(userobj: any) {
    return this.http.post(
      AppSettings.API_ENDPOINT + '/users//createuser',
      userobj
    );
  }

  login(user: any) {
    return this.http.post(AppSettings.API_ENDPOINT + '/users/signin', user);
  }

  userList(user: any) {
    return this.http.post(AppSettings.API_ENDPOINT + '/users/userlist', {
      userobj: user,
    });
  }
}
