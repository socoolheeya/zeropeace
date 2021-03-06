import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlarmService {

  constructor() {
    const number$ = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(()=> {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
  }
}
