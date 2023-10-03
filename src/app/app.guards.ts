import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { AppState, loggedIn } from './state';
import { ModalsService } from './services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private modalsService: ModalsService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkIfLoggedIn();
  }

  checkIfLoggedIn(): Observable<boolean> {
    return this.store.select(loggedIn).pipe(
      take(1),
      map((loggedIn) => {
        if (!loggedIn) {
          // Display your message here
          this.modalsService.showNotLoggedIn();
          this.router.navigate(['']);
          return false;
        }
        return true;
      })
    );
  }
}
