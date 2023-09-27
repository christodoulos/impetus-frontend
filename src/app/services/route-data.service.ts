import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

export interface RouteData {
  title: string;
  info: string;
}

@Injectable({
  providedIn: 'root',
})
export class RouteDataService {
  private routeDataSubject = new BehaviorSubject<RouteData>({} as RouteData);
  routeData$ = this.routeDataSubject.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const data = this.router.routerState.root.firstChild?.snapshot
          .data as RouteData;
        this.routeDataSubject.next(data);
      });
  }
}
