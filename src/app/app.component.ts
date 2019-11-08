import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zeropeace';
  type: string = 'gcp';
  constructor(translate: TranslateService) {
    translate.setDefaultLang('ko');

    const number$ = new Observable(subscriber => {
      if(this.type === 'aws') {
        subscriber.next('aws');
      } else if(this.type === 'gcp') {
        subscriber.next('gcp');
      } else {
        subscriber.next('other');
      }
      setTimeout(()=> {
        //subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    this.type = 'gcp';
    number$.subscribe({
      next(x) {
        console.log('got value ' + x);
        },
      error(err) {
        console.error('something wrong occurred: ' + err);
        },
      complete() {
        console.log('done');
      }
    });
    number$.pipe()
    console.log('just after subscribe');
  }
}
