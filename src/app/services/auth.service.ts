import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Store } from '@ngrx/store';
import { AppState, login } from '../state';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private socialAuthService: SocialAuthService,
    private store: Store<AppState>,
    private http: HttpClient
  ) {
    this.socialAuthService.authState.subscribe((user) => {
      if (user) {
        console.log(user);
        const { idToken } = user;
        this.http
          .post('https://backend.atticadt.uwmh.eu/api/auth/google-login', {
            idToken,
          })
          .subscribe((res) => {
            console.log(res);
          });
        this.store.dispatch(login({ user }));
      }
    });
  }
}
