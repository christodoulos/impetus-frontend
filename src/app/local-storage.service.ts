import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private _storage = new BehaviorSubject<{ [key: string]: any }>({});

  constructor() {
    this._storage.next(localStorage);
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, value);
    this._storage.next(localStorage);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
    this._storage.next(localStorage);
  }

  clear() {
    localStorage.clear();
    this._storage.next(localStorage);
  }

  get storage$() {
    return this._storage.asObservable();
  }
}
